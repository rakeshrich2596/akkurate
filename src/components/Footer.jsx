import React from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// =========================================================
// SOCIAL LINKS
// =========================================================

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

  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },

  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

// =========================================================
// QUICK LINKS
// =========================================================

const quickLinks = [
  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Services",
    href: "/services",
  },

  {
    label: "Industries",
    href: "/industries",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

// =========================================================
// AKKURATE LOGO
// IMAGE LOGO
// =========================================================

const AkkurateLogo = () => {
  return (
    <img
      src="/assets/images/logo/favicon.png"
      alt="Akkurate Digital Solutions"
      className="
        h-[46px]
        w-[54px]
        object-contain

        sm:h-[50px]
        sm:w-[55px]
      "
    />
  );
};

// =========================================================
// FOOTER
// =========================================================

const Footer = () => {
  return (
    <footer
      className="
        w-full
        overflow-hidden
        bg-[#071a46]
        text-white
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-[1180px]
          px-5
          py-[55px]

          sm:px-8
          sm:py-[65px]

          lg:px-0
          lg:py-[70px]
        "
      >
        {/* ===================================================
            THREE COLUMN LAYOUT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            md:grid-cols-3
            md:gap-10

            lg:gap-[90px]
          "
        >
          {/* =================================================
              COLUMN 1
              COMPANY
          ================================================= */}

          <div>
            {/* -----------------------------------------------
                LOGO + NAME
            ------------------------------------------------ */}

            <a
              href="/"
              className="
                flex
                w-fit
                items-center
                gap-3
                no-underline
              "
            >
              {/* LOGO IMAGE */}

              <div
                className="
                  flex
                  h-[62px]
                  w-[62px]
                  shrink-0
                  items-center
                  justify-center

                  sm:h-[65px]
                  sm:w-[65px]
                "
              >
                <AkkurateLogo />
              </div>

              {/* NAME */}

              <div
                className="
                  flex
                  flex-col
                "
              >
                <span
                  className="
                    text-[25px]
                    font-bold
                    leading-[1]
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  AKKURATE
                </span>

                <span
                  className="
                    mt-[5px]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-blue-300
                  "
                >
                  Digital Solutions
                </span>
              </div>
            </a>

            {/* -----------------------------------------------
                DESCRIPTION
            ------------------------------------------------ */}

            <p
              className="
                mt-6
                max-w-[310px]
                text-[13px]
                leading-[1.7]
                text-slate-300
              "
            >
              We help businesses build stronger brands,
              create better digital experiences, and
              achieve measurable growth through
              technology and marketing.
            </p>

            {/* -----------------------------------------------
                PHONE
            ------------------------------------------------ */}

            <a
              href="tel:+919841663161"
              className="
                mt-6
                flex
                w-fit
                items-center
                gap-3
                text-[13px]
                text-slate-300
                no-underline
                transition-colors
                duration-200
                hover:text-white
              "
            >
              <FiPhone
                className="
                  shrink-0
                  text-[16px]
                "
              />

              <span>
                +91 9841663161
              </span>
            </a>

            {/* -----------------------------------------------
                EMAIL
            ------------------------------------------------ */}

            <a
              href="mailto:growth@akkurate.in"
              className="
                mt-3
                flex
                w-fit
                items-center
                gap-3
                text-[13px]
                text-slate-300
                no-underline
                transition-colors
                duration-200
                hover:text-white
              "
            >
              <FiMail
                className="
                  shrink-0
                  text-[16px]
                "
              />

              <span>
                growth@akkurate.in
              </span>
            </a>

            {/* -----------------------------------------------
                ADDRESS
            ------------------------------------------------ */}

            <div
              className="
                mt-3
                flex
                items-start
                gap-3
                text-[13px]
                leading-[1.6]
                text-slate-300
              "
            >
              <FiMapPin
                className="
                  mt-[3px]
                  shrink-0
                  text-[16px]
                "
              />

              <span>
                No. 63/44, 3rd Cross Street,
                <br />
                Ranganadhapuram, West Tambaram,
                <br />
                Chennai - 600 045
              </span>
            </div>
          </div>

          {/* =================================================
              COLUMN 2
              QUICK LINKS
          ================================================= */}

          <div
            className="
              md:pl-4
              lg:pl-8
            "
          >
            <h3
              className="
                m-0
                text-[15px]
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
                mt-6
                list-none
                space-y-[15px]
                p-0
              "
            >
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[13px]
                      text-slate-300
                      no-underline
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    <span>
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              COLUMN 3
              CONNECT WITH US
          ================================================= */}

          <div
            className="
              md:pl-4
              lg:pl-8
            "
          >
            <h3
              className="
                m-0
                text-[15px]
                font-bold
                tracking-[-0.01em]
                text-white
              "
            >
              Connect With Us
            </h3>

            {/* -----------------------------------------------
                SOCIAL ICONS
            ------------------------------------------------ */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex
                      h-[38px]
                      w-[38px]
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
                    "
                  >
                    <Icon
                      className="
                        text-[17px]
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* -----------------------------------------------
                SOCIAL DESCRIPTION
            ------------------------------------------------ */}

            <p
              className="
                mt-5
                max-w-[280px]
                text-[13px]
                leading-[1.7]
                text-slate-400
              "
            >
              Follow us on social media for
              updates, insights, and the latest
              from Akkurate.
            </p>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            mt-[50px]
            h-px
            w-full
            bg-white/15
          "
        />

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              m-0
              text-[11px]
              text-slate-400

              sm:text-[12px]
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
              gap-x-6
              gap-y-2
            "
          >
            <a
              href="/policy-privacy"
              className="
                text-[11px]
                text-slate-400
                no-underline
                transition-colors
                duration-200
                hover:text-white

                sm:text-[12px]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[11px]
                text-slate-400
                no-underline
                transition-colors
                duration-200
                hover:text-white

                sm:text-[12px]
              "
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;