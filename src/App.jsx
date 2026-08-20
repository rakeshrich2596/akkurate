import Navbar from "./components/Navbar";
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

function App() {
  return (
    <>
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

export default App;