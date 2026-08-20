import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiSmile, FiArrowUp } from "react-icons/fi";

// ============================================================
// PUBLIC ASSETS
// ============================================================

const modelImage = "/assets/images/thumbs/model.png";
const bulbGif = "/assets/images/Gifs/bulb.gif";
const goalGif = "/assets/images/Gifs/goal.gif";
const growthGif = "/assets/images/Gifs/growth.gif";

// ============================================================
// FEATURE DATA
// ============================================================

const features = [
  {
    title: "We Start With Questions, Not Assumptions",
    description:
      "Before we recommend campaigns or technology, we understand your business, customers, competitors, and goals.",
    image: bulbGif,
  },
  {
    title: "We Measure What Matters",
    description:
      "Clicks and impressions are easy to celebrate. Revenue, qualified leads, customer retention, and business growth are what we care about.",
    image: goalGif,
  },
  {
    title: "Technology Meets Business Strategy",
    description:
      "From software development and AI to marketing and automation, we bring everything under one roof. Every part of your business works together instead of in silos.",
    image: growthGif,
  },
];

// ============================================================
// REVEAL VARIANTS
// ============================================================

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// ANIMATED NUMBER
// ============================================================

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(eased * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

// ============================================================
// RADIAL PROGRESS
// ============================================================

function RadialProgress({ percentage = 78 }) {
  const radius = 35;

  const circumference = 2 * Math.PI * radius;

  const progress = useMotionValue(0);

  const smoothProgress = useSpring(progress, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const [dashOffset, setDashOffset] = useState(circumference);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  useEffect(() => {
    if (isInView) {
      progress.set(percentage);
    }
  }, [isInView, percentage, progress]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const offset =
        circumference - (latest / 100) * circumference;

      setDashOffset(offset);
    });

    return () => unsubscribe();
  }, [smoothProgress, circumference]);

  return (
    <div
      ref={ref}
      className="
        relative
        flex
        h-[105px]
        w-[105px]
        items-center
        justify-center
        sm:h-[150px]
        sm:w-[150px]
      "
    >
      <svg
        viewBox="0 0 80 80"
        className="
          h-full
          w-full
          -rotate-90
          overflow-visible
        "
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="5"
        />

        <motion.circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            isInView ? dashOffset : circumference
          }
        />
      </svg>

      <motion.span
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 0.5,
              }
        }
        transition={{
          delay: 0.7,
          duration: 0.5,
          ease: "backOut",
        }}
        className="
          absolute
          text-xl
          font-bold
          text-white
          sm:text-3xl
        "
      >
        {percentage}%
      </motion.span>
    </div>
  );
}

// ============================================================
// FLOATING TAG
// ============================================================

function FloatingTag({
  children,
  className = "",
  initialX = 0,
  initialY = 0,
  rotate = 0,
  delay = 0,
}) {
  return (
    <motion.span
      drag
      dragConstraints={{
        top: -70,
        bottom: 70,
        left: -70,
        right: 70,
      }}
      dragElastic={0.4}
      whileHover={{
        scale: 1.06,
        rotate: rotate + 2,
      }}
      whileDrag={{
        scale: 1.1,
        rotate: rotate + 5,
        cursor: "grabbing",
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
        x: initialX,
        y: initialY,
        rotate,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: initialX,
        y: initialY,
        rotate,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className={`
        absolute
        z-20
        min-w-max
        cursor-grab
        select-none
        rounded-full
        px-3
        py-1.5
        text-center
        text-[9px]
        font-semibold
        text-white
        shadow-lg
        sm:px-6
        sm:py-2
        sm:text-sm
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}

// ============================================================
// FLOATING TAGS CARD
// ============================================================

function FloatingTags() {
  return (
    <div
      className="
        relative
        flex
        h-full
        min-h-[185px]
        items-center
        justify-center
        overflow-hidden
        rounded-[20px]
        border
        border-slate-200
        bg-slate-100
        sm:min-h-[280px]
        sm:rounded-[28px]
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[115px]
          w-[115px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-slate-300
          sm:h-[190px]
          sm:w-[190px]
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[75px]
          w-[75px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dotted
          border-slate-300
          sm:h-[125px]
          sm:w-[125px]
        "
      />

      <FloatingTag
        className="bg-indigo-600"
        initialX={-10}
        initialY={-45}
        rotate={-5}
        delay={0.1}
      >
        Cybersecurity
      </FloatingTag>

      <FloatingTag
        className="bg-pink-500"
        initialX={10}
        initialY={0}
        rotate={3}
        delay={0.25}
      >
        Infrastructure
      </FloatingTag>

      <FloatingTag
        className="bg-blue-600"
        initialX={-10}
        initialY={45}
        rotate={-3}
        delay={0.4}
      >
        Operational
      </FloatingTag>

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          h-2
          w-2
          rounded-full
          bg-blue-500
          sm:h-3
          sm:w-3
        "
      />
    </div>
  );
}

// ============================================================
// FEATURE ITEM
// ============================================================

function FeatureItem({
  title,
  description,
  image,
  index,
}) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        delay: index * 0.15,
      }}
      className="
        group
        flex
        items-start
        gap-5
      "
    >
      <motion.div
        whileHover={{
          scale: 1.12,
          rotate: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 12,
        }}
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          bg-slate-100
          p-2
          shadow-sm
        "
      >
        <motion.img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-contain
          "
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      </motion.div>

      <div className="max-w-[430px]">
        <motion.h6
          initial={{
            opacity: 0,
            x: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15 + index * 0.15,
            duration: 0.5,
          }}
          className="
            mb-3
            text-base
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-blue-600
            sm:text-lg
          "
        >
          {title}
        </motion.h6>

        <p
          className="
            text-sm
            leading-7
            text-slate-500
            sm:text-base
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN ABOUT SECTION
// ============================================================

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-12
        sm:py-5
        lg:py-5
      "
    >
      {/* BACKGROUND DECORATION */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-purple-100/40
          blur-3xl
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-4
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            rounded-[24px]
            bg-white
            p-4
            shadow-[0_20px_80px_rgba(0,0,0,0.07)]
            sm:rounded-[40px]
            sm:p-8
            lg:p-12
            xl:p-14
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-stretch
              gap-6
              lg:grid-cols-2
              lg:gap-10
              xl:gap-14
            "
          >
            {/* ==================================================
                LEFT SIDE - 4 CARDS
            ================================================== */}

            <div className="relative lg:h-full">
              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:gap-4
                  lg:h-full
                  lg:grid-rows-2
                "
              >
                {/* =================================================
                    88% CARD
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="
                    flex
                    min-h-[210px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[20px]
                    bg-blue-700
                    p-4
                    text-center
                    shadow-lg
                    transition-shadow
                    hover:shadow-2xl
                    lg:h-full
                    sm:min-h-[300px]
                    sm:rounded-[28px]
                    sm:p-8
                  "
                >
                  <motion.h3
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.6,
                      type: "spring",
                    }}
                    className="
                      mb-3
                      flex
                      items-center
                      gap-1.5
                      text-2xl
                      font-bold
                      text-white
                      sm:mb-8
                      sm:gap-3
                      sm:text-4xl
                    "
                  >
                    <motion.span
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FiArrowUp />
                    </motion.span>

                    <AnimatedNumber
                      value={88}
                      suffix="%"
                    />
                  </motion.h3>

                  <p
                    className="
                      max-w-[240px]
                      text-[10px]
                      leading-4
                      text-white/90
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    Average revenue growth for
                    successful clients
                  </p>
                </motion.div>

                {/* =================================================
                    MODEL CARD
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                  className="
                    relative
                    min-h-[210px]
                    overflow-visible
                    rounded-[20px]
                    bg-[#000435]
                    sm:min-h-[300px]
                    sm:rounded-[28px]
                    lg:h-full
                  "
                >
                  {/* MODEL IMAGE */}

                  <motion.img
                    src={modelImage}
                    alt="Business model"
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 0.8,
                        delay: 0.3,
                      },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-10
                      w-[95%]
                      max-w-[180px]
                      -translate-x-1/2
                      object-contain
                      sm:w-[85%]
                      sm:max-w-[280px]
                    "
                  />

                  {/* =================================================
                      SATISFACTION BADGE
                      
                      FIX:
                      Moved from TOP to BOTTOM so it
                      doesn't cover the girl's face.
                  ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.65,
                      duration: 0.6,
                      type: "spring",
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    className="
                      absolute
                      bottom-3
                      right-1
                      z-30
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border-b-2
                      border-blue-600
                      bg-white
                      px-2
                      py-1.5
                      shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                      sm:-right-5
                      sm:bottom-5
                      sm:gap-3
                      sm:rounded-xl
                      sm:border-b-4
                      sm:px-4
                      sm:py-3
                    "
                  >
                    <motion.span
                      animate={{
                        rotate: [0, -8, 8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-100
                        text-slate-500
                        sm:h-10
                        sm:w-10
                        sm:rounded-xl
                      "
                    >
                      <FiSmile
                        size={16}
                        className="sm:h-5 sm:w-5"
                      />
                    </motion.span>

                    <div>
                      <h6
                        className="
                          text-xs
                          font-bold
                          text-slate-900
                          sm:text-base
                        "
                      >
                        99.8%
                      </h6>

                      <p
                        className="
                          text-[8px]
                          font-medium
                          text-slate-500
                          sm:text-xs
                        "
                      >
                        Client Satisfaction
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* =================================================
                    RADIAL PROGRESS CARD
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    flex
                    min-h-[210px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[20px]
                    bg-[#000435]
                    p-4
                    text-center
                    shadow-lg
                    sm:min-h-[300px]
                    sm:rounded-[28px]
                    sm:p-8
                    lg:h-full
                  "
                >
                  <RadialProgress percentage={78} />

                  <p
                    className="
                      mt-2
                      max-w-[180px]
                      text-[10px]
                      leading-4
                      text-white/90
                      sm:mt-5
                      sm:max-w-[230px]
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    Average revenue growth for
                    successful clients
                  </p>
                </motion.div>

                {/* =================================================
                    TAGS CARD
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35,
                  }}
                  className="
                    min-h-[210px]
                    h-full
                    sm:min-h-[300px]
                  "
                >
                  <FloatingTags />
                </motion.div>
              </div>
            </div>

            {/* ==================================================
                RIGHT SIDE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                flex-col
                justify-center
                rounded-[24px]
                bg-white
                px-5
                py-7
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:rounded-[28px]
                sm:px-10
                sm:py-12
                lg:px-12
                lg:py-14
              "
            >
              {/* ABOUT US */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mb-3
                  inline-block
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-slate-900
                "
              >
                About Us
              </motion.span>

              {/* HEADING */}

              <div className="mb-8 overflow-hidden">
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    text-3xl
                    font-light
                    leading-[1.1]
                    text-slate-900
                    sm:text-4xl
                    lg:text-[46px]
                  "
                >
                  Bored of campaigns?
                  <br />

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.7,
                    }}
                    className="font-semibold"
                  >
                    We deliver growth.
                  </motion.span>
                </motion.h3>
              </div>

              {/* FEATURES */}

              <div className="flex flex-col gap-7">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}