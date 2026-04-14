import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase-server";

interface GeoData {
  city?: string;
  regionName?: string;
  country?: string;
  lat?: number;
  lon?: number;
  isp?: string;
  org?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { ip, path, visitId } = await req.json();
    if (!ip) return NextResponse.json({ ok: false }, { status: 400 });

    // Get geolocation from ip-api.com (free, no key needed)
    let geo: GeoData = {};
    try {
      const res = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,lat,lon,isp,org`);
      if (res.ok) geo = await res.json();
    } catch {
      // geolocation is best-effort
    }

    const supabase = getSupabase();

    // Deduplicate: skip if same IP + path was logged in the last 30 seconds
    const thirtySecondsAgo = new Date(Date.now() - 30_000).toISOString();
    const { data: existing } = await supabase
      .from("visits")
      .select("id")
      .eq("ip", ip)
      .eq("path", path || "/")
      .gte("visited_at", thirtySecondsAgo)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json({ ok: true, deduplicated: true });
    }

    await supabase.from("visits").insert({
      visit_id: visitId || null,
      ip,
      path: path || "/",
      city: geo.city || null,
      region: geo.regionName || null,
      country: geo.country || null,
      lat: geo.lat || null,
      lon: geo.lon || null,
      isp: geo.isp || null,
      org: geo.org || null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
