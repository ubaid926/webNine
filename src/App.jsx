import { useState } from 'react'
import AppNav from './components/nav'
import HeroSectionFullWidth from './components/heroSection'
import ServicesSection from './components/services'

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    // Base platform background ko slate ya light gray rakhein
    <div className="bg-slate-50 font-outfit text-slate-900 relative min-h-screen overflow-x-hidden">

      {/* 1. Navbar */}
      <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

      {/* --- HERO SECTION CONTAINER --- */}
      <div className={`bg-white  transition-all duration-300 ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''}`}>
        <HeroSectionFullWidth isDarkened={!!activeDropdown} />
      </div>

      {/* --- DUAL CURVED WRAPPER (Aapki Images Jaisa Perfect Effect) --- */}
      {/* - Negative margin (`-mt-24`) se yeh section smoothly hero container ke upar charhega.
        - Iske top par ek explicit dynamic SVG Inject kiya hai jo dono corners ko perfectly white dome curve deta hai.
      */}
      <div className="w-full  relative z-20 -top-35 max-[769px]:top-0 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40">

        {/* DOME SVG CURVE LAYER: Yeh upar ke dono edges ko smoothly absolute wave path deta hai */}


        {/* ACTUAL CONTENT CANVAS */}
        {/* Pure White background jo upar wale SVG arc se smooth attach ho kar niche content barhayega */}
        <div
          className={`bg-white pb-16 pt-4 sm:pb-24 transition-all duration-300 
    [clip-path:ellipse(150%_50%_at_50%_50%)] 
    sm:[clip-path:ellipse(150%_48%_at_50%_50%)] 
    lg:[clip-path:ellipse(92%_45%_at_50%_50%)] ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''
      
            }`}
        >
          <ServicesSection />
        </div>

      </div>

      {/* --- EXTRA BOTTOM SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-30">
        {/* Footer content yahan aa sakta hai */}
      </div>

    </div>
  );
}