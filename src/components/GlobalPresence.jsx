import React, { useEffect, useRef, useState } from "react";

import Globe from "globe.gl";
import { useNavigate } from "react-router-dom";

// =========================================================
// LOCATIONS
// =========================================================

const locations = [
  {
    id: 1,
    city: "Chennai",
    area: "West Tambaram",
    lat: 12.9249,
    lng: 80.1,
    flag: "/assets/images/icons/india.png",
  },

  {
    id: 2,
    city: "Trichy",
    area: "Woraiyur",
    lat: 10.8231,
    lng: 78.693,
    flag: "/assets/images/icons/india.png",
  },

  {
    id: 3,
    city: "Singapore",
    area: "Ang Mo Kio",
    lat: 1.3691,
    lng: 103.8454,
    flag: "/assets/images/icons/singapore.png",
  },
];

// =========================================================
// GLOBAL PRESENCE
// =========================================================

const GlobalPresence = () => {
  const globeContainerRef = useRef(null);

  const globeRef = useRef(null);

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // =======================================================
  // SECTION SCROLL ANIMATION
  // =======================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // =======================================================
  // INITIALIZE GLOBE
  // =======================================================

  useEffect(() => {
    if (!globeContainerRef.current) {
      return;
    }

    const container = globeContainerRef.current;

    // Prevent duplicate globe
    container.innerHTML = "";

    // =====================================================
    // CREATE GLOBE
    // =====================================================

    const globe = Globe()(container);

    globeRef.current = globe;

    // =====================================================
    // EARTH IMAGE
    // =====================================================

    globe
      .globeImageUrl(
        "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
      )

      .backgroundColor("rgba(0,0,0,0)")

      // IMPORTANT:
      // Globe itself uses 450x450.
      // CSS scales it responsively.
      .width(450)
      .height(450)

      // ===================================================
      // CAMERA
      // ===================================================

      .pointOfView(
        {
          lat: 10,
          lng: 90,
          altitude: 2,
        },
        0,
      )

      // ===================================================
      // LOCATION MARKERS
      // ===================================================

      .htmlElementsData(locations)

      .htmlElement((location) => {
        const marker = document.createElement("div");

        marker.className = `
            -translate-x-1/2
            -translate-y-full
            cursor-pointer
          `;

        const image = document.createElement("img");

        image.src = "/assets/images/icons/location.png";

        image.alt = location.city;

        image.className = `
            block

            h-[18px]
            w-[18px]

            object-contain

            drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]

            transition-transform
            duration-300

            hover:scale-125
          `;

        image.title = `${location.city} - ${location.area}`;

        marker.appendChild(image);

        return marker;
      });

    // =====================================================
    // CONTROLS
    // =====================================================

    const controls = globe.controls();

    controls.autoRotate = true;

    controls.autoRotateSpeed = 1.5;

    controls.enableZoom = false;

    controls.enablePan = false;

    controls.enableRotate = true;

    // =====================================================
    // RESPONSIVE GLOBE SCALE
    // =====================================================

    const updateGlobeSize = () => {
      if (!globeRef.current || !container) {
        return;
      }

      const width = window.innerWidth;

      let scale = 1;

      if (width < 400) {
        scale = 0.62;
      } else if (width < 480) {
        scale = 0.7;
      } else if (width < 640) {
        scale = 0.78;
      } else if (width < 768) {
        scale = 0.82;
      } else if (width < 1024) {
        scale = 0.88;
      } else if (width < 1280) {
        scale = 0.92;
      } else {
        scale = 1;
      }

      const canvas = container.querySelector("canvas");

      if (canvas) {
        canvas.style.transform = `scale(${scale})`;

        canvas.style.transformOrigin = "center center";
      }
    };

    // Run once
    requestAnimationFrame(updateGlobeSize);

    // Update on resize
    window.addEventListener("resize", updateGlobeSize);

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      window.removeEventListener("resize", updateGlobeSize);

      if (container) {
        container.innerHTML = "";
      }

      globeRef.current = null;
    };
  }, []);

  // =========================================================
  // GO TO LOCATION
  // =========================================================

  const goToLocation = (lat, lng) => {
    if (!globeRef.current) {
      return;
    }

    globeRef.current.pointOfView(
      {
        lat,
        lng,
        altitude: 1.8,
      },
      900,
    );
  };

  // =========================================================
  // TALK BUTTON
  // =========================================================

  const navigate = useNavigate();

  const handleTalkToUs = () => {
    navigate("/contact");
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative

        w-full

        overflow-hidden

        bg-gradient-to-br
        from-slate-100
        via-slate-100
        to-slate-200

        pt-8
        pb-0

        sm:pt-10

        lg:pt-12
      "
    >
      {/* =====================================================
          BACKGROUND CIRCLE
      ====================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          -right-[180px]
          -top-[120px]

          h-[550px]
          w-[550px]

          rounded-full

          bg-slate-300/30
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          flex
          w-full
          max-w-[1400px]

          flex-col

          items-center

          px-5

          sm:px-8

          lg:flex-row
          lg:items-center
          lg:justify-between

          lg:gap-8
          lg:px-12
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className={`
            flex

            w-full

            max-w-[650px]

            shrink-0

            flex-col

            items-center

            text-center

            lg:w-[50%]

            lg:items-start

            lg:text-left

            transition-all
            duration-[1000ms]

            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }
          `}
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              m-0

              w-full

              text-[31px]

              font-bold

              leading-[1.08]

              tracking-[-0.04em]

              text-slate-900

              sm:text-[38px]

              md:text-[46px]

              lg:text-[46px]

              xl:text-[54px]
            "
          >
            Trusted to Deliver
            <br />
            Excellence
            <br />
            Across Geographies
          </h1>

          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={handleTalkToUs}
            className="
              mt-5

              inline-flex

              min-h-[48px]

              items-center
              justify-center

              gap-2

              rounded-full

              bg-slate-900

              px-6
              py-3

              text-[14px]

              font-bold

              text-white

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1

              hover:bg-blue-700

              hover:shadow-xl

              active:scale-95

              sm:mt-6

              sm:min-h-[52px]

              sm:px-7
              sm:py-3.5

              sm:text-[15px]

              lg:mt-7
            "
          >
            Talk to us
            <span
              className="
                text-lg
              "
            >
              ↗
            </span>
          </button>
        </div>

        {/* ===================================================
            RIGHT GLOBE
        ==================================================== */}

        <div
          className={`
            relative

            mt-2

            flex

            h-[300px]
            w-full

            shrink-0

            items-center
            justify-center

            sm:h-[340px]

            md:h-[390px]

            lg:mt-0
            lg:h-[440px]
            lg:w-[50%]

            xl:h-[470px]

            transition-all
            duration-[1000ms]

            delay-[100ms]

            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }
          `}
        >
          {/* =================================================
              GLOBE CONTAINER
          ================================================= */}

          <div
            ref={globeContainerRef}
            className="
              globe-container

              flex

              h-[280px]
              w-[280px]

              shrink-0

              items-center
              justify-center

              sm:h-[320px]
              sm:w-[320px]

              md:h-[360px]
              md:w-[360px]

              lg:h-[420px]
              lg:w-[420px]

              xl:h-[450px]
              xl:w-[450px]
            "
          />
        </div>
      </div>

      {/* =====================================================
          LOCATION BAR
      ====================================================== */}

      <div
        className="
          relative

          z-20

          mx-auto

          mt-0

          w-full

          max-w-[1400px]

          border-t
          border-slate-300

          px-5

          sm:px-8

          lg:px-12
        "
      >
        <div
          className="
            grid

            grid-cols-1

            md:grid-cols-3
          "
        >
          {locations.map((location, index) => (
            <button
              key={location.id}
              type="button"
              onClick={() => goToLocation(location.lat, location.lng)}
              className={`
                  group

                  flex

                  min-h-[58px]

                  w-full

                  items-center
                  justify-center

                  gap-3

                  border-b
                  border-slate-300

                  px-4

                  py-3

                  text-left

                  transition-all
                  duration-300

                  hover:bg-white/60

                  md:min-h-[68px]

                  md:border-b-0

                  md:justify-center

                  md:py-3.5

                  ${index !== locations.length - 1 ? "md:border-r" : ""}
                `}
            >
              {/* FLAG */}

              <img
                src={location.flag}
                alt={location.city}
                className="
                    h-[20px]
                    w-[28px]

                    shrink-0

                    rounded-sm

                    object-cover

                    shadow-sm
                  "
              />

              {/* LOCATION TEXT */}

              <div
                className="
                    flex
                    flex-col
                  "
              >
                <span
                  className="
                      text-[14px]

                      font-medium

                      leading-tight

                      text-slate-900

                      sm:text-[15px]
                    "
                >
                  {location.city}
                </span>

                <span
                  className="
                      mt-0.5

                      text-[11px]

                      leading-tight

                      text-slate-500

                      sm:text-[12px]
                    "
                >
                  {location.area}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>{`

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          h1 {
            font-size: 28px;
          }

          .globe-container {
            transform-origin: center center;
          }

        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (
          min-width: 381px
        ) and (
          max-width: 480px
        ) {

          h1 {
            font-size: 31px;
          }

        }

        /* =========================================
           TABLET
        ========================================= */

        @media (
          min-width: 768px
        ) and (
          max-width: 1023px
        ) {

          h1 {
            max-width: 600px;
          }

        }

        /* =========================================
           LAPTOP
        ========================================= */

        @media (
          min-width: 1024px
        ) and (
          max-width: 1279px
        ) {

          h1 {
            max-width: 500px;
          }

        }

        /* =========================================
           MOBILE GLOBE
        ========================================= */

        @media (max-width: 767px) {

          .globe-container {
            overflow: visible;
          }

        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          section {
            scroll-behavior: auto;
          }

        }

      `}</style>
    </section>
  );
};

export default GlobalPresence;
