import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Ensure lucide-react is installed, or replace with inline SVGs

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Client logos data
  const clientLogos = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_Standard_-_2012.svg' },
    { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg' },
    { name: 'Citibank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Citibank.svg' },
    { name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Lexus_Division_Logo.svg' },
    { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
    { name: 'Safeway', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Safeway_Logo.svg' },
    { name: 'Nutrien', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Nutrien_Logo.svg' },
    { name: 'JCPenney', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/J._C._Penney_logo.svg' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative overflow-hidden">
      
      {/* --- HEADER NAVBAR --- */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-[#F25C22]">9</span>
            <span className="text-xl font-bold tracking-tight text-slate-900 -ml-0.5">
              number <br />
              <span className="block text-xs font-semibold uppercase tracking-wider -mt-1.5">ine</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-slate-700">
          <button className="flex items-center space-x-1 hover:text-[#F25C22] transition">
            <span>Services</span> <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center space-x-1 hover:text-[#F25C22] transition">
            <span>Technologies</span> <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center space-x-1 hover:text-[#F25C22] transition">
            <span>Industries</span> <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center space-x-1 hover:text-[#F25C22] transition">
            <span>About</span> <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <a href="#work" className="hover:text-[#F25C22] transition">Our Work</a>
          <a href="#blog" className="hover:text-[#F25C22] transition">Blog</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-slate-800 transition shadow-sm">
            Schedule a Call
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="lg:hidden p-2 text-slate-700" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* --- HERO MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.15]">
            Creating Meaningful <br />
            Brand Experiences <br />
            Through Strategy, <br />
            <span className="text-[#F25C22]">Brand Activation</span>
          </h1>
          
          <p className="text-slate-500 text-base sm:text-lg max-w-lg font-normal leading-relaxed">
            Digital brand activation agency delivering strategy, creativity, technology, and seamless execution.
          </p>

          <div className="pt-2">
            <button className="bg-[#F25C22] text-white font-medium text-sm px-6 py-3 rounded-md hover:bg-[#d64b18] transition shadow-lg shadow-orange-500/20">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Right Collage/Graphic Column */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full">
          {/* Subtle gradient wrapper to replicate the fading mockup background in the image */}
          <div className="relative w-full max-w-xl lg:max-w-none aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-l from-slate-50 via-white to-white flex items-center justify-end">
            
            {/* Replace this placeholder img tag with your actual collage asset */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Brand Activation Work Collage" 
              className="object-cover object-left h-full w-[90%] opacity-90 rounded-l-2xl shadow-2xl mix-blend-multiply" 
            />
            
            {/* Fade effect layer matching the mockup layout */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </main>

      {/* --- TRUSTED BY / LOGOS FOOTER --- */}
      <section className="border-t border-slate-100 bg-white/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-700 font-medium text-sm mb-8 tracking-wide">
            Trusted by Global Brands Across North America.
          </p>
          
          {/* Flex wrap/grid layout for logos to remain perfectly responsive */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 opacity-50 grayscale hover:opacity-75 transition duration-300">
            {clientLogos.map((client) => (
              <img 
                key={client.name}
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-5 md:h-6 object-contain max-w-[110px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom organic curve accent mimicry */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-50/50 pointer-events-none" />
    </div>
  );
}