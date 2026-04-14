"use client";

import { useEffect, useState, useCallback } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Image from "next/image";

const W = 1300;
const H = 900;

const projection = geoNaturalEarth1()
  .scale(200)
  .translate([720, 445]);
const pathGen = geoPath(projection);

const THUMB = 105;
const GAP = 4;
const LABEL_H = 13;
const HOVER_SCALE = 1.22;

const LOCATIONS = [
  {
    name: "Seattle",
    coords: [-122.33, 47.61] as [number, number],
    photos: ["/Seattle 1.jpg", "/seattle 2.jpg", "/seattle 3.jpg", "/seattle 4.jpg", "/Seattle 7.jpg"],
    gx: 5, gy: 8, maxRow: 2, attach: "right" as const,
  },
  {
    name: "Whidbey Island",
    coords: [-122.62, 48.17] as [number, number],
    photos: ["/Whidbey island WA 1.jpg", "/Whidbey island WA 2.jpg", "/Whidbey Island WA 3.jpg"],
    gx: 235, gy: 5, maxRow: 3, attach: "bottom" as const,
  },
  {
    name: "University of Washington",
    coords: [-122.30, 47.66] as [number, number],
    photos: ["/UW 1.jpg", "/UW 2.jpg"],
    gx: 590, gy: 5, maxRow: 2, attach: "bottom" as const,
  },
  {
    name: "San Francisco",
    coords: [-122.42, 37.77] as [number, number],
    photos: ["/San Franciso1.jpg", "/san francisco2.jpg"],
    gx: 5, gy: 400, maxRow: 2, attach: "top" as const,
  },
  {
    name: "Laguna Beach",
    coords: [-117.78, 33.54] as [number, number],
    photos: ["/laguna beach1.jpg", "/laguna beach2.jpg"],
    gx: 65, gy: 620, maxRow: 2, attach: "top" as const,
  },
  {
    name: "New York",
    coords: [-74.0, 40.71] as [number, number],
    photos: ["/chinatown NY.jpg"],
    gx: 0, gy: 0, maxRow: 1, attach: "top" as const,
  },
  {
    name: "Venice",
    coords: [12.32, 45.44] as [number, number],
    photos: ["/venice1.jpg", "/venice2.jpg"],
    gx: 836, gy: 5, maxRow: 2, attach: "bottom" as const,
  },
  {
    name: "Nice",
    coords: [7.26, 43.71] as [number, number],
    photos: ["/nice1.jpg"],
    gx: 1080, gy: 80, maxRow: 1, attach: "left" as const,
  },
  {
    name: "Cannes",
    coords: [7.02, 43.55] as [number, number],
    photos: ["/Cannes 1.jpg"],
    gx: 1080, gy: 260, maxRow: 1, attach: "left" as const,
  },
  {
    name: "Aix-en-Provence",
    coords: [5.45, 43.53] as [number, number],
    photos: ["/aix en provence1.jpg"],
    gx: 1080, gy: 440, maxRow: 1, attach: "left" as const,
  },
];

const ALL_PHOTOS = LOCATIONS.flatMap((loc) =>
  loc.photos.map((src) => ({ src, location: loc.name }))
);

function groupDimensions(photos: string[], maxRow: number) {
  const n = Math.min(photos.length, maxRow * 2);
  const cols = Math.min(n, maxRow);
  const rows = Math.ceil(n / maxRow);
  return {
    gW: cols * (THUMB + GAP) - GAP,
    gH: rows * (THUMB + GAP) - GAP,
  };
}

function photoItems(photos: string[], gx: number, gy0: number, maxRow: number) {
  const n = Math.min(photos.length, maxRow * 2);
  return photos.slice(0, n).map((src, i) => ({
    src,
    x: gx + (i % maxRow) * (THUMB + GAP),
    y: gy0 + Math.floor(i / maxRow) * (THUMB + GAP),
  }));
}

function bezierPath(
  attach: "left" | "right" | "top" | "bottom",
  gx: number, gy: number, gW: number, gH: number,
  px: number, py: number
) {
  const cx = gx + gW / 2, cy = gy + gH / 2;
  switch (attach) {
    case "right":  { const ax = gx + gW + 8, ay = cy; return `M ${ax} ${ay} C ${(ax+px)/2} ${ay}, ${(ax+px)/2} ${py}, ${px} ${py}`; }
    case "left":   { const ax = gx - 8,       ay = cy; return `M ${ax} ${ay} C ${(ax+px)/2} ${ay}, ${(ax+px)/2} ${py}, ${px} ${py}`; }
    case "bottom": { const ax = cx, ay = gy + gH + 8;  return `M ${ax} ${ay} C ${ax} ${(ay+py)/2}, ${px} ${(ay+py)/2}, ${px} ${py}`; }
    case "top":    { const ax = cx, ay = gy - 8;       return `M ${ax} ${ay} C ${ax} ${(ay+py)/2}, ${px} ${(ay+py)/2}, ${px} ${py}`; }
  }
}

export default function PhotoMap() {
  const [countries, setCountries] = useState<string[]>([]);
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const closeExpanded = useCallback(() => setExpandedIndex(null), []);
  const navigate = useCallback((dir: 1 | -1) => {
    setExpandedIndex((i) => i === null ? null : (i + dir + ALL_PHOTOS.length) % ALL_PHOTOS.length);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeExpanded();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeExpanded, navigate]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fc = feature(topo as any, (topo as any).objects.countries);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paths = (fc as any).features.map((f: any) => pathGen(f) ?? "");
        setCountries(paths);
      });
  }, []);

  return (
    <>
      {/* Mobile: scrollable list of locations */}
      <div className="md:hidden space-y-8 pr-5">
        {LOCATIONS.map((loc) => (
          <div key={loc.name}>
            <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-fg mb-3">{loc.name}</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {loc.photos.map((src) => {
                const globalIdx = ALL_PHOTOS.findIndex((p) => p.src === src);
                return (
                  <button
                    key={src}
                    className="flex-none relative overflow-hidden cursor-zoom-in"
                    style={{ width: 120, height: 120 }}
                    onClick={() => setExpandedIndex(globalIdx)}
                  >
                    <Image src={src} alt={loc.name} fill className="object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: D3 map */}
      <div className="hidden md:block">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ overflow: "visible" }}>
        {/* Countries */}
        {countries.map((d, i) => (
          <path key={i} d={d} fill="#ede8e1" stroke="#c8c0b4" strokeWidth={0.4} />
        ))}

        {LOCATIONS.map((loc) => {
          const pin = projection(loc.coords);
          if (!pin) return null;
          const isLocHovered = hoveredLoc === loc.name;

          const gx = loc.name === "New York" ? pin[0] - THUMB / 2 : loc.gx;
          const gy = loc.name === "New York" ? H - THUMB - 24 : loc.gy;

          const { gW, gH } = groupDimensions(loc.photos, loc.maxRow);
          const photos = photoItems(loc.photos, gx, gy + LABEL_H + 16, loc.maxRow);
          const bPath = bezierPath(loc.attach, gx, gy + LABEL_H + 16, gW, gH, pin[0], pin[1]);

          const anyPhotoHovered = photos.some((p) => p.src === hoveredPhoto);
          const titleActive = isLocHovered || anyPhotoHovered;

          return (
            <g
              key={loc.name}
              onMouseEnter={() => setHoveredLoc(loc.name)}
              onMouseLeave={() => { setHoveredLoc(null); setHoveredPhoto(null); }}
            >
              {/* Line */}
              <path
                d={bPath}
                fill="none"
                stroke={isLocHovered ? "#FFE033" : "#111111"}
                strokeWidth={isLocHovered ? 1 : 0.5}
                strokeOpacity={isLocHovered ? 1 : 0.3}
                strokeDasharray={isLocHovered ? "none" : "3,3"}
                style={{ transition: "all 0.2s" }}
              />

              {/* Photos rendered first so label sits on top */}
              {photos.map(({ src, x, y }) => {
                const isPhotoHovered = hoveredPhoto === src;
                return (
                  <image
                    key={src}
                    href={src}
                    x={x} y={y}
                    width={THUMB} height={THUMB}
                    preserveAspectRatio="xMidYMid slice"
                    onMouseEnter={(e) => { e.stopPropagation(); setHoveredPhoto(src); }}
                    onMouseLeave={() => setHoveredPhoto(null)}
                    onClick={(e) => { e.stopPropagation(); setExpandedIndex(ALL_PHOTOS.findIndex((p) => p.src === src)); }}
                    style={{
                      opacity: isLocHovered ? (isPhotoHovered ? 1 : 0.72) : 0.78,
                      transformOrigin: `${x + THUMB / 2}px ${y + THUMB / 2}px`,
                      transform: isPhotoHovered ? `scale(${HOVER_SCALE})` : "scale(1)",
                      transition: "transform 0.18s ease, opacity 0.18s",
                      cursor: "zoom-in",
                      filter: isPhotoHovered ? "drop-shadow(0 0 7px rgba(255,255,255,0.95))" : "none",
                    }}
                  />
                );
              })}

              {/* Label rendered after photos so it's always on top */}
              <text
                x={gx}
                y={gy + LABEL_H - 1}
                fontSize={titleActive ? 12 : 10.5}
                fontFamily="ui-rounded, system-ui, sans-serif"
                fontWeight={500}
                fill="#111111"
                opacity={titleActive ? 1 : 0.62}
                letterSpacing={1.4}
                textAnchor="start"
                style={{ textTransform: "uppercase", transition: "font-size 0.18s, opacity 0.18s", pointerEvents: "none" }}
              >
                {loc.name}
              </text>
            </g>
          );
        })}

        {/* Pins always on top */}
        {LOCATIONS.map((loc) => {
          const pin = projection(loc.coords);
          if (!pin) return null;
          const isLocHovered = hoveredLoc === loc.name;
          return (
            <circle
              key={loc.name}
              cx={pin[0]} cy={pin[1]}
              r={isLocHovered ? 8 : 5}
              fill={isLocHovered ? "#FFE033" : "#111111"}
              stroke="#ffffff" strokeWidth={1.5}
              style={{ transition: "all 0.2s ease", cursor: "pointer" }}
              onMouseEnter={() => setHoveredLoc(loc.name)}
              onMouseLeave={() => setHoveredLoc(null)}
            />
          );
        })}
      </svg>
      </div>

      {expandedIndex !== null && (() => {
        const { src, location } = ALL_PHOTOS[expandedIndex];
        return (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm" onClick={closeExpanded}>
            <p className="text-white/60 text-[11px] uppercase tracking-[0.25em] font-medium mb-4">{location}</p>
            <div className="relative flex items-center gap-3 md:gap-6 px-8 md:px-16" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white text-2xl md:text-3xl leading-none transition-colors select-none flex-none">←</button>
              <Image src={src} alt={location} width={1200} height={900} className="max-h-[75vh] max-w-[85vw] md:max-h-[80vh] md:max-w-[80vw] w-auto h-auto object-contain" />
              <button onClick={() => navigate(1)} className="text-white/50 hover:text-white text-3xl leading-none transition-colors select-none">→</button>
            </div>
            <p className="text-white/30 text-[10px] tracking-widest mt-4">{expandedIndex + 1} / {ALL_PHOTOS.length}</p>
            <button onClick={closeExpanded} className="absolute top-6 right-8 text-white/40 hover:text-white text-2xl leading-none transition-colors">×</button>
          </div>
        );
      })()}
    </>
  );
}
