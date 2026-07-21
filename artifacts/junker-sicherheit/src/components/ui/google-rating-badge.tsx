interface GoogleRatingBadgeProps {
  size?: "sm" | "lg";
}

export function GoogleRatingBadge({ size = "sm" }: GoogleRatingBadgeProps) {
  const isLg = size === "lg";

  return (
    <a
      href="https://maps.app.goo.gl/placeholder"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 no-underline hover:opacity-80 transition-opacity ${isLg ? "py-1" : ""}`}
    >
      {/* Stars */}
      <span className={`flex items-center gap-0.5 ${isLg ? "text-xl" : "text-sm"}`} style={{ color: "#F59E0B" }}>
        {"★★★★★"}
      </span>
      {/* Rating value */}
      <span className={`font-bold text-slate-900 ${isLg ? "text-base" : "text-sm"}`}>5,0</span>
      {/* Review count */}
      <span className={`text-slate-500 ${isLg ? "text-sm" : "text-xs"}`}>47 Bewertungen</span>
      {/* Google label */}
      <span className={`font-semibold text-slate-600 ${isLg ? "text-sm" : "text-xs"}`}>Google</span>
    </a>
  );
}
