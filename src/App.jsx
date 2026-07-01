import { useState } from 'react'
import AppNav from './components/nav'
import HeroSectionFullWidth from './components/heroSection'
import ServicesSection from './components/services'
import CaseStudies from './components/caseStudies'
import FourthSection from './components/fourthSection'
import MarqueeSection from './components/marqueeSection'
import FifthSection from './components/fifthSection'

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="bg-white font-outfit text-slate-900 relative min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

      {/* Hero */}
      <div className={`bg-white transition-all duration-300 ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''}`}>
        <HeroSectionFullWidth isDarkened={!!activeDropdown} />
      </div>

      {/* Services */}
      <div className="w-full  relative z-20 -top-35 max-[769px]:top-0 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-42">

        {/* DOME SVG CURVE LAYER: Yeh upar ke dono edges ko smoothly absolute wave path deta hai */}


        {/* ACTUAL CONTENT CANVAS */}
        {/* Pure White background jo upar wale SVG arc se smooth attach ho kar niche content barhayega */}
        <div
          className={` pb-16 pt-4 sm:pb-24 transition-all duration-300 
    [clip-path:ellipse(150%_150%_at_50%_0%)] 
    sm:[clip-path:ellipse(150%_48%_at_50%_50%)] 
    lg:[clip-path:ellipse(92%_45%_at_50%_50%)] ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''
      
            }`}
        >
          <ServicesSection />
        </div>

      </div>

      {/* Case Studies */}
      <CaseStudies />

      {/* Featured / As featured in box */}
      <FourthSection />

      {/* Marquee + tagline */}
      <MarqueeSection />

      {/* Fifth Section — testimonials + awards */}
      <FifthSection />

      {/* Footer placeholder */}
      <div className="max-w-7xl mx-auto px-6 py-12" />

    </div>
  );
}
