import { useState } from "react";

const serviceGroups = [
  {
    title: "Digital Marketing",
    items: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Search Engine Optimization (SEO)",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Social Media Marketing",
      "YouTube Marketing",
      "Google My Business Page",
    ],
  },
  {
    title: "Website Development",
    items: [
      "App Development",
      "Website Development",
      "Web Application",
      "CMS Development",
      "E-Commerce Service",
      "Website Design",
    ],
  },
  {
    title: "Branding",
    items: [
      "Logo Design",
      "Content Creation",
      "UI/UX Design",
      "Motion Graphics",
      "Explainer Video",
      "Corporate Video",
      "Reels Making",
    ],
  },
];

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

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-16">

        {/* ==================================================
            LOGO
        ================================================== */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          {/* YOUR FAVICON / A LOGO */}
          <img
            src="/assets/images/logo/favicon.png"
            alt="Akkurate Logo"
            className="h-[52px] w-[52px] object-contain"
          />

          {/* COMPANY NAME */}
          <div className="flex flex-col">

            <span className="text-[25px] font-extrabold leading-[25px] tracking-[-0.7px] text-[#151b2c]">
              AKKURATE
            </span>

            <span className="mt-[4px] text-[11px] font-bold leading-none tracking-[2.7px] text-[#151b2c]">
              DIGITAL SOLUTIONS
            </span>

          </div>
        </a>

        {/* ==================================================
            DESKTOP NAVBAR
        ================================================== */}

        <nav className="hidden items-center gap-9 lg:flex">

          {/* HOME */}

          <a
            href="#home"
            className="text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
          >
            Home
          </a>

          {/* ==================================================
              SERVICES DROPDOWN
          ================================================== */}

          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-2 text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
            >
              Services

              <svg
                className="h-4 w-4 transition group-hover:rotate-180"
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

            {/* DROPDOWN */}

            <div className="invisible absolute left-1/2 top-full mt-6 w-[850px] -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white p-7 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="grid grid-cols-3 gap-8">

                {serviceGroups.map((group) => (
                  <div key={group.title}>

                    <h3 className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold uppercase tracking-wide text-[#151b2c]">
                      {group.title}
                    </h3>

                    <div className="space-y-2">

                      {group.items.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="block text-[13px] leading-6 text-gray-500 transition hover:translate-x-1 hover:text-[#1455d9]"
                        >
                          {item}
                        </a>
                      ))}

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* ==================================================
              INDUSTRIES DROPDOWN
          ================================================== */}

          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-2 text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
            >
              Industries

              <svg
                className="h-4 w-4 transition group-hover:rotate-180"
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

            <div className="invisible absolute left-0 top-full mt-6 w-[250px] translate-y-2 rounded-2xl border border-gray-100 bg-white p-3 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {industries.map((industry) => (
                <a
                  key={industry}
                  href="#services"
                  className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#1455d9]"
                >
                  {industry}
                </a>
              ))}

            </div>

          </div>

          {/* OUR WORK */}

          <a
            href="#showcase"
            className="text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
          >
            Our Work
          </a>

          {/* BLOG */}

          <a
            href="#blog"
            className="text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
          >
            Blog
          </a>

          {/* ABOUT */}

          <a
            href="#about"
            className="text-[17px] font-medium text-[#151b2c] transition hover:text-[#1455d9]"
          >
            About Us
          </a>

        </nav>

        {/* ==================================================
            CONTACT BUTTON + MOBILE MENU
        ================================================== */}

        <div className="flex items-center gap-4">

          {/* CONTACT BUTTON */}

          <a
            href="#contact"
            className="hidden rounded-full bg-[#073b91] px-7 py-3.5 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(7,59,145,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#052f75] lg:inline-flex"
          >
            Contact Us
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-800 lg:hidden"
            aria-label="Toggle menu"
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

      {/* ==================================================
          MOBILE NAVIGATION
      ================================================== */}

      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 shadow-lg lg:hidden">

          <nav className="flex flex-col gap-1">

            <a
              href="#home"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Services
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Industries
            </a>

            <a
              href="#showcase"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Our Work
            </a>

            <a
              href="#blog"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              Blog
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-50"
            >
              About Us
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-3 rounded-full bg-[#073b91] px-6 py-3.5 text-center font-bold text-white"
            >
              Contact Us
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;