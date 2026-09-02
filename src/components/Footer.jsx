import React from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/akkurate_digital/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/akkurate-in/",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Akkurate/61581308511005/",
    icon: FaFacebookF,
  },
  // {
  //   name: "X",
  //   href: "#",
  //   icon: FaXTwitter,
  // },
  // {
  //   name: "YouTube",
  //   href: "#",
  //   icon: FaYoutube,
  // },
];

/* =========================================================
   QUICK LINKS
   These paths MUST match App.jsx routes
========================================================= */

const quickLinks = [
  {
    label: "About Us",
    href: "/about-us/",
  },
  {
    label: "Services",
    href: "/geo",
  },
  {
    label: "Industries",
    href: "/b2b-marketing",
  },
  {
    label: "Our Work",
    href: "/our-work",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   DIGITAL MARKETING
   Actual routes from App.jsx
========================================================= */

const serviceLinks = [
  {
    label: "GEO",
    href: "/geo",
  },
  {
    label: "AEO",
    href: "/aeo",
  },
  {
    label: "SEO",
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
];

/* =========================================================
   WEBSITE DEVELOPMENT
========================================================= */

const websiteDevelopmentLinks = [
  {
    label: "App Development",
    href: "/app-development",
  },
  {
    label: "Website Development",
    href: "/website-development",
  },
  {
    label: "Web App Development",
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
];

/* =========================================================
   BRANDING
========================================================= */

const brandingLinks = [
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
    label: "Explainer Videos",
    href: "/explainer-video",
  },
  {
    label: "Reels Making",
    href: "/reels-making",
  },
];

/* =========================================================
   LOGO
========================================================= */

const AkkurateLogo = () => {
  return (
    <img
      src="/assets/images/logo/favicon.png"
      alt="Akkurate Digital Solutions"
      className="
        h-[42px]
        w-[50px]
        object-contain
        sm:h-[46px]
        sm:w-[52px]
      "
    />
  );
};

/* =========================================================
   REUSABLE FOOTER LINK
========================================================= */

const FooterLink = ({ href, children }) => {
  return (
    <Link
      to={href}
      className="
        group
        flex
        w-fit
        items-center
        gap-1.5
        text-[12px]
        text-slate-300
        no-underline
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-white
      "
    >
      <span>{children}</span>

      <FiArrowUpRight
        className="
          text-[11px]
          opacity-0
          transition-all
          duration-200
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
          group-hover:opacity-100
        "
      />
    </Link>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  return (
    <>
      {/* =====================================================
          FIXED WHATSAPP BUTTON
      ===================================================== */}

      <a
        href="https://wa.me/919841663161"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="
          fixed
          bottom-4
          right-4
          z-[9999]
          flex
          h-[52px]
          w-[52px]
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.30)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-[0_12px_30px_rgba(37,211,102,0.40)]
          sm:bottom-5
          sm:right-5
          sm:h-[56px]
          sm:w-[56px]
          md:h-[58px]
          md:w-[58px]
        "
      >
        <FaWhatsapp
          className="
            text-[27px]
            sm:text-[29px]
            md:text-[31px]
          "
        />

        <span
          className="
            absolute
            right-0
            top-0
            h-[12px]
            w-[12px]
            rounded-full
            border-2
            border-white
            bg-[#25D366]
          "
        />
      </a>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          w-full
          overflow-hidden
          bg-[#071a46]
          text-white
        "
      >
        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-5
            py-[38px]
            sm:px-8
            sm:py-[44px]
            lg:px-10
            lg:py-[48px]
            xl:px-0
          "
        >
          {/* =================================================
              FIVE COLUMN LAYOUT
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              sm:gap-x-6
              sm:gap-y-8
              lg:grid-cols-5
              lg:gap-x-10
              lg:gap-y-0
              xl:gap-x-10
            "
          >
            {/* =================================================
                COLUMN 1
                COMPANY
            ================================================= */}

            <div className="min-w-0">
              {/* LOGO */}

              <Link
                to="/"
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  no-underline
                "
              >
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <AkkurateLogo />
                </div>

                <div className="flex flex-col">
                  <span
                    className="
                      text-[23px]
                      font-bold
                      leading-none
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    AKKURATE
                  </span>

                  <span
                    className="
                      mt-[4px]
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.23em]
                      text-blue-300
                    "
                  >
                    Digital Solutions
                  </span>
                </div>
              </Link>

              {/* DESCRIPTION */}

              <div
                className="
                  mt-4
                  max-w-[330px]
                  text-[12px]
                  leading-[1.65]
                  text-slate-300
                "
              >
                <p className="m-0">
                  Digital solutions that help businesses grow,
                  connect, and build a stronger online presence.
                </p>
              </div>

              {/* SOCIAL LINKS */}

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  gap-2.5
                "
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  const isExternal =
                    social.href.startsWith("http");

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        isExternal ? "_blank" : undefined
                      }
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="
                        flex
                        h-[34px]
                        w-[34px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        text-slate-300
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-300
                        hover:bg-blue-300/10
                        hover:text-white
                        sm:h-[36px]
                        sm:w-[36px]
                      "
                    >
                      <Icon className="text-[15px]" />
                    </a>
                  );
                })}
              </div>

              {/* PHONE */}

              <a
                href="tel:+919841663161"
                className="
                  mt-4
                  flex
                  w-fit
                  items-center
                  gap-2.5
                  text-[12px]
                  text-slate-300
                  no-underline
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <FiPhone className="shrink-0 text-[14px]" />

                <span>+91 9841663161</span>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:growth@akkurate.in"
                className="
                  mt-2.5
                  flex
                  w-fit
                  items-center
                  gap-2.5
                  text-[12px]
                  text-slate-300
                  no-underline
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <FiMail className="shrink-0 text-[14px]" />

                <span>growth@akkurate.in</span>
              </a>

              {/* ADDRESS */}

              <div
                className="
                  mt-2.5
                  flex
                  items-start
                  gap-2.5
                  text-[12px]
                  leading-[1.5]
                  text-slate-300
                "
              >
                <FiMapPin
                  className="
                    mt-[2px]
                    shrink-0
                    text-[14px]
                  "
                />

                <span>
                  1/15, Kalamegam St,
                  <br />
                  Annai Therasa Nagar,
                  <br />
                  East Tambaram, Tambaram,
                  <br />
                  Chennai - 600 059.
                </span>
              </div>
            </div>

            {/* =================================================
                COLUMN 2
                DIGITAL MARKETING
            ================================================= */}

            <div
              className="
                min-w-0
                lg:mt-[33px]
              "
            >
              <h3
                className="
                  m-0
                  text-[14px]
                  font-bold
                  tracking-[-0.01em]
                  text-white
                "
              >
                DIGITAL MARKETING
              </h3>

              <ul
                className="
                  m-0
                  mt-4
                  list-none
                  space-y-2.5
                  p-0
                "
              >
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                COLUMN 3
                WEBSITE DEVELOPMENT
            ================================================= */}

            <div
              className="
                min-w-0
                lg:mt-[33px]
              "
            >
              <h3
                className="
                  m-0
                  text-[14px]
                  font-bold
                  tracking-[-0.01em]
                  text-white
                "
              >
                WEBSITE DEVELOPMENT
              </h3>

              <ul
                className="
                  m-0
                  mt-4
                  list-none
                  space-y-2.5
                  p-0
                "
              >
                {websiteDevelopmentLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                COLUMN 4
                BRANDING
            ================================================= */}

            <div
              className="
                min-w-0
                lg:mt-[33px]
              "
            >
              <h3
                className="
                  m-0
                  text-[14px]
                  font-bold
                  tracking-[-0.01em]
                  text-white
                "
              >
                BRANDING
              </h3>

              <ul
                className="
                  m-0
                  mt-4
                  list-none
                  space-y-2.5
                  p-0
                "
              >
                {brandingLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                COLUMN 5
                QUICK LINKS
            ================================================= */}

            <div
              className="
                min-w-0
                lg:mt-[33px]
              "
            >
              <h3
                className="
                  m-0
                  text-[14px]
                  font-bold
                  tracking-[-0.01em]
                  text-white
                "
              >
                Quick Links
              </h3>

              <ul
                className="
                  m-0
                  mt-4
                  list-none
                  space-y-2.5
                  p-0
                "
              >
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===================================================
              DIVIDER
          ==================================================== */}

          <div
            className="
              mt-8
              h-px
              w-full
              bg-white/10
              sm:mt-9
            "
          />

          {/* ===================================================
              BOTTOM BAR
          ==================================================== */}

          <div
            className="
              flex
              flex-col
              gap-3
              pt-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                m-0
                text-[10px]
                text-slate-400
                sm:text-[11px]
              "
            >
              © 2026 Akkurate. All Rights Reserved.
            </p>

            {/* LEGAL LINKS */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-1.5
              "
            >
              <Link
                to="/"
                className="
                  text-[10px]
                  text-slate-400
                  no-underline
                  transition-colors
                  duration-200
                  hover:text-white
                  sm:text-[11px]
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="
                  text-[10px]
                  text-slate-400
                  no-underline
                  transition-colors
                  duration-200
                  hover:text-white
                  sm:text-[11px]
                "
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESPONSIVE
        ===================================================== */}

        <style>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            footer > div {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (max-width: 767px) {
            footer > div {
              padding-top: 34px;
              padding-bottom: 28px;
            }
          }

          @media (max-width: 480px) {
            footer > div {
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            a {
              transition: none !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;