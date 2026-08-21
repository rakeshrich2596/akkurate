import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    let observer;

    /*
      Small delay allows the new React page
      to finish rendering before we search
      for animated elements.
    */
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        "[data-animate]"
      );

      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01,

          /*
            Start animation slightly before
            the element actually reaches viewport.
          */
          rootMargin: "0px 0px 80px 0px",
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

    }, 50);

    return () => {
      clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);


  return (
    <style>{`

      /* =====================================================
         BASE
      ===================================================== */

      [data-animate] {
        opacity: 0;
        will-change: transform, opacity;
      }


      /* =====================================================
         LEFT → RIGHT
      ===================================================== */

      [data-animate="left"] {
        transform: translateX(-35px);

        transition:
          opacity 0.45s ease-out,
          transform 0.45s ease-out;
      }

      [data-animate="left"].is-visible {
        opacity: 1;
        transform: translateX(0);
      }


      /* =====================================================
         RIGHT → LEFT
      ===================================================== */

      [data-animate="right"] {
        transform: translateX(35px);

        transition:
          opacity 0.45s ease-out,
          transform 0.45s ease-out;
      }

      [data-animate="right"].is-visible {
        opacity: 1;
        transform: translateX(0);
      }


      /* =====================================================
         CENTER → OUTWARD
      ===================================================== */

      [data-animate="center"] {
        opacity: 0;

        transform: scaleX(0.88);

        transform-origin: center center;

        transition:
          opacity 0.45s ease-out,
          transform 0.45s ease-out;
      }

      [data-animate="center"].is-visible {
        opacity: 1;

        transform: scaleX(1);
      }


      /* =====================================================
         CARD
      ===================================================== */

      [data-animate="card"] {
        opacity: 0;

        transform:
          translateY(22px)
          scale(0.98);

        transition:
          opacity 0.4s ease-out,
          transform 0.4s ease-out;
      }

      [data-animate="card"].is-visible {
        opacity: 1;

        transform:
          translateY(0)
          scale(1);
      }


      /* =====================================================
         SMALL CARD STAGGER
      ===================================================== */

      [data-delay="1"] {
        transition-delay: 0.02s;
      }

      [data-delay="2"] {
        transition-delay: 0.04s;
      }

      [data-delay="3"] {
        transition-delay: 0.06s;
      }

      [data-delay="4"] {
        transition-delay: 0.08s;
      }

      [data-delay="5"] {
        transition-delay: 0.10s;
      }

      [data-delay="6"] {
        transition-delay: 0.12s;
      }


      /* =====================================================
         UP
      ===================================================== */

      [data-animate="up"] {
        opacity: 0;

        transform: translateY(20px);

        transition:
          opacity 0.4s ease-out,
          transform 0.4s ease-out;
      }

      [data-animate="up"].is-visible {
        opacity: 1;

        transform: translateY(0);
      }


      /* =====================================================
         MOBILE
      ===================================================== */

      @media (max-width: 767px) {

        [data-animate="left"] {
          transform: translateX(-20px);
        }

        [data-animate="right"] {
          transform: translateX(20px);
        }

        [data-animate="card"] {
          transform:
            translateY(15px)
            scale(0.99);
        }

        [data-animate="center"] {
          transform: scaleX(0.94);
        }

      }


      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      @media (prefers-reduced-motion: reduce) {

        [data-animate],
        [data-animate].is-visible {
          opacity: 1 !important;

          transform: none !important;

          transition: none !important;
        }

      }

    `}</style>
  );
}

export default ScrollAnimations;