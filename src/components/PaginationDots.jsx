import React from "react";

const PaginationDots = ({
  total = 4,
  active = 1,
  onChange,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-1.5

        sm:gap-2
      "
    >
      {Array.from({
        length: total,
      }).map((_, index) => {
        const isActive =
          index === active;

        return (
          <button
            key={index}
            type="button"
            onClick={() =>
              onChange?.(index)
            }
            aria-label={`Go to slide ${
              index + 1
            }`}
            className={`
              h-[10px]
              w-[10px]

              rounded-full

              transition-all
              duration-300

              ${
                isActive
                  ? `
                    scale-110
                    bg-[#30322f]
                  `
                  : `
                    bg-[#d9d9d9]
                    hover:bg-[#999999]
                  `
              }
            `}
          />
        );
      })}
    </div>
  );
};

export default PaginationDots;