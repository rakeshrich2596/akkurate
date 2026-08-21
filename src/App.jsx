import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import Hero from "./components/Hero";
import BrandSlider from "./components/BrandSlider";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import MustHave from "./components/MustHave";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import GlobalPresence from "./components/GlobalPresence";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";
import ResultsSection from "./components/ResultsSection";
import ClientTrust from "./components/ClientTrust";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import SEO from "./pages/SEO";
import GEO from "./pages/GEO";
import AEO from "./pages/AEO";
import ScrollAnimations from "./components/ScrollAnimations";
import ScrollToTop from "./components/ScrollToTop";

/* =========================================================
   HOME PAGE
   "/" → Hero page
========================================================= */

function HomePage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main id="home">
        {/* HERO */}
        <Hero />

        <BrandSlider />

        <About />

        <MustHave />

        <Services />

        <Roadmap />

        <ResultsSection />

        <Showcase />

        <Testimonials />

        <Blog />

        <ClientTrust />

        <CTA />

        <GlobalPresence />

        <Integrations />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   ABOUT PAGE
   "/about" → About component
========================================================= */

function AboutPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <About />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   SHOWCASE / OUR WORK PAGE
   "/showcase" → Showcase component
========================================================= */

function ShowcasePage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <Showcase />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   BLOG PAGE
   "/blog" → Blog component
========================================================= */

function BlogPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <Blog />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   FAQ PAGE
   "/faq" → FAQ component
========================================================= */

function FAQPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   CONTACT PAGE
   "/contact" → ContactUs component
========================================================= */

function ContactPage() {
  return (
    <>
      <CustomCursor />

      <ContactUs />
    </>
  );
}

/* =========================================================
   SEO PAGE
   "/seo" → SEO.jsx
========================================================= */

function SEOPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <SEO />
      </main>

      <Footer />
    </>
  );
}

function GEOPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <GEO />
      </main>

      <Footer />
    </>
  );
}

function AEOPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <AEO />
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <ScrollAnimations />
      <Routes>
        {/* =================================================
            HOME
            "/" → HomePage → Hero
        ================================================= */}

        <Route path="/" element={<HomePage />} />

        {/* =================================================
            ABOUT
            "/about" → AboutPage
        ================================================= */}

        <Route path="/about" element={<AboutPage />} />

        {/* =================================================
            OUR WORK
            "/showcase" → ShowcasePage
        ================================================= */}

        <Route path="/showcase" element={<ShowcasePage />} />

        {/* =================================================
            BLOG
            "/blog" → BlogPage
        ================================================= */}

        <Route path="/blog" element={<BlogPage />} />

        {/* =================================================
            FAQ
            "/faq" → FAQPage
        ================================================= */}

        <Route path="/faq" element={<FAQPage />} />

        {/* =================================================
            CONTACT
            "/contact" → ContactPage
        ================================================= */}

        <Route path="/contact" element={<ContactPage />} />

        {/* =================================================
            SEO
            "/seo" → SEOPage → SEO.jsx
        ================================================= */}

        <Route path="/seo" element={<SEOPage />} />
        <Route path="/geo" element={<GEOPage />} />
        <Route path="/aeo" element={<AEOPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
