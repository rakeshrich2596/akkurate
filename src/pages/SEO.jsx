import React from "react";
import { Link } from "react-router-dom";

const seoServices = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "We improve your website structure, speed, crawlability, and overall search performance ensuring search engines can read and rank your site flawlessly.",
  },
  {
    number: "02",
    title: "Keyword Strategy",
    description:
      "We identify high-intent keywords that align with your audience and business goals, targeting terms that bring actual buyers, not just browsers.",
  },
  {
    number: "03",
    title: "On-Page SEO",
    description:
      "From metadata to content optimization, we improve every page for better visibility, making sure your existing assets perform at their absolute peak.",
  },
  {
    number: "04",
    title: "Content Marketing",
    description:
      "We create search-focused content that attracts traffic and builds authority. Content that answers your audience's deepest questions and builds trust.",
  },
  {
    number: "05",
    title: "Local SEO",
    description:
      "We help businesses improve visibility for location-based searches and local customers, driving foot traffic and hyper-local leads.",
  },
  {
    number: "06",
    title: "Link Building",
    description:
      "We build quality backlinks that improve domain authority and search rankings, signaling to Google that your brand is an industry leader.",
  },
];

const seoBenefits = [
  "Increase organic traffic",
  "Generate qualified leads",
  "Improve brand visibility",
  "Build authority and trust",
  "Reduce long-term ad costs",
  "Drive sustainable growth",
];

const processSteps = [
  {
    number: "01",
    title: "Website Audit",
    description:
      "We comprehensively analyze your website to identify technical issues and uncover hidden growth opportunities before writing a single line of code or content.",
  },
  {
    number: "02",
    title: "Competitor Analysis",
    description:
      "Understanding competitors helps us create smarter SEO strategies. We find their weaknesses and exploit them to your advantage.",
  },
  {
    number: "03",
    title: "Content Optimization",
    description:
      "We improve existing pages and architect entirely new content that not only ranks high on search engines but reliably converts readers into customers.",
  },
  {
    number: "04",
    title: "Performance Tracking",
    description:
      "Every campaign is rigorously monitored with accurate, transparent reporting and measurable KPIs. You will always know the exact return on your investment.",
  },
];

const differentiators = [
  {
    title: "Results-Focused SEO",
    description:
      "We focus on rankings that bring tangible business impact and revenue, not just empty traffic numbers.",
  },
  {
    title: "Transparent Communication",
    description:
      "You always know what is happening with your campaign and performance. No black box strategies.",
  },
  {
    title: "Long-Term Organic Growth",
    description:
      "We build solid SEO foundations that continue delivering compound results over time.",
  },
  {
    title: "Integrated Expertise",
    description:
      "SEO works better when connected with content, development, and analytics — we bring everything together.",
  },
];

const ArrowIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h13M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckArrow = () => (
  <svg
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h13M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SEO = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#050505]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative flex min-h-[calc(100vh-82px)] items-center overflow-hidden bg-white py-16 sm:py-20 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* LEFT CONTENT */}

            <div className="order-2 lg:order-1">

              {/* Badge */}

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-black/10
                  px-4
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#4a4a4a]
                  sm:text-xs
                "
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Search Engine Optimization
              </div>

              {/* Heading */}

              <h1
                className="
                  max-w-[720px]
                  text-[2.25rem]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#050505]

                  sm:text-[2.8rem]

                  md:text-[3.2rem]

                  lg:text-[3.35rem]

                  xl:text-[4rem]
                "
              >
                SEO That Drives Rankings, Traffic &amp; Revenue.
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-[650px]
                  text-[15px]
                  leading-[1.7]
                  text-[#4a4a4a]

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                Getting traffic is easy. Getting qualified traffic that
                converts into business is what truly matters.
              </p>

              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-[15px]
                  leading-[1.7]
                  text-[#4a4a4a]

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                We do not chase vanity metrics. We build sustainable organic
                growth systems focused on measurable business outcomes.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#services"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#2563eb]
                    px-7
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1d4ed8]
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.20)]
                    sm:px-8
                    sm:text-base
                  "
                >
                  Explore Services
                  <ArrowIcon className="h-4 w-4" />
                </a>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-black/15
                    bg-transparent
                    px-7
                    text-sm
                    font-semibold
                    text-[#050505]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#050505]
                    hover:bg-[#050505]
                    hover:text-white
                    sm:px-8
                    sm:text-base
                  "
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="order-1 lg:order-2">
              <div className="relative flex items-center justify-center">
                <img
                  src="/assets/images/thumbs/banner-two-img.png"
                  alt="SEO Dashboard"
                  className="
                    h-auto
                    w-full
                    max-w-[620px]
                    object-contain
                    drop-shadow-[0_25px_50px_rgba(0,0,0,0.10)]
                  "
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY SEO MATTERS
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* LEFT */}

            <div className="lg:sticky lg:top-[120px]">
              <h2
                className="
                  max-w-[520px]
                  text-[2rem]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.035em]

                  sm:text-[2.4rem]

                  md:text-[2.7rem]

                  lg:text-[3rem]
                "
              >
                Why SEO Still Matters.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[500px]
                  text-[15px]
                  leading-[1.75]
                  text-[#4a4a4a]

                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                In an era of AI and social media, organic search is still the
                most reliable and highest-converting channel for sustainable
                business growth.
              </p>

              <Link
                to="/contact"
                className="
                  mt-7
                  hidden
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#2563eb]
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#1d4ed8]
                  hover:shadow-[0_12px_30px_rgba(37,99,235,0.20)]
                  lg:inline-flex
                "
              >
                Get Your SEO Audit
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-[15px]
                  leading-[1.8]
                  text-[#4a4a4a]

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                Search engines remain one of the strongest sources of
                high-intent traffic. When people search for products or
                services, they are already looking for solutions. SEO helps
                your business appear in front of those users at the right
                moment.
              </p>

              <p
                className="
                  mt-8
                  text-[15px]
                  font-medium
                  leading-[1.8]
                  text-[#111827]

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                A properly optimized website becomes a long-term revenue
                asset for your business. Strong SEO helps you:
              </p>

              {/* Benefits */}

              <div className="mt-8 grid gap-y-6 sm:grid-cols-2 sm:gap-x-10">

                {seoBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                    <span
                      className="
                        text-[15px]
                        font-medium
                        text-[#111827]

                        sm:text-[16px]
                      "
                    >
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

              {/* Mobile CTA */}

              <Link
                to="/contact"
                className="
                  mt-9
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#2563eb]
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#1d4ed8]
                  sm:text-base
                  lg:hidden
                "
              >
                Get Your SEO Audit
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SEO SERVICES
      ========================================================= */}

      <section
        id="services"
        className="scroll-mt-20 bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

          {/* SECTION HEADING */}

          <div className="grid gap-7 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                className="
                  text-[2rem]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.035em]

                  sm:text-[2.4rem]

                  md:text-[2.7rem]

                  lg:text-[3rem]
                "
              >
                Our SEO Expertise.
              </h2>
            </div>

            <div>
              <p
                className="
                  max-w-[650px]
                  text-[15px]
                  leading-[1.75]
                  text-[#4a4a4a]

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                What we do best. We combine technical foundations with robust
                content strategy and user experience to help your brand rank
                higher.
              </p>
            </div>
          </div>

          {/* SERVICE LIST */}

          <div className="mt-14 sm:mt-16 lg:mt-20">
            {seoServices.map((service) => (
              <div
                key={service.number}
                className="
                  group
                  border-t
                  border-black/10
                  py-8
                  transition-all
                  duration-500

                  sm:py-10

                  lg:px-0
                  lg:py-12
                  lg:hover:px-7
                  lg:hover:bg-white
                "
              >
                <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-12 lg:gap-20">

                  {/* NAME */}

                  <div>
                    <span
                      className="
                        mb-3
                        block
                        font-mono
                        text-sm
                        font-bold
                        text-blue-600

                        sm:text-base
                      "
                    >
                      {service.number} /
                    </span>

                    <h3
                      className="
                        text-[1.55rem]
                        font-bold
                        tracking-[-0.025em]
                        text-[#050505]

                        sm:text-[1.75rem]

                        lg:text-[2rem]
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}

                  <div>
                    <p
                      className="
                        max-w-[700px]
                        text-[15px]
                        leading-[1.7]
                        text-[#4a4a4a]

                        sm:text-[16px]

                        lg:text-[17px]
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

            {/* Bottom Border */}

            <div className="border-t border-black/10" />
          </div>

          {/* CTA */}

          <div className="mt-10 sm:mt-12">
            <Link
              to="/contact"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#2563eb]
                px-7
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#1d4ed8]
                hover:shadow-[0_12px_30px_rgba(37,99,235,0.20)]
                sm:px-8
                sm:text-base
              "
            >
              Get Custom Quote
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          PROCESS SECTION
      ========================================================= */}

      <section className="bg-[#081a4b] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* LEFT */}

            <div className="lg:sticky lg:top-[120px]">
              <h2
                className="
                  text-[2.3rem]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.04em]

                  sm:text-[2.8rem]

                  md:text-[3.2rem]

                  lg:text-[3.5rem]
                "
              >
                Our Unique Process.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-[15px]
                  leading-[1.75]
                  text-white/70

                  sm:text-[16px]

                  lg:text-[17px]
                "
              >
                We have a highly streamlined methodology. At every instance,
                you are aware of what is happening and the impact it is
                driving.
              </p>
            </div>

            {/* RIGHT PROCESS CARDS */}

            <div className="space-y-5 sm:space-y-7">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.06]

                    sm:p-9

                    lg:p-10
                  "
                >
                  {/* Background Number */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-1
                      -top-4
                      text-[100px]
                      font-black
                      leading-none
                      text-white/[0.035]

                      sm:text-[120px]
                    "
                  >
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-4 font-mono text-sm font-bold text-blue-300">
                      STEP {step.number}
                    </div>

                    <h3
                      className="
                        text-[1.35rem]
                        font-bold
                        text-white

                        sm:text-[1.5rem]

                        lg:text-[1.6rem]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[700px]
                        text-[14px]
                        leading-[1.75]
                        text-white/70

                        sm:text-[15px]

                        lg:text-[16px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE AKKURATE
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#081a4b]
              px-6
              py-14
              sm:rounded-[36px]
              sm:px-10
              sm:py-16
              lg:px-16
              lg:py-20
              xl:px-20
            "
          >

            {/* Decorative glow */}

            <div
              className="
                pointer-events-none
                absolute
                -left-40
                -top-40
                h-[420px]
                w-[420px]
                rounded-full
                bg-white/[0.035]
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* Heading */}

              <div className="mb-12 text-center sm:mb-14">
                <h2
                  className="
                    text-[2rem]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.035em]
                    text-white

                    sm:text-[2.5rem]

                    md:text-[2.8rem]

                    lg:text-[3rem]
                  "
                >
                  Why Choose Akkurate?
                </h2>
              </div>

              {/* Differentiators */}

              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:gap-x-16">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="
                      border-l-2
                      border-white/10
                      pl-5
                      transition-all
                      duration-300
                      hover:border-white

                      sm:pl-6
                    "
                  >
                    <h3
                      className="
                        text-[1.1rem]
                        font-bold
                        text-white

                        sm:text-[1.2rem]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[600px]
                        text-[14px]
                        leading-[1.7]
                        text-white/70

                        sm:text-[15px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">

          <div
            className="
              rounded-[24px]
              bg-[#f8fafc]
              px-5
              py-10

              sm:rounded-[28px]
              sm:px-8
              sm:py-12

              lg:px-14
              lg:py-14
            "
          >

            {/* Heading */}

            <div className="text-center">
              <h2
                className="
                  text-[1.8rem]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#050505]

                  sm:text-[2.2rem]

                  lg:text-[2.5rem]
                "
              >
                Grow Organically With Confidence.
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[680px]
                  text-[14px]
                  leading-[1.75]
                  text-[#4a4a4a]

                  sm:text-[15px]

                  lg:text-[16px]
                "
              >
                SEO is not just about being visible online. It is about
                becoming the trusted solution your audience chooses. Let’s
                build an SEO strategy that attracts the right audience and
                drives measurable growth.
              </p>
            </div>

            {/* FORM */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-9 space-y-4"
            >
              {/* Name + Email */}

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border-0
                    bg-white
                    px-4
                    text-sm
                    text-[#111827]
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    outline-none
                    ring-1
                    ring-black/[0.04]
                    transition
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-blue-500/30
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border-0
                    bg-white
                    px-4
                    text-sm
                    text-[#111827]
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    outline-none
                    ring-1
                    ring-black/[0.04]
                    transition
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-blue-500/30
                  "
                />
              </div>

              {/* Website */}

              <input
                type="text"
                placeholder="Company Website"
                className="
                  h-14
                  w-full
                  rounded-xl
                  border-0
                  bg-white
                  px-4
                  text-sm
                  text-[#111827]
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  outline-none
                  ring-1
                  ring-black/[0.04]
                  transition
                  placeholder:text-gray-400
                  focus:ring-2
                  focus:ring-blue-500/30
                "
              />

              {/* Message */}

              <textarea
                rows={4}
                placeholder="How can we help?"
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border-0
                  bg-white
                  px-4
                  py-4
                  text-sm
                  leading-6
                  text-[#111827]
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  outline-none
                  ring-1
                  ring-black/[0.04]
                  transition
                  placeholder:text-gray-400
                  focus:ring-2
                  focus:ring-blue-500/30
                "
              />

              {/* Submit */}

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="
                    inline-flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#2563eb]
                    px-8
                    text-[15px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1d4ed8]
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.20)]
                    sm:w-auto
                    sm:min-w-[210px]
                  "
                >
                  Get a Demo Today
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

    </main>
  );
};

export default SEO;