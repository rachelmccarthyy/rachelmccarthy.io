import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const { visitId, duration } = await req.json();
    if (!visitId || typeof duration !== "number") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const supabase = getSupabase();
    await supabase
      .from("visits")
      .update({ duration_seconds: Math.round(duration) })
      .eq("visit_id", visitId);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
