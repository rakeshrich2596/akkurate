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

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import FAQ from "./pages/FAQ";


function HomePage() {
  return (
    <>

      <CustomCursor />

      <Navbar />

      <main>
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


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================================
            HOME PAGE
        ========================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* =========================================
            FAQ PAGE
        ========================================= */}

        <Route
          path="/faq"
          element={
            <>
              <Navbar />

              <FAQ />

              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;