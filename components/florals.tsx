/**
 * Hand-drawn style botanical SVGs for the spring floral theme.
 * No external assets — everything is inline SVG so the site stays self-contained.
 */

function petalPositions(count: number) {
  return Array.from({ length: count }).map((_, i) => ({
    rotate: (360 / count) * i,
  }));
}

/** White daisy — white petals, sunflower yellow center */
export function Daisy({
  className = "",
  size = 64,
  petals = 8,
}: {
  className?: string;
  size?: number;
  petals?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {petalPositions(petals).map((p, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="18"
          rx="8.5"
          ry="17"
          fill="#ffffff"
          stroke="#d9ecee"
          strokeWidth="1.5"
          transform={`rotate(${p.rotate} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="13" fill="#FDC800" stroke="#eab300" strokeWidth="2" />
    </svg>
  );
}

/** Black-eyed Susan — sunflower yellow petals, dark chocolate center */
export function BlackEyedSusan({
  className = "",
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  const petals = 11;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {petalPositions(petals).map((p, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="17"
          rx="8"
          ry="16"
          fill="#FDC800"
          stroke="#e6b400"
          strokeWidth="1.5"
          transform={`rotate(${p.rotate} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="15" fill="#4a2e12" />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3;
        return (
          <circle
            key={i}
            cx={50 + 6 * Math.cos(a)}
            cy={50 + 6 * Math.sin(a)}
            r="1.7"
            fill="#2c1a08"
          />
        );
      })}
    </svg>
  );
}

/** Leaf sprig — meadow green leaves along a stem */
export function LeafSprig({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 118 C50 88, 50 40, 52 8"
        stroke="#238823"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 30 C30 22, 16 30, 12 44 C28 46, 44 40, 50 30Z"
        fill="#3FA34D"
        stroke="#238823"
        strokeWidth="1.5"
      />
      <path
        d="M50 46 C70 38, 84 46, 88 60 C72 62, 56 56, 50 46Z"
        fill="#3FA34D"
        stroke="#238823"
        strokeWidth="1.5"
      />
      <path
        d="M50 66 C30 58, 16 66, 12 80 C28 82, 44 76, 50 66Z"
        fill="#2e8b3c"
        stroke="#238823"
        strokeWidth="1.5"
      />
      <path
        d="M50 84 C70 76, 84 84, 88 98 C72 100, 56 94, 50 84Z"
        fill="#2e8b3c"
        stroke="#238823"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Tiny daisy bullet used in the service list */
export function MiniDaisy({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {petalPositions(6).map((p, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="24"
          rx="10"
          ry="18"
          fill="#ffffff"
          stroke="#238823"
          strokeWidth="3"
          transform={`rotate(${p.rotate} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="16" fill="#FDC800" stroke="#eab300" strokeWidth="3" />
    </svg>
  );
}

/** Composed cluster of daisy + black-eyed susan + leaves for page corners */
export function FlowerCluster({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={className} style={{ width: size, height: size }} aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center">
        <LeafSprig size={size * 0.72} className="translate-y-4" />
      </div>
      <div className="absolute left-0 top-0">
        <Daisy size={size * 0.55} className="floaty [filter:drop-shadow(0_10px_12px_rgba(17,35,22,0.25))]" />
      </div>
      <div className="absolute bottom-0 right-0">
        <BlackEyedSusan
          size={size * 0.62}
          className="floaty-slow [filter:drop-shadow(0_10px_12px_rgba(17,35,22,0.25))]"
        />
      </div>
      <div className="absolute right-0 top-2">
        <Daisy size={size * 0.4} className="floaty-slow [filter:drop-shadow(0_8px_10px_rgba(17,35,22,0.2))]" />
      </div>
    </div>
  );
}
