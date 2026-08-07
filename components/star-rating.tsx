"use client";

import { useId } from "react";

/** Google-style star rating with half-star support (sunflower yellow fill) */
export function StarRating({
  rating = 4.5,
  size = 22,
  className = "",
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(Math.max(rating - (i - 1), 0), 1);
        const gradId = `star-${uid}-${i}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={gradId}>
                <stop offset={`${fill * 100}%`} stopColor="#FDC800" />
                <stop offset={`${fill * 100}%`} stopColor="#e9e2cf" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z"
              fill={`url(#${gradId})`}
              stroke="#112316"
              strokeWidth="0.8"
            />
          </svg>
        );
      })}
    </div>
  );
}
