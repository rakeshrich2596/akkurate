import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  useEffect(() => {
    // SEO Metadata
    document.title =
      "About Akkurate Digital Solutions | Digital Marketing & Technology Partner";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore practical digital marketing, web, branding and growth solutions from Akkurate Digital Solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore practical digital marketing, web, branding and growth solutions from Akkurate Digital Solutions.";
      document.head.appendChild(meta);
    }

    // Focus keyword
    const metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "digital marketing agency, Akkurate Digital Solutions, digital marketing, web development, branding, technology partner"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "digital marketing agency, Akkurate Digital Solutions, digital marketing, web development, branding, technology partner";
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);

    // Scroll reveal animation
    const revealElements =
      document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const beliefs = [
    "Understand the business before recommending a channel.",
    "Create useful experiences for people first.",
    "Build strong foundations before chasing scale.",
    "Communicate clearly about priorities and progress.",
    "Improve continuously using evidence and feedback.",
  ];

  const capabilities = [
    "SEO",
    "AEO",
    "GEO",
    "Paid Advertising",
    "Social Media",
    "Web Development",
    "Apps",
    "UI/UX",
    "Content",
    "Branding",
    "Motion",
    "Video",
  ];

  return (
    <>
      <Navbar />

      <main className="about-page overflow-hidden bg-white text-[#071a46]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section
          className="
            relative
            flex
            min-h-[620px]
            items-center
            overflow-hidden
            px-5
            py-24
            sm:px-8
            sm:py-28
            lg:min-h-[680px]
            lg:px-12
            lg:py-32
          "
        >
          {/* Decorative background elements */}

          <div className="about-orb about-orb-one" />
          <div className="about-orb about-orb-two" />

          <div
            className="
              relative
              z-10
              mx-auto
              grid
              w-full
              max-w-[1180px]
              items-center
              gap-14
              lg:grid-cols-[1.15fr_.85fr]
              lg:gap-20
            "
          >
            {/* LEFT */}

            <div>
              <div className="about-hero-badge">
                <span className="about-badge-dot" />
                ABOUT AKKURATE
              </div>

              <h1
                className="
                  about-hero-title
                  mt-6
                  max-w-[780px]
                  text-[40px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#071a46]
                  sm:text-[30px]
                  lg:text-[34px]
                  xl:text-[33px]
                "
              >
                A Digital Growth Partner Built Around Strategy,
                Technology & Creative Execution
              </h1>

              <p
                className="
                  mt-7
                  max-w-[680px]
                  text-[15px]
                  leading-[1.8]
                  text-slate-600
                  sm:text-[17px]
                "
              >
                Akkurate Digital Solutions brings marketing,
                technology and creative capabilities together so
                businesses can build a more connected digital
                customer journey.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="
                    about-primary-btn
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#1455d9]
                    px-6
                    py-3.5
                    text-[13px]
                    font-semibold
                    text-white
                    no-underline
                    shadow-[0_12px_30px_rgba(20,85,217,0.20)]
                  "
                >
                  Let's Talk
                  <span className="text-[16px]">↗</span>
                </a>

                <a
                  href="#philosophy"
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-slate-200
                    px-6
                    py-3.5
                    text-[13px]
                    font-semibold
                    text-[#071a46]
                    no-underline
                    transition-all
                    duration-300
                    hover:border-[#1455d9]
                    hover:text-[#1455d9]
                  "
                >
                  Explore Our Approach
                </a>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative hidden lg:block">
              <div className="about-visual">
                <div className="about-visual-inner">

                  <div className="about-visual-line line-one" />
                  <div className="about-visual-line line-two" />
                  <div className="about-visual-line line-three" />

                  <div className="about-center-circle">
                    <span>AKKURATE</span>
                    <small>Digital Growth</small>
                  </div>

                  <div className="about-floating-card card-one">
                    <span>01</span>
                    <strong>Strategy</strong>
                  </div>

                  <div className="about-floating-card card-two">
                    <span>02</span>
                    <strong>Technology</strong>
                  </div>

                  <div className="about-floating-card card-three">
                    <span>03</span>
                    <strong>Creative</strong>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PHILOSOPHY
        ====================================================== */}

        <section
          id="philosophy"
          className="
            bg-[#f7f9fc]
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-12
            lg:py-28
          "
        >
          <div className="mx-auto max-w-[1180px]">

            <div className="about-reveal max-w-[720px]">
              <p className="about-section-label">
                OUR PHILOSOPHY
              </p>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#071a46]
                  sm:text-[42px]
                "
              >
                Strategy before activity.
              </h2>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-[1.8]
                  text-slate-600
                  sm:text-[17px]
                "
              >
                Useful content before keyword stuffing. Clear
                communication before complexity. Measurement
                before assumptions.
              </p>
            </div>

            <div
              className="
                mt-12
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {[
                {
                  number: "01",
                  title: "Strategy",
                  text: "Start with the business and its real goals.",
                },
                {
                  number: "02",
                  title: "Useful Content",
                  text: "Create experiences that are valuable to people.",
                },
                {
                  number: "03",
                  title: "Clarity",
                  text: "Keep communication simple, direct and useful.",
                },
                {
                  number: "04",
                  title: "Measurement",
                  text: "Use evidence and feedback to improve.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className="about-reveal about-philosophy-card"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE BELIEVE
        ====================================================== */}

        <section
          className="
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-12
            lg:py-10
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1180px]
              gap-14
              lg:grid-cols-[.8fr_1.2fr]
              lg:gap-24
            "
          >
            {/* LEFT */}

            <div className="about-reveal">
              <p className="about-section-label">
                WHAT WE BELIEVE
              </p>

              <h2
                className="
                  mt-3
                  max-w-[500px]
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#071a46]
                  sm:text-[35px]
                "
              >
                Build the right foundation before chasing scale.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-[15px]
                  leading-[1.8]
                  text-slate-600
                "
              >
                Every recommendation starts by understanding the
                business, the customer and the problem that needs
                to be solved.
              </p>
            </div>

            {/* RIGHT */}

            <div className="space-y-3">
              {beliefs.map((belief, index) => (
                <div
                  key={belief}
                  className="about-reveal about-belief"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="about-belief-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p>{belief}</p>

                  <span className="about-belief-arrow">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section
          className="
            bg-[#071a46]
            px-5
            py-20
            text-white
            sm:px-8
            sm:py-24
            lg:px-12
            lg:py-10
          "
        >
          <div className="mx-auto max-w-[1180px]">

            <div className="about-reveal max-w-[700px]">
              <p className="about-section-label about-label-light">
                OUR CAPABILITIES
              </p>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  sm:text-[42px]
                "
              >
                Marketing, technology and creative —
                connected.
              </h2>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-[1.8]
                  text-slate-300
                  sm:text-[17px]
                "
              >
                SEO, AEO, GEO, paid advertising, social media,
                web development, apps, UI/UX, content, branding,
                motion and video.
              </p>
            </div>

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-3
              "
            >
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="about-reveal about-capability"
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <span className="about-capability-dot" />
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROOF & TRUST
        ====================================================== */}

        <section
          className="
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-12
            lg:py-10
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1180px]
              items-center
              gap-12
              lg:grid-cols-[1fr_.85fr]
              lg:gap-24
            "
          >
            <div className="about-reveal">

              <p className="about-section-label">
                PROOF & TRUST
              </p>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#071a46]
                  sm:text-[42px]
                "
              >
                Let the work speak for itself.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-[15px]
                  leading-[1.8]
                  text-slate-600
                  sm:text-[17px]
                "
              >
                We believe trust should be built with evidence.
                Team experience, certifications, case studies,
                client logos, testimonials and performance numbers
                should always be backed by verified information.
              </p>

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                "
              >
                <p
                  className="
                    m-0
                    text-[13px]
                    font-medium
                    leading-[1.7]
                    text-slate-600
                  "
                >
                  We do not invent claims. Verified proof comes
                  first.
                </p>
              </div>
            </div>

            <div className="about-reveal">
              <div className="about-trust-card">

                <div className="about-trust-icon">
                  ✓
                </div>

                <h3>
                  Evidence over assumptions
                </h3>

                <p>
                  Clear priorities, measurable progress and
                  transparent communication.
                </p>

                <div className="about-trust-line" />

                <div className="flex items-center justify-between">
                  <span>Trust</span>
                  <span>01</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section
          className="
            px-5
            pb-20
            sm:px-8
            sm:pb-24
            lg:px-12
            lg:pb-10
          "
        >
          <div
            className="
              about-reveal
              relative
              mx-auto
              max-w-[1180px]
              overflow-hidden
              rounded-[28px]
              bg-[#1455d9]
              px-7
              py-14
              text-center
              sm:px-12
              sm:py-16
              lg:px-20
              lg:py-10
            "
          >
            <div className="about-cta-circle circle-one" />
            <div className="about-cta-circle circle-two" />

            <div className="relative z-10 mx-auto max-w-[760px]">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                READY TO START?
              </p>

              <h2
                className="
                  mt-4
                  text-[32px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-white
                  sm:text-[30px]
                "
              >
                Let's understand your business and build the
                right digital roadmap.
              </h2>

              <a
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-[13px]
                  font-semibold
                  text-[#1455d9]
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                "
              >
                Let's Build Together
                <span className="text-[16px]">↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* =====================================================
          PAGE ANIMATIONS
      ====================================================== */}

      <style>{`

        /* -----------------------------------------------
           HERO
        ------------------------------------------------ */

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid rgba(20, 85, 217, 0.15);
          border-radius: 999px;
          background: rgba(20, 85, 217, 0.04);
          color: #1455d9;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          animation: aboutFadeUp 0.8s ease both;
        }

        .about-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #1455d9;
          animation: aboutPulse 2s ease-in-out infinite;
        }

        .about-hero-title {
          animation: aboutFadeUp 0.9s 0.1s ease both;
        }

        .about-page .about-hero-title + p {
          animation: aboutFadeUp 0.9s 0.2s ease both;
        }

        .about-page .about-primary-btn {
          animation: aboutFadeUp 0.9s 0.3s ease both;
          transition: all 0.3s ease;
        }

        .about-page .about-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow:
            0 18px 40px rgba(20, 85, 217, 0.28);
        }

        /* -----------------------------------------------
           DECORATIVE ORBS
        ------------------------------------------------ */

        .about-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
        }

        .about-orb-one {
          width: 420px;
          height: 420px;
          right: -170px;
          top: 60px;
          background:
            radial-gradient(
              circle,
              rgba(20, 85, 217, 0.12) 0%,
              rgba(20, 85, 217, 0) 70%
            );
          animation: aboutFloat 7s ease-in-out infinite;
        }

        .about-orb-two {
          width: 260px;
          height: 260px;
          left: -120px;
          bottom: -100px;
          background:
            radial-gradient(
              circle,
              rgba(20, 85, 217, 0.07) 0%,
              rgba(20, 85, 217, 0) 70%
            );
          animation: aboutFloat 9s 1s ease-in-out infinite;
        }

        /* -----------------------------------------------
           HERO VISUAL
        ------------------------------------------------ */

        .about-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 520px;
          margin-left: auto;
        }

        .about-visual-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(20, 85, 217, 0.12);
          border-radius: 50%;
          background:
            radial-gradient(
              circle at center,
              rgba(20, 85, 217, 0.08),
              rgba(20, 85, 217, 0.01) 55%,
              transparent 70%
            );
          animation: aboutRotateSlow 22s linear infinite;
        }

        .about-visual-inner::before {
          content: "";
          position: absolute;
          inset: 12%;
          border: 1px dashed rgba(20, 85, 217, 0.18);
          border-radius: 50%;
        }

        .about-visual-inner::after {
          content: "";
          position: absolute;
          inset: 28%;
          border: 1px solid rgba(20, 85, 217, 0.12);
          border-radius: 50%;
        }

        .about-center-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 5;
          display: flex;
          width: 150px;
          height: 150px;
          transform: translate(-50%, -50%);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #071a46;
          color: white;
          box-shadow:
            0 20px 50px rgba(7, 26, 70, 0.2);
          animation: aboutCenterPulse 4s ease-in-out infinite;
        }

        .about-center-circle span {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .about-center-circle small {
          margin-top: 6px;
          color: #93c5fd;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .about-visual-line {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 1px;
          width: 45%;
          transform-origin: left center;
          background: linear-gradient(
            90deg,
            rgba(20, 85, 217, 0.25),
            transparent
          );
        }

        .line-one {
          transform: rotate(25deg);
        }

        .line-two {
          transform: rotate(145deg);
        }

        .line-three {
          transform: rotate(265deg);
        }

        .about-floating-card {
          position: absolute;
          z-index: 10;
          display: flex;
          min-width: 125px;
          flex-direction: column;
          gap: 4px;
          border: 1px solid rgba(20, 85, 217, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.94);
          padding: 13px 15px;
          box-shadow:
            0 15px 40px rgba(7, 26, 70, 0.1);
          backdrop-filter: blur(12px);
        }

        .about-floating-card span {
          color: #1455d9;
          font-size: 9px;
          font-weight: 700;
        }

        .about-floating-card strong {
          color: #071a46;
          font-size: 12px;
        }

        .card-one {
          left: 0;
          top: 17%;
          animation: aboutFloatCard 5s ease-in-out infinite;
        }

        .card-two {
          right: -10px;
          top: 40%;
          animation: aboutFloatCard 6s 0.5s ease-in-out infinite;
        }

        .card-three {
          bottom: 12%;
          left: 18%;
          animation: aboutFloatCard 5.5s 1s ease-in-out infinite;
        }

        /* -----------------------------------------------
           SECTION LABEL
        ------------------------------------------------ */

        .about-section-label {
          margin: 0;
          color: #1455d9;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .about-label-light {
          color: #93c5fd;
        }

        /* -----------------------------------------------
           REVEAL
        ------------------------------------------------ */

        .about-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* -----------------------------------------------
           PHILOSOPHY CARDS
        ------------------------------------------------ */

        .about-philosophy-card {
          border: 1px solid #e5eaf2;
          border-radius: 18px;
          background: white;
          padding: 24px;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .about-philosophy-card:hover {
          transform: translateY(-7px);
          border-color: rgba(20, 85, 217, 0.25);
          box-shadow:
            0 20px 45px rgba(7, 26, 70, 0.08);
        }

        .about-philosophy-card > span {
          color: #1455d9;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .about-philosophy-card h3 {
          margin: 18px 0 0;
          color: #071a46;
          font-size: 18px;
          font-weight: 700;
        }

        .about-philosophy-card p {
          margin: 9px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        /* -----------------------------------------------
           BELIEFS
        ------------------------------------------------ */

        .about-belief {
          display: flex;
          align-items: center;
          gap: 18px;
          border-bottom: 1px solid #e8edf4;
          padding: 20px 0;
          transition:
            padding-left 0.3s ease,
            border-color 0.3s ease;
        }

        .about-belief:hover {
          padding-left: 8px;
          border-color: rgba(20, 85, 217, 0.35);
        }

        .about-belief-number {
          flex-shrink: 0;
          color: #1455d9;
          font-size: 10px;
          font-weight: 700;
        }

        .about-belief p {
          flex: 1;
          margin: 0;
          color: #334155;
          font-size: 14px;
          line-height: 1.6;
        }

        .about-belief-arrow {
          color: #94a3b8;
          font-size: 17px;
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .about-belief:hover .about-belief-arrow {
          transform: translate(3px, -3px);
          color: #1455d9;
        }

        /* -----------------------------------------------
           CAPABILITIES
        ------------------------------------------------ */

        .about-capability {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          padding: 11px 16px;
          color: #dbeafe;
          font-size: 12px;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .about-capability:hover {
          transform: translateY(-4px);
          border-color: rgba(147,197,253,0.4);
          background: rgba(255,255,255,0.08);
        }

        .about-capability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
        }

        /* -----------------------------------------------
           TRUST
        ------------------------------------------------ */

        .about-trust-card {
          border-radius: 24px;
          background: #f7f9fc;
          padding: 32px;
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .about-trust-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 25px 55px rgba(7, 26, 70, 0.09);
        }

        .about-trust-icon {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #1455d9;
          color: white;
          font-size: 20px;
          font-weight: 700;
        }

        .about-trust-card h3 {
          margin: 24px 0 0;
          color: #071a46;
          font-size: 22px;
          font-weight: 700;
        }

        .about-trust-card p {
          margin: 10px 0 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .about-trust-line {
          height: 1px;
          margin: 28px 0 18px;
          background: #e2e8f0;
        }

        .about-trust-card .flex span {
          color: #64748b;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* -----------------------------------------------
           CTA
        ------------------------------------------------ */

        .about-cta-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .circle-one {
          width: 350px;
          height: 350px;
          right: -120px;
          top: -170px;
          animation: aboutFloat 8s ease-in-out infinite;
        }

        .circle-two {
          width: 250px;
          height: 250px;
          left: -100px;
          bottom: -150px;
          animation: aboutFloat 7s 1s ease-in-out infinite;
        }

        /* -----------------------------------------------
           KEYFRAMES
        ------------------------------------------------ */

        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes aboutFloatCard {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes aboutPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(1.35);
          }
        }

        @keyframes aboutCenterPulse {
          0%,
          100% {
            box-shadow:
              0 20px 50px rgba(7, 26, 70, 0.2);
          }

          50% {
            box-shadow:
              0 25px 65px rgba(20, 85, 217, 0.25);
          }
        }

        @keyframes aboutRotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* -----------------------------------------------
           MOBILE
        ------------------------------------------------ */

        @media (max-width: 767px) {

          .about-hero-title {
            font-size: 39px;
          }

          .about-belief {
            gap: 12px;
          }

          .about-belief p {
            font-size: 13px;
          }

          .about-trust-card {
            padding: 25px;
          }
        }

        /* -----------------------------------------------
           REDUCED MOTION
        ------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {

          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .about-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>
    </>
  );
};

export default AboutUs;