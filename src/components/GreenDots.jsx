/* eslint-disable react-hooks/purity */
export default function GreenDots() {
  const DOT_COUNT = 100;
  return (
    <>
      {/* GREEN DOTS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        {[...Array(DOT_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-sm opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
