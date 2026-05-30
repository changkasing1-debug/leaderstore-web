export function StarRating({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const starClass = size === "sm" ? "text-[13px]" : "text-[18px]";
  const labelClass = size === "sm" ? "text-[11px]" : "text-sm";
  const countClass = size === "sm" ? "text-[10px]" : "text-xs";
  const percent = (rating / 5) * 100;

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative">
        {/* Empty stars */}
        <div className={`flex ${starClass} text-[#CFD9E6]`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={`empty-${i}`} className="leading-none">
              ★
            </span>
          ))}
        </div>
        {/* Filled stars */}
        <div
          className={`absolute inset-0 overflow-hidden flex ${starClass} text-[#E5A11D]`}
          style={{ width: `${percent}%` }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={`filled-${i}`} className="leading-none">
              ★
            </span>
          ))}
        </div>
      </div>
      <span className={`${labelClass} font-bold text-[#07121A]`}>{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className={`${countClass} text-[#526880]`}>({reviewCount} reviews)</span>
      )}
    </div>
  );
}
