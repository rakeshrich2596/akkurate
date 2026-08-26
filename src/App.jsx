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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import SEO from "./pages/SEO";
import GEO from "./pages/GEO";
import AEO from "./pages/AEO";
import ScrollAnimations from "./components/ScrollAnimations";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAds from "./pages/GoogleAds";
import MetaAds from "./pages/MetaAds";
import LinkedinAds from "./pages/LinkedinAds";
import SMM from "./pages/SMM";
import YoutubeMarketing from "./pages/YoutubeMarketing";
import GoogleBusiness from "./pages/GoogleBusiness";
import AppDev from "./pages/app_dev";
import WebDev from "./pages/web_dev";
import WebApp from "./pages/web_app";
import CMS from "./pages/cms_dev";
import ECommerce from "./pages/e-com";
import WebDesign from "./pages/web-design";
import Logo from "./pages/logo";
import ContentCreation from "./pages/content-creation";
import UIUX from "./pages/ui-ux";
import Motion from "./pages/motion";
import Explainer from "./pages/explainer";
import Corporate from "./pages/corporate";
import Reels from "./pages/reels";
import B2BMarketing from "./pages/b2b-marketing";
import Education from "./pages/Education";
import HealthCare from "./pages/HealthCare";
import Hospitality from "./pages/Hospitality";
import RealEstate from "./pages/RealEstate";
import Jewellery from "./pages/Jewellery";
import Travel from "./pages/Travel";
import Food from "./pages/Food";
import Clothing from "./pages/Clothing";
import Manufacture from "./pages/Manufacture";

import OurWork from "./pages/OurWork";

import Happypique from "./pages/case-studies/Happypique";
import DrMultiSpecialityHospital from "./pages/case-studies/DrMultiSpecialityHospital";
import AlpineCoachTree from "./pages/case-studies/AlpineCoachTree";
import RythmicBeatDanceCourt from "./pages/case-studies/RythmicBeatDanceCourt";
import PentagonTaxCorp from "./pages/case-studies/PentagonTaxCorp";

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

function GoogleAdsPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <GoogleAds />
      </main>

      <Footer />
    </>
  );
}

function MetaAdsPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <MetaAds />
      </main>

      <Footer />
    </>
  );
}

function LinkedinAdsPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <LinkedinAds />
      </main>

      <Footer />
    </>
  );
}

function SMMPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <SMM />
      </main>

      <Footer />
    </>
  );
}

function YoutubeMarketingPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <YoutubeMarketing />
      </main>

      <Footer />
    </>
  );
}

function GoogleBusinessPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <GoogleBusiness />
      </main>

      <Footer />
    </>
  );
}

function AppDevPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <AppDev />
      </main>

      <Footer />
    </>
  );
}

function WebDevPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <WebDev />
      </main>

      <Footer />
    </>
  );
}

function WebAppPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <WebApp />
      </main>

      <Footer />
    </>
  );
}

function CMSPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <CMS />
      </main>

      <Footer />
    </>
  );
}

function ECommercePage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <ECommerce />
      </main>

      <Footer />
    </>
  );
}

function WebDesignPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <WebDesign />
      </main>

      <Footer />
    </>
  );
}

function LogoPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <Logo />
      </main>

      <Footer />
    </>
  );
}

function ContentCreationPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <ContentCreation />
      </main>
      <Footer />
    </>
  );
}

function UIUXPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <UIUX />
      </main>
      <Footer />
    </>
  );
}

function MotionPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Motion />
      </main>
      <Footer />
    </>
  );
}

function ExplainerPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Explainer />
      </main>
      <Footer />
    </>
  );
}

function CorporatePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Corporate />
      </main>
      <Footer />
    </>
  );
}

function ReelsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Reels />
      </main>
      <Footer />
    </>
  );
}

function B2BPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <B2BMarketing />
      </main>
      <Footer />
    </>
  );
}

function EducationPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Education />
      </main>
      <Footer />
    </>
  );
}

function HealthCarePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HealthCare />
      </main>
      <Footer />
    </>
  );
}

function HospitalityPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hospitality />
      </main>
      <Footer />
    </>
  );
}

function RealEstatePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <RealEstate />
      </main>
      <Footer />
    </>
  );
}

function JewelleryPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Jewellery />
      </main>
      <Footer />
    </>
  );
}

function TravelPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Travel />
      </main>
      <Footer />
    </>
  );
}

function FoodPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Food />
      </main>
      <Footer />
    </>
  );
}

function ClothingPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Clothing />
      </main>
      <Footer />
    </>
  );
}

function ManufacturePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Manufacture />
      </main>
      <Footer />
    </>
  );
}

function OurWorkPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <OurWork />
      </main>

      <Footer />
    </>
  );
}

function HappypiquePage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <Happypique />
      </main>

      <Footer />
    </>
  );
}

function DrMultiSpecialityHospitalPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <DrMultiSpecialityHospital />
      </main>

      <Footer />
    </>
  );
}

function AlpineCoachTreePage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <AlpineCoachTree />
      </main>

      <Footer />
    </>
  );
}

function RythmicBeatDanceCourtPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <RythmicBeatDanceCourt />
      </main>

      <Footer />
    </>
  );
}

function PentagonTaxCorpPage() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <PentagonTaxCorp />
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
            "/our-work" → OurWork
            "/showcase" → redirects to /our-work
        ================================================= */}

        {/* Keep the old URL working */}
        <Route path="/showcase" element={<Navigate to="/our-work" replace />} />

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
            Digital Marketing Services
        ================================================= */}

        <Route path="/seo" element={<SEOPage />} />
        <Route path="/geo" element={<GEOPage />} />
        <Route path="/aeo" element={<AEOPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/meta-ads" element={<MetaAdsPage />} />
        <Route path="/linkedin-ads" element={<LinkedinAdsPage />} />
        <Route path="/social-media-marketing" element={<SMMPage />} />
        <Route path="/youtube-marketing" element={<YoutubeMarketingPage />} />
        <Route path="/google-my-business" element={<GoogleBusinessPage />} />

        {/* =================================================
            Website  Services
        ================================================= */}

        <Route path="/app-development" element={<AppDevPage />} />
        <Route path="/website-development" element={<WebDevPage />} />
        <Route path="/web-application" element={<WebAppPage />} />
        <Route path="/e-commerce" element={<ECommercePage />} />
        <Route path="/cms-development" element={<CMSPage />} />
        <Route path="/website-design" element={<WebDesignPage />} />

        {/* =================================================
            Branding
        ================================================= */}
        <Route path="/logo-design" element={<LogoPage />} />

        {/* =================================================
            Branding / Creative Services
         ================================================= */}

        <Route path="/content-creation" element={<ContentCreationPage />} />

        <Route path="/ui-ux-design" element={<UIUXPage />} />

        <Route path="/motion-graphics" element={<MotionPage />} />

        <Route path="/explainer-video" element={<ExplainerPage />} />

        <Route path="/corporate-video" element={<CorporatePage />} />

        <Route path="/reels-making" element={<ReelsPage />} />

        {/* =================================================
          INDUSTRIES
      ================================================= */}
        <Route path="/b2b-marketing" element={<B2BPage />} />

        <Route path="/education" element={<EducationPage />} />
        <Route path="/healthcare" element={<HealthCarePage />} />
        <Route path="/hospitality" element={<HospitalityPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/manufacture" element={<ManufacturePage />} />

        {/* =================================================
            OUR WORK
            "/our-work" → OurWork
        ================================================= */}

        <Route path="/our-work" element={<OurWorkPage />} />

        <Route path="/showcase" element={<Navigate to="/our-work" replace />} />

        <Route path="/our-work/happypique" element={<HappypiquePage />} />

        <Route
          path="/our-work/dr-multi-speciality-hospital"
          element={<DrMultiSpecialityHospitalPage />}
        />

        <Route
          path="/our-work/alpine-coach-tree"
          element={<AlpineCoachTreePage />}
        />

        <Route
          path="/our-work/rythmic-beat-dance-court"
          element={<RythmicBeatDanceCourtPage />}
        />

        <Route
          path="/our-work/pentagon-tax-corp"
          element={<PentagonTaxCorpPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
