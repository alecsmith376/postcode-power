// Stylised UK silhouette with postcode hotspot dots
const HOTSPOTS = [
  { x: 165, y: 185, r: 14, label: "M14", value: "+8.2%", hot: true },
  { x: 175, y: 165, r: 11, label: "LS6", value: "+6.4%", hot: true },
  { x: 145, y: 235, r: 9, label: "B16", value: "+4.1%" },
  { x: 215, y: 305, r: 16, label: "SW1A", value: "+3.0%", hot: true },
  { x: 195, y: 290, r: 7, label: "E1", value: "+5.6%" },
  { x: 95, y: 145, r: 6, label: "G42", value: "+2.1%" },
  { x: 110, y: 250, r: 6, label: "CF24", value: "+3.8%" },
  { x: 230, y: 270, r: 5, label: "CB1", value: "+4.4%" },
  { x: 165, y: 320, r: 5, label: "BN1", value: "+2.9%" },
];

export function UKHeatmap() {
  return (
    <svg viewBox="0 0 360 400" className="w-full h-auto" aria-label="UK postcode hotspots">
      <defs>
        <radialGradient id="hot" cx="50%" cy="50%">
          <stop offset="0%" stopColor="oklch(0.66 0.14 165)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.66 0.14 165)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.32 0.06 260)" />
          <stop offset="100%" stopColor="oklch(0.22 0.05 260)" />
        </linearGradient>
      </defs>
      {/* Stylised UK landmass */}
      <path
        d="M120 60 Q145 50 160 70 Q175 75 180 95 Q200 100 195 125 Q210 140 200 160 Q220 175 210 200 Q230 215 220 245 Q245 260 235 285 Q255 305 240 335 Q225 365 200 360 Q180 375 160 360 Q135 365 130 340 Q105 335 110 305 Q90 295 100 270 Q85 250 95 225 Q80 215 90 190 Q75 175 85 155 Q70 140 90 120 Q95 95 120 90 Z"
        fill="url(#land)"
        stroke="oklch(0.45 0.06 260)"
        strokeWidth="0.5"
      />
      {/* Scotland top */}
      <path d="M95 60 Q115 45 130 55 Q120 75 105 80 Q90 75 95 60 Z" fill="url(#land)" stroke="oklch(0.45 0.06 260)" strokeWidth="0.5" />
      {/* Glow halos */}
      {HOTSPOTS.filter((h) => h.hot).map((h, i) => (
        <circle key={`g${i}`} cx={h.x} cy={h.y} r={h.r * 2.5} fill="url(#hot)" />
      ))}
      {/* Dots */}
      {HOTSPOTS.map((h, i) => (
        <g key={i}>
          <circle
            cx={h.x}
            cy={h.y}
            r={h.r}
            fill={h.hot ? "oklch(0.66 0.14 165)" : "oklch(0.92 0.06 165)"}
            opacity={h.hot ? 0.95 : 0.7}
          />
          <circle cx={h.x} cy={h.y} r={2} fill="white" />
        </g>
      ))}
      {/* Labels */}
      {HOTSPOTS.filter((h) => h.hot).map((h, i) => (
        <g key={`l${i}`}>
          <rect x={h.x + h.r + 4} y={h.y - 10} width="52" height="20" rx="4" fill="white" />
          <text x={h.x + h.r + 10} y={h.y + 3} fontSize="9" fontWeight="600" fill="oklch(0.24 0.06 260)">
            {h.label}
          </text>
          <text x={h.x + h.r + 32} y={h.y + 3} fontSize="9" fontWeight="700" fill="oklch(0.55 0.16 165)">
            {h.value}
          </text>
        </g>
      ))}
    </svg>
  );
}