import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/Logo (1)a.png'; // Aapka original "number 9ine" logo

export default function AppNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const megaMenuData = {
    topServicesCol1: [
      "AI Development", "Back-end Development", "CMS Development",
      "Cryptocurrency & Blockchain", "Front-end Development",
      "Machine Learning", "QA Testing & Automation", "UX/UI Design"
    ],
    topServicesCol2: [
      "Android App Development", "Business Intelligence", "Data Engineering",
      "eCommerce Development", "iOS App Development",
      "Mobile App Development", "SaaS Development", "Web Development"
    ],
    enterpriseFocused: [
      "Backup Solutions", "Big Data", "Cloud Applications",
      "CRM Systems", "Cybersecurity", "DevOps",
      "Digital Transformation", "ERP Development"
    ]
  };

  return (
    <div className="bg-slate-50 font-outfit text-slate-900 relative">
      <div className="bg-white relative">

        {/* --- HEADER NAVBAR (Logo and Menu Button Never Move) --- */}
        <header className="w-full mx-auto px-6 py-2 flex items-center justify-between relative z-50 border-b border-slate-100 shadow-[0_10px_15px_-15px_rgba(0,0,0,0.05)]">
          {/* Logo Container with Perfect Alignment */}
          <div className="flex  items-center justify-start">
            <img
              src={logo}
              alt="Number 9ine"
              className="h-10 sm:h-16 w-auto object-contain block"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <nav className="flex items-center space-x-8 text-[15px] font-bold text-slate-600">
              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => { setActiveDropdown('services'); }, 100);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 transition pb-1 ${activeDropdown === 'services' ? 'text-[#F25C22]' : 'hover:text-[#F25C22]'}`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50" />
                )}
              </div>

              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => { setActiveDropdown('technologies'); }, 100);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 transition pb-1 ${activeDropdown === 'technologies' ? 'text-[#F25C22]' : 'hover:text-[#F25C22]'}`}>
                  <span>Technologies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'technologies' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>
                {activeDropdown === 'technologies' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50" />
                )}
              </div>

              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => { setActiveDropdown('industries'); }, 100);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 transition pb-1 ${activeDropdown === 'industries' ? 'text-[#F25C22]' : 'hover:text-[#F25C22]'}`}>
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>
                {activeDropdown === 'industries' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50" />
                )}
              </div>

              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => { setActiveDropdown('about'); }, 100);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 transition pb-1 ${activeDropdown === 'about' ? 'text-[#F25C22]' : 'hover:text-[#F25C22]'}`}>
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50" />
                )}
              </div>

              <a href="#work" className="hover:text-[#F25C22] transition">Our Work</a>
              <a href="#blog" className="hover:text-[#F25C22] transition">Blog</a>
              <button className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-slate-800 transition whitespace-nowrap">Schedule a Call</button>
            </nav>
          </div>

          {/* Interactive Icon toggle (Menu transforms to X without layout shifting) */}
          <div className="lg:hidden flex items-center h-full">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2 hover:text-[#F25C22] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-slate-900 transition-all duration-200" />
              ) : (
                <Menu className="w-7 h-7 text-slate-900 transition-all duration-200" />
              )}
            </button>
          </div>
        </header>

        {/* --- DESKTOP MEGA MENU PANEL --- */}
        <div
          className={`hidden lg:block absolute left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-40 transition-all duration-300 transform origin-top ${activeDropdown ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
            }`}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="w-full mx-auto grid grid-cols-12 min-h-[420px]">
            <div className="col-span-3 bg-slate-50/80 p-8 border-r border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 capitalize">{activeDropdown || 'Services'}<span className="text-[#F25C22]">.</span></h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Get <span className="underline decoration-slate-400 font-medium text-slate-700">software solutions</span>, built around your needs:
                </p>
                <ul className="space-y-3 text-sm font-semibold text-slate-700 pt-2">
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Staff Augmentation</li>
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Dedicated Teams</li>
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Software Outsourcing</li>
                </ul>
              </div>
            </div>

            <div className="col-span-9 p-8 grid grid-cols-3 gap-8 bg-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#F25C22] rounded-sm"></span>
                  <span>Top Services</span>
                </div>
                <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                  {megaMenuData.topServicesCol1.map((item, idx) => (
                    <li key={idx} className="hover:text-[#F25C22] cursor-pointer transition">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-5">
                <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                  {megaMenuData.topServicesCol2.map((item, idx) => (
                    <li key={idx} className="hover:text-[#F25C22] cursor-pointer transition">{item}</li>
                  ))}
                </ul>
                <div className="pt-4">
                  <button className="flex items-center space-x-1 text-sm font-bold text-slate-900 hover:text-[#F25C22] transition">
                    <span>All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#F25C22] rounded-sm"></span>
                  <span>Enterprise Focused</span>
                </div>
                <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                  {megaMenuData.enterpriseFocused.map((item, idx) => (
                    <li key={idx} className="hover:text-[#F25C22] cursor-pointer transition">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE FULL SCREEN PANEL (SLIDES RIGHT-TO-LEFT FROM BELOW THE NAVBAR) --- */}
        <div
          className={`lg:hidden fixed top-[73px] sm:top-[81px] bottom-0 right-0 left-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full bg-white border-t border-slate-100">
            {/* Menu options stack up neatly inside full screen height */}
            <nav className="flex-1 px-8 pt-8 space-y-6 overflow-y-auto pb-20">

              {/* 1. Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('services')}
                  className="flex items-center space-x-2 text-[21px] font-bold text-slate-900 tracking-tight"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-[18px] h-[18px] text-slate-600 transition-transform duration-200 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'services' ? 'max-h-[300px] opacity-100 mt-3 pl-2' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 border-l-2 border-slate-100 pl-4 text-[15px] font-medium text-slate-600">
                    {megaMenuData.topServicesCol1.slice(0, 5).map((item, i) => (
                      <a key={i} href={`#${item}`} className="block hover:text-[#F25C22]">{item}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Technologies Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('technologies')}
                  className="flex items-center space-x-2 text-[21px] font-bold text-slate-900 tracking-tight"
                >
                  <span>Technologies</span>
                  <ChevronDown className={`w-[18px] h-[18px] text-slate-600 transition-transform duration-200 ${mobileDropdown === 'technologies' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'technologies' ? 'max-h-[150px] opacity-100 mt-3 pl-2' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 border-l-2 border-slate-100 pl-4 text-[15px] font-medium text-slate-600">
                    <p className="hover:text-[#F25C22] cursor-pointer">React & Next.js</p>
                    <p className="hover:text-[#F25C22] cursor-pointer">Node.js Backend</p>
                  </div>
                </div>
              </div>

              {/* 3. Industries Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('industries')}
                  className="flex items-center space-x-2 text-[21px] font-bold text-slate-900 tracking-tight"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-[18px] h-[18px] text-slate-600 transition-transform duration-200 ${mobileDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'industries' ? 'max-h-[150px] opacity-100 mt-3 pl-2' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 border-l-2 border-slate-100 pl-4 text-[15px] font-medium text-slate-600">
                    <p className="hover:text-[#F25C22] cursor-pointer">Fintech Solutions</p>
                    <p className="hover:text-[#F25C22] cursor-pointer">eCommerce Systems</p>
                  </div>
                </div>
              </div>

              {/* 4. About Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('about')}
                  className="flex items-center space-x-2 text-[21px] font-bold text-slate-900 tracking-tight"
                >
                  <span>About</span>
                  <ChevronDown className={`w-[18px] h-[18px] text-slate-600 transition-transform duration-200 ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'about' ? 'max-h-[120px] opacity-100 mt-3 pl-2' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 border-l-2 border-slate-100 pl-4 text-[15px] font-medium text-slate-600">
                    <p className="hover:text-[#F25C22] cursor-pointer">Our Corporate Profile</p>
                  </div>
                </div>
              </div>

              {/* Static Links */}
              <a href="#work" className="block text-[21px] font-bold text-slate-900 tracking-tight hover:text-[#F25C22] transition">
                Our Work
              </a>

              <a href="#blog" className="block text-[21px] font-bold text-slate-900 tracking-tight hover:text-[#F25C22] transition">
                Blog
              </a>

              {/* Bottom Schedule Action Button inside drawer */}
              <div className="pt-4">
                <button className="w-full bg-black text-white text-sm font-semibold py-3.5 rounded-sm hover:bg-slate-800 transition">
                  Schedule a Call
                </button>
              </div>

            </nav>
          </div>
        </div>

      </div>
    </div>
  );
}