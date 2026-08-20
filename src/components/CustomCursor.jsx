import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      className={`
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]

        hidden
        md:block

        transition-opacity
        duration-200

        ${
          isVisible
            ? "opacity-100"
            : "opacity-0"
        }
      `}
      style={{
        transform: `translate3d(
          ${position.x}px,
          ${position.y}px,
          0
        )`,
      }}
    >
      {/* OUTER CIRCLE */}

      <div
        className="
          absolute

          -left-[18px]
          -top-[18px]

          h-[36px]
          w-[36px]

          rounded-full

          border
          border-[#081a4b]

          bg-white/20

          backdrop-blur-[1px]

          transition-all
          duration-150
        "
      />

      {/* INNER DOT */}

      <div
        className="
          absolute

          -left-[3px]
          -top-[3px]

          h-[6px]
          w-[6px]

          rounded-full

          bg-[#081a4b]
        "
      />
    </div>
  );
}