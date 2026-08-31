export function MenuIcon({ open, size = 18 }: { open: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M3 6h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="origin-center transition duration-200"
        style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
      />
      <path
        d="M3 10h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="origin-center transition duration-200"
        style={open ? { opacity: 0 } : undefined}
      />
      <path
        d="M3 14h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="origin-center transition duration-200"
        style={open ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
      />
    </svg>
  );
}
