import { AboutSection } from "./components/AboutSection"
import { BookingSection } from "./components/BookingSection"
import { GallerySection } from "./components/GallerySection"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import { OpinionsSection } from "./components/OpinionsSection"
import { ServicesSection } from "./components/ServicesSection"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[#292524]">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* About us */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Gallery */}
      <GallerySection />

      {/* Opinions */}
      <OpinionsSection />

      {/* Reserva */}
      <BookingSection />

      {/* Contact */}

      {/* Footer */}

    </div>
  )
}

export default App
