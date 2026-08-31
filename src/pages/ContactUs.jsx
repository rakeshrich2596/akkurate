
import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  "Search Engine Optimization (SEO)",
  "Generative Engine Optimization (GEO)",
  "Answer Engine Optimization (AEO)",
  "Social Media Marketing",
  "Google / Meta Ads",
  "Website Development",
  "App Development",
  "Branding & Logo Design",
  "Other",
];

const WHATSAPP_NUMBER = "919841663161";

const InfoCard = ({ icon: Icon, title, children, animateIcon = false }) => (
  <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[20px] border border-[#4f8ef7]/15 bg-[#f8faff] px-6 py-10 text-center shadow-[0_6px_24px_rgba(79,142,247,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#4f8ef7]/30 hover:shadow-[0_20px_48px_rgba(79,142,247,0.14)] sm:px-8">
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 animate-pulse rounded-full bg-[#4f8ef7]/5 transition-transform duration-700 group-hover:scale-150" />

    <div
      className={`relative z-10 mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#4f8ef7]/10 text-[28px] text-[#4f8ef7] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#4f8ef7] group-hover:text-white ${
        animateIcon ? "animate-pulse" : ""
      }`}
    >
      <Icon />
    </div>

    <h3 className="relative z-10 m-0 text-[20px] font-bold text-slate-900">
      {title}
    </h3>

    <div className="relative z-10 mt-4 text-[15px] leading-7 text-slate-500">
      {children}
    </div>
  </div>
);

const Field = ({ label, required = false, ...props }) => (
  <div>
    <label
      htmlFor={props.id}
      className="mb-1.5 block text-[13px] font-semibold text-slate-700"
    >
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>

    <input
      {...props}
      required={required}
      className="h-[52px] w-full rounded-xl border border-black/10 bg-white px-[18px] text-[15px] text-slate-900 outline-none transition-all duration-300 hover:border-[#4f8ef7]/30 focus:border-[#4f8ef7] focus:ring-4 focus:ring-[#4f8ef7]/10 placeholder:text-slate-400"
    />
  </div>
);

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [sending, setSending] = useState(false);

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setStatus({ type: "", text: "" });
  };

  const buildWhatsAppUrl = () => {
    const message = [
      "Hello Akkurate Digital Solutions,",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Service: ${form.service || "Not selected"}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = () => {
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });

    setTimeout(() => {
      setSending(false);
      setStatus({
        type: "success",
        text: "Opening WhatsApp with your enquiry...",
      });
      openWhatsApp();
    }, 700);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative mx-5 mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#0b327f] to-[#1455d9] px-5 py-10 text-center text-white shadow-[0_18px_50px_rgba(7,35,82,.12)] sm:mx-6 sm:px-8 sm:py-12 lg:mx-8 lg:py-14">
          <div className="pointer-events-none absolute -bottom-[100px] -left-[100px] h-[300px] w-[300px] animate-pulse rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[300px] w-[300px] animate-pulse rounded-full bg-white/5 [animation-delay:1s]" />

          <div className="relative z-10">
            <p className="m-0 text-[13px] text-slate-300 sm:text-[14px]">
              Home <span className="mx-2 text-slate-400">•</span>
              <span className="text-white">Contact us</span>
            </p>

            <h1 className="mt-2 text-[32px] font-bold tracking-[-0.02em] sm:text-[38px] lg:text-[42px]">
              Contact us
            </h1>

            <p className="mx-auto mt-3 max-w-[620px] text-sm leading-7 text-white/70">
              Tell us what you are building. We&apos;ll help you turn the idea
              into an actionable digital plan.
            </p>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[100px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InfoCard icon={FiPhone} title="Call us on" animateIcon>
                <a
                  href="tel:+919841663161"
                  className="block transition-colors duration-300 hover:text-[#4f8ef7]"
                >
                  +91 9841663161
                </a>

                {/* EMAIL WITH ICON */}
                <div className="mt-7">
                  <div className="mb-3 flex flex-col items-center">
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#4f8ef7]/10 text-[19px] text-[#4f8ef7] transition-all duration-300 hover:scale-110 hover:bg-[#4f8ef7] hover:text-white">
                      <FiMail />
                    </div>

                    <div className="text-[14px] font-semibold text-slate-800">
                      Email us
                    </div>
                  </div>

                  <a
                    href="mailto:growth@akkurate.in"
                    className="block transition-colors duration-300 hover:text-[#4f8ef7]"
                  >
                    growth@akkurate.in
                  </a>

                  <a
                    href="mailto:dinesh@akkurate.in"
                    className="mt-1 block transition-colors duration-300 hover:text-[#4f8ef7]"
                  >
                    dinesh@akkurate.in
                  </a>
                </div>
              </InfoCard>

              <InfoCard icon={FiMapPin} title="India locations">
                <div className="space-y-4">
                  <p className="m-0">
                    <strong className="text-slate-800">Chennai</strong>
                    <br />
                    1/15, kalamegam St, Annai Therasa Nagar,
                    <br className="hidden sm:block" />
                    West Tambaram
                  </p>

                  <p className="m-0">
                    <strong className="text-slate-800">Madurai</strong>
                    <br />
                    94/1, Nethaji St, Indrani Nagar
                    <br />
                    Mudukusalai, Madurai-16
                  </p>

                  <p className="m-0">
                    <strong className="text-slate-800">Singapore</strong>
                    <br />
                    309, Shunfu Road
                    <br />
                    #06-195, Singapore-570309
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </section>

        {/* FORM + MAP */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-[100px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[7fr_5fr] lg:gap-10">
              <div className="relative overflow-hidden rounded-[24px] border border-[#4f8ef7]/10 bg-[#f8faff] p-6 shadow-[0_8px_30px_rgba(7,35,82,.04)] sm:p-9 lg:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 animate-pulse rounded-full bg-[#4f8ef7]/5" />

                <div className="relative z-10">
                  <p className="m-0 mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-[13px]">
                    <span className="mr-1 text-[#4f8ef7]">+</span> Send a Message
                  </p>

                  <h2 className="m-0 mb-8 text-[26px] font-bold leading-[1.25] tracking-[-0.02em] text-slate-900 sm:text-[32px] lg:text-[38px]">
                    Let&apos;s Build Something{" "}
                    <span className="text-[#4f8ef7]">Akkurate</span> Together
                  </h2>

                  <form onSubmit={submit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        id="contactName"
                        name="name"
                        type="text"
                        label="Full Name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={change}
                        required
                      />

                      <Field
                        id="contactEmail"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="hello@company.com"
                        value={form.email}
                        onChange={change}
                        required
                      />

                      <Field
                        id="contactPhone"
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={change}
                      />

                      <div>
                        <label
                          htmlFor="contactService"
                          className="mb-1.5 block text-[13px] font-semibold text-slate-700"
                        >
                          Service Interested In
                        </label>

                        <select
                          id="contactService"
                          name="service"
                          value={form.service}
                          onChange={change}
                          className="h-[52px] w-full rounded-xl border border-black/10 bg-white px-[18px] text-[15px] text-slate-900 outline-none transition-all duration-300 hover:border-[#4f8ef7]/30 focus:border-[#4f8ef7] focus:ring-4 focus:ring-[#4f8ef7]/10"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {services.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contactMessage"
                        className="mb-1.5 block text-[13px] font-semibold text-slate-700"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        id="contactMessage"
                        name="message"
                        value={form.message}
                        onChange={change}
                        required
                        placeholder="Tell us about your project, goals, or any questions you have…"
                        className="min-h-[140px] w-full resize-y rounded-xl border border-black/10 bg-white px-[18px] py-[14px] text-[15px] leading-6 text-slate-900 outline-none transition-all duration-300 hover:border-[#4f8ef7]/30 focus:border-[#4f8ef7] focus:ring-4 focus:ring-[#4f8ef7]/10 placeholder:text-slate-400"
                      />
                    </div>

                    {status.text && (
                      <div
                        className={`rounded-xl px-4 py-3 text-[14px] font-medium ${
                          status.type === "error"
                            ? "bg-red-50 text-red-500"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {status.text}
                      </div>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <button
                        type="submit"
                        disabled={sending}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f8ef7] to-[#2563eb] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(79,142,247,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(79,142,247,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {sending ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Opening WhatsApp...
                          </>
                        ) : (
                          <>
                            Send to WhatsApp
                            <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                    </div>

                    <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                      <FiMessageCircle className="text-[#4f8ef7]" />
                      Submitting the form opens WhatsApp with your entered
                      details.
                    </div>
                  </form>
                </div>
              </div>

              {/* MAP */}
              <div>
                <div className="overflow-hidden rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                  <iframe
                    title="Akkurate Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.827064177657!2d80.1198!3d12.9255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9bfe6ee571%3A0x7a5d8f2c0c5a16d!2sEast%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="block h-[360px] w-full border-0 sm:h-[420px] lg:h-[540px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <span className="text-[14px] font-semibold text-slate-500">
                    Follow us:
                  </span>

                  <a
                    href="https://www.instagram.com/akkurate.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#4f8ef7]/20 bg-[#f8faff] text-[18px] text-[#4f8ef7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f8ef7] hover:text-white"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/akkurate-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#4f8ef7]/20 bg-[#f8faff] text-[18px] text-[#4f8ef7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f8ef7] hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="animate-pulse flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#25D366]/25 bg-[#25D366]/5 text-[18px] text-[#128C7E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
