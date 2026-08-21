import { useState } from "react";
import { Link } from "react-router-dom";


/* =========================================================
   SERVICES
========================================================= */

const serviceGroups = [
  {
    title: "Digital Marketing",

    items: [
      {
        label: "Generative Engine Optimization (GEO)",
        href: "/geo",
      },
      {
        label: "Answer Engine Optimization (AEO)",
        href: "/aeo",
      },
      {
        label: "Search Engine Optimization (SEO)",
        href: "/seo",
      },
      {
        label: "Google Ads",
        href: "/google-ads",
      },
      {
        label: "Meta Ads",
        href: "/meta-ads",
      },
      {
        label: "LinkedIn Ads",
        href: "/linkedin-ads",
      },
      {
        label: "Social Media Marketing",
        href: "/social-media-marketing",
      },
      {
        label: "YouTube Marketing",
        href: "/youtube-marketing",
      },
      {
        label: "Google My Business Page",
        href: "/google-my-business",
      },
    ],
  },

  {
    title: "Website Development",

    items: [
      {
        label: "App Development",
        href: "/app-development",
      },
      {
        label: "Website Development",
        href: "/website-development",
      },
      {
        label: "Web Application",
        href: "/web-application",
      },
      {
        label: "CMS Development",
        href: "/cms-development",
      },
      {
        label: "E-Commerce Service",
        href: "/e-commerce",
      },
      {
        label: "Website Design",
        href: "/website-design",
      },
    ],
  },

  {
    title: "Branding",

    items: [
      {
        label: "Logo Design",
        href: "/logo-design",
      },
      {
        label: "Content Creation",
        href: "/content-creation",
      },
      {
        label: "UI/UX Design",
        href: "/ui-ux-design",
      },
      {
        label: "Motion Graphics",
        href: "/motion-graphics",
      },
      {
        label: "Explainer Video",
        href: "/explainer-video",
      },
      {
        label: "Corporate Video",
        href: "/corporate-video",
      },
      {
        label: "Reels Making",
        href: "/reels-making",
      },
    ],
  },
];


/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  "B2B Marketing",
  "Education",
  "Healthcare",
  "Hospitality",
  "Real Estate",
  "Jewellery",
  "Travel",
  "Food",
  "Clothing",
  "Manufacture",
];


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [mobileServices, setMobileServices] =
    useState(false);

  const [mobileDigitalMarketing, setMobileDigitalMarketing] =
    useState(false);

  const [mobileWebsiteDevelopment, setMobileWebsiteDevelopment] =
    useState(false);

  const [mobileBranding, setMobileBranding] =
    useState(false);


  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileServices(false);
    setMobileDigitalMarketing(false);
    setMobileWebsiteDevelopment(false);
    setMobileBranding(false);
  };


  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        w-full
        border-b
        border-gray-100
        bg-white/95
        backdrop-blur-md
      "
    >

      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[76px]
          max-w-[1600px]
          items-center

          px-4

          sm:px-6

          lg:h-[82px]
          lg:px-10

          xl:px-16
        "
      >

        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            flex
            shrink-0
            items-center
          "
          aria-label="Akkurate Home"
        >

          <img
            src="/assets/images/logo/logo_1.png"
            alt="Akkurate Logo"
            className="
              h-[58px]
              w-[150px]
              object-contain
              object-left

              sm:h-[64px]
              sm:w-[175px]

              lg:h-[68px]
              lg:w-[190px]

              xl:h-[72px]
              xl:w-[205px]
            "
          />

        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="
            ml-auto
            hidden
            items-center

            gap-5

            lg:flex

            xl:gap-7
          "
        >

          {/* =================================================
              HOME
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              text-[15px]
              font-medium
              text-[#151b2c]

              transition

              hover:text-[#1455d9]

              xl:text-[16px]
            "
          >
            Home
          </Link>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="group relative">

            <button
              type="button"
              className="
                flex
                items-center
                gap-1.5

                text-[15px]
                font-medium
                text-[#151b2c]

                transition

                hover:text-[#1455d9]

                xl:text-[16px]
              "
            >

              Services

              <svg
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-200

                  group-hover:rotate-180
                "
                viewBox="0 0 20 20"
                fill="none"
              >

                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </button>


            {/* =================================================
                DESKTOP SERVICES DROPDOWN
            ================================================= */}

            <div
              className="
                invisible

                absolute
                left-1/2
                top-full
                z-[110]

                mt-5

                w-[min(850px,calc(100vw-40px))]

                -translate-x-1/2
                translate-y-2

                rounded-2xl

                border
                border-gray-100

                bg-white

                p-6

                opacity-0

                shadow-[0_20px_60px_rgba(0,0,0,0.12)]

                transition-all
                duration-200

                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100

                xl:p-7
              "
            >

              <div
                className="
                  grid
                  grid-cols-3
                  gap-6

                  xl:gap-8
                "
              >

                {serviceGroups.map((group) => (

                  <div
                    key={group.title}
                    className="min-w-0"
                  >

                    <h3
                      className="
                        mb-4

                        border-b
                        border-gray-100

                        pb-3

                        text-sm
                        font-bold
                        uppercase
                        tracking-wide

                        text-[#151b2c]
                      "
                    >
                      {group.title}
                    </h3>


                    <div className="space-y-2">

                      {group.items.map((item) => (

                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="
                            group/item

                            flex
                            items-center
                            justify-between
                            gap-2

                            text-[13px]
                            leading-6

                            text-gray-500
                            no-underline

                            transition-all
                            duration-200

                            hover:translate-x-1
                            hover:text-[#1455d9]
                          "
                        >

                          <span>
                            {item.label}
                          </span>


                          <span
                            className="
                              text-[12px]

                              opacity-0

                              transition-all
                              duration-200

                              group-hover/item:translate-x-0.5
                              group-hover/item:opacity-100
                            "
                          >
                            →
                          </span>

                        </Link>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              INDUSTRIES
          ================================================= */}

          <div className="group relative">

            <button
              type="button"
              className="
                flex
                items-center
                gap-1.5

                text-[15px]
                font-medium

                text-[#151b2c]

                transition

                hover:text-[#1455d9]

                xl:text-[16px]
              "
            >

              Industries

              <svg
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-200

                  group-hover:rotate-180
                "
                viewBox="0 0 20 20"
                fill="none"
              >

                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </button>


            {/* INDUSTRIES DROPDOWN */}

            <div
              className="
                invisible

                absolute
                left-0
                top-full
                z-[110]

                mt-5

                w-[250px]

                translate-y-2

                rounded-2xl

                border
                border-gray-100

                bg-white

                p-3

                opacity-0

                shadow-[0_20px_60px_rgba(0,0,0,0.12)]

                transition-all
                duration-200

                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <div className="space-y-1">

                {industries.map((industry) => (

                  <span
                    key={industry}
                    className="
                      block

                      cursor-default

                      rounded-lg

                      px-4
                      py-2.5

                      text-sm

                      text-gray-600
                    "
                  >
                    {industry}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              OUR WORK
          ================================================= */}

          <Link
            to="/showcase"
            onClick={closeMobileMenu}
            className="
              text-[15px]
              font-medium

              text-[#151b2c]

              transition

              hover:text-[#1455d9]

              xl:text-[16px]
            "
          >
            Our Work
          </Link>


          {/* =================================================
              BLOG
          ================================================= */}

          <Link
            to="/blog"
            onClick={closeMobileMenu}
            className="
              text-[15px]
              font-medium

              text-[#151b2c]

              transition

              hover:text-[#1455d9]

              xl:text-[16px]
            "
          >
            Blog
          </Link>


          {/* =================================================
              ABOUT
          ================================================= */}

          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="
              text-[15px]
              font-medium

              text-[#151b2c]

              transition

              hover:text-[#1455d9]

              xl:text-[16px]
            "
          >
            About Us
          </Link>


          {/* =================================================
              CONTACT
          ================================================= */}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              inline-flex
              items-center
              justify-center

              rounded-full

              bg-[#073b91]

              px-6
              py-3

              text-[15px]
              font-bold
              text-white

              shadow-[0_8px_20px_rgba(7,59,145,0.2)]

              transition
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#052f75]

              xl:px-7
              xl:py-3.5

              xl:text-[16px]
            "
          >
            Contact Us
          </Link>

        </nav>


        {/* ===================================================
            MOBILE CONTROLS
        =================================================== */}

        <div
          className="
            ml-auto

            flex
            items-center

            gap-2.5

            lg:hidden

            sm:gap-3
          "
        >

          {/* MOBILE CONTACT */}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              inline-flex
              items-center
              justify-center

              rounded-full

              bg-[#073b91]

              px-4
              py-2.5

              text-[13px]
              font-bold
              text-white

              shadow-[0_8px_20px_rgba(7,59,145,0.16)]

              transition

              hover:bg-[#052f75]

              sm:px-5
              sm:py-3
              sm:text-[14px]
            "
          >
            Contact Us
          </Link>


          {/* HAMBURGER */}

          <button
            type="button"
            onClick={() =>
              setMobileMenu((prev) => !prev)
            }
            className="
              flex

              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              border
              border-gray-200

              bg-white

              text-gray-800

              transition

              hover:border-[#1455d9]
              hover:text-[#1455d9]
            "
            aria-label={
              mobileMenu
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenu}
          >

            {mobileMenu ? (

              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >

                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            ) : (

              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >

                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            )}

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (

        <div
          className="
            border-t
            border-gray-100

            bg-white

            px-4
            py-4

            shadow-lg

            sm:px-6

            lg:hidden
          "
        >

          <nav className="flex flex-col gap-1">


            {/* =================================================
                HOME
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                rounded-xl

                px-4
                py-3.5

                text-[15px]
                font-medium

                text-gray-800

                transition

                hover:bg-gray-50
                hover:text-[#1455d9]
              "
            >
              Home
            </Link>


            {/* =================================================
                SERVICES
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMobileServices(
                  (prev) => !prev
                )
              }
              className="
                flex
                w-full
                items-center
                justify-between

                rounded-xl

                px-4
                py-3.5

                text-left

                text-[15px]
                font-medium

                text-gray-800

                transition

                hover:bg-gray-50
              "
            >

              <span>
                Services
              </span>

              <span
                className={`
                  text-lg

                  transition-transform
                  duration-200

                  ${
                    mobileServices
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                ↓
              </span>

            </button>


            {/* =================================================
                MOBILE SERVICES DROPDOWN
            ================================================= */}

            {mobileServices && (

              <div
                className="
                  ml-3

                  rounded-xl

                  border
                  border-gray-100

                  bg-gray-50

                  p-3
                "
              >

                {/* =============================================
                    DIGITAL MARKETING
                ============================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileDigitalMarketing(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    px-3
                    py-3

                    text-left

                    text-[14px]
                    font-bold

                    text-[#151b2c]
                  "
                >

                  <span>
                    Digital Marketing
                  </span>

                  <span className="text-lg">
                    {mobileDigitalMarketing
                      ? "−"
                      : "+"}
                  </span>

                </button>


                {/* =============================================
                    DIGITAL MARKETING LINKS
                ============================================= */}

                {mobileDigitalMarketing && (

                  <div
                    className="
                      space-y-1

                      border-l
                      border-gray-200

                      pl-3
                    "
                  >

                    {serviceGroups[0].items.map(
                      (item) => (

                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="
                            group/mobile-seo

                            flex
                            items-center
                            justify-between

                            rounded-lg

                            px-3
                            py-2.5

                            text-[13px]

                            text-gray-600

                            transition

                            hover:bg-white
                            hover:text-[#1455d9]
                          "
                        >

                          <span>
                            {item.label}
                          </span>

                          <span
                            className="
                              text-[12px]

                              opacity-0

                              transition

                              group-hover/mobile-seo:opacity-100
                            "
                          >
                            →
                          </span>

                        </Link>

                      )
                    )}

                  </div>

                )}


                {/* =============================================
                    WEBSITE DEVELOPMENT
                ============================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileWebsiteDevelopment(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    px-3
                    py-3

                    text-left

                    text-[14px]
                    font-bold

                    text-[#151b2c]
                  "
                >

                  <span>
                    Website Development
                  </span>

                  <span className="text-lg">
                    {mobileWebsiteDevelopment
                      ? "−"
                      : "+"}
                  </span>

                </button>


                {mobileWebsiteDevelopment && (

                  <div
                    className="
                      space-y-1

                      border-l
                      border-gray-200

                      pl-3
                    "
                  >

                    {serviceGroups[1].items.map(
                      (item) => (

                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="
                            block

                            rounded-lg

                            px-3
                            py-2.5

                            text-[13px]

                            text-gray-600

                            transition

                            hover:bg-white
                            hover:text-[#1455d9]
                          "
                        >
                          {item.label}
                        </Link>

                      )
                    )}

                  </div>

                )}


                {/* =============================================
                    BRANDING
                ============================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileBranding(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    px-3
                    py-3

                    text-left

                    text-[14px]
                    font-bold

                    text-[#151b2c]
                  "
                >

                  <span>
                    Branding
                  </span>

                  <span className="text-lg">
                    {mobileBranding
                      ? "−"
                      : "+"}
                  </span>

                </button>


                {mobileBranding && (

                  <div
                    className="
                      space-y-1

                      border-l
                      border-gray-200

                      pl-3
                    "
                  >

                    {serviceGroups[2].items.map(
                      (item) => (

                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="
                            block

                            rounded-lg

                            px-3
                            py-2.5

                            text-[13px]

                            text-gray-600

                            transition

                            hover:bg-white
                            hover:text-[#1455d9]
                          "
                        >
                          {item.label}
                        </Link>

                      )
                    )}

                  </div>

                )}

              </div>

            )}


            {/* =================================================
                INDUSTRIES
            ================================================= */}

            <button
              type="button"
              className="
                rounded-xl

                px-4
                py-3.5

                text-left

                text-[15px]
                font-medium

                text-gray-800
              "
            >
              Industries
            </button>


            {/* =================================================
                OUR WORK
            ================================================= */}

            <Link
              to="/showcase"
              onClick={closeMobileMenu}
              className="
                rounded-xl

                px-4
                py-3.5

                text-[15px]
                font-medium

                text-gray-800

                transition

                hover:bg-gray-50
                hover:text-[#1455d9]
              "
            >
              Our Work
            </Link>


            {/* =================================================
                BLOG
            ================================================= */}

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="
                rounded-xl

                px-4
                py-3.5

                text-[15px]
                font-medium

                text-gray-800

                transition

                hover:bg-gray-50
                hover:text-[#1455d9]
              "
            >
              Blog
            </Link>


            {/* =================================================
                ABOUT
            ================================================= */}

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                rounded-xl

                px-4
                py-3.5

                text-[15px]
                font-medium

                text-gray-800

                transition

                hover:bg-gray-50
                hover:text-[#1455d9]
              "
            >
              About Us
            </Link>


            {/* =================================================
                CONTACT
            ================================================= */}

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                mt-2

                rounded-full

                bg-[#073b91]

                px-6
                py-3.5

                text-center

                text-[15px]
                font-bold

                text-white

                transition

                hover:bg-[#052f75]
              "
            >
              Contact Us
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}


export default Navbar;