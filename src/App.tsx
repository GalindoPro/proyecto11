import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Quote } from "./components/Quote";
import { News } from "./components/News";
import { Affiliation } from "./components/Affiliation";
import { Contact } from "./components/Contact";
import { Agencies } from "./components/Agencies";
import { AssemblyGalleryPage } from "./pages/AssemblyGalleryPage";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <div className="min-h-screen bg-brand-blue flex flex-col font-sans text-white">
        <Header />
        <main className="flex-grow pt-36">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/cotizar" element={<Quote />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/afiliacion" element={<Affiliation />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/agencias" element={<Agencies />} />
            <Route path="/asamblea" element={<AssemblyGalleryPage />} />
            {/* Add other routes as needed or use placeholders */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
