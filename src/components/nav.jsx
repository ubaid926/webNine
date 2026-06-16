import React, { useState } from 'react';
import { ChevronDown, Menu, X, Layout, Database, Brain, Smartphone, Palette, CheckCircle, ArrowRight } from 'lucide-react';

export default function AppNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks active mega menu state
  const [activeDropdown2, setActiveDropdown2] = useState(null); // Tracks active mega menu state
  const [activeDropdown3, setActiveDropdown3] = useState(null); // Tracks active mega menu state
  const [activeDropdown4, setActiveDropdown4] = useState(null); // Tracks active mega menu state

  const clientLogos = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Adobe_Corporate_Logo.svg' },
    { name: 'Pinterest', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest_Logo.svg' },
    { name: 'Motorola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Motorola_new_logo.svg' }
  ];

  const services = [
    { title: "Front-End Development", desc: "Build modern frontends designed for performance and scale.", tags: ["Front-End", "React", "Angular"], icon: <Layout className="w-6 h-6 text-orange-500" />, bg: "bg-orange-50" },
    { title: "Back-End Development", desc: "Develop secure, scalable backends that perform under load.", tags: ["Back-End", "Node.js", "Java"], icon: <Database className="w-6 h-6 text-blue-500" />, bg: "bg-blue-50" },
    { title: "AI and Machine Learning", desc: "Deploy trustworthy AI solutions that create real business value.", tags: ["AI", "Python", "LLMs"], icon: <Brain className="w-6 h-6 text-indigo-500" />, bg: "bg-indigo-50" },
  ];

  // Mega menu columns data matching image_067ba9.png
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
    <div className="bg-slate-50 font-outfit text-slate-900 relative ">

      {/* --- TOP HERO SECTION (White Background) --- */}
      <div className="bg-white   relative">

        {/* --- HEADER NAVBAR --- */}
        <header className=" mx-auto px-6 py-5 flex items-center justify-between relative z-50 border-b border-slate-100 shadow-[0_10px_15px_-15px_rgba(0,0,0,0.8)]">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-black tracking-tight text-slate-900">Baires<span className="text-[#F25C22]">Dev</span></span>
          </div>

          {/* Desktop Navigation Links */}

          <div className="hidden lg:block">
            <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-slate-600 h-full">

              {/* Services Mega Menu Trigger Link */}
              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => {

                    setActiveDropdown('services')
                  }, 100);
                }
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 font-bold transition pb-1 ${activeDropdown === 'services' ? 'text-[#F25C22] font-semibold' : 'hover:text-[#F25C22]'}`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>

                {/* Active Orange Underline Bar like image_067ba9.png */}
                {activeDropdown === 'services' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50 animate-fade-in" />
                )}
              </div>
              <div
                className="relative py-2 "
                onMouseEnter={() => {
                  setTimeout(() => {

                    setActiveDropdown2('technologies')
                  }, 100);
                }}
                onMouseLeave={() => setActiveDropdown2(null)}
              >
                <button className={`flex items-center space-x-1 font-bold transition pb-1 ${activeDropdown2 === 'technologies' ? 'text-[#F25C22] font-semibold' : 'hover:text-[#F25C22]'}`}>
                  <span>Technologies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown2 === 'technologies' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>

                {/* Active Orange Underline Bar like image_067ba9.png */}
                {activeDropdown2 === 'technologies' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50 animate-fade-in" />
                )}
              </div>
              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => {

                    setActiveDropdown('industries')
                  }, 100);
                }
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 font-bold transition pb-1 ${activeDropdown === 'industries' ? 'text-[#F25C22] font-semibold' : 'hover:text-[#F25C22]'}`}>
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>

                {/* Active Orange Underline Bar like image_067ba9.png */}
                {activeDropdown === 'industries' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50 animate-fade-in" />
                )}
              </div>
              <div
                className="relative py-2"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setActiveDropdown('about')

                  }, 100);
                }
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 transition font-bold pb-1 ${activeDropdown === 'about' ? 'text-[#F25C22] font-semibold' : 'hover:text-[#F25C22]'}`}>
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#F25C22]' : ''}`} />
                </button>

                {/* Active Orange Underline Bar like image_067ba9.png */}
                {activeDropdown === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F25C22] rounded-t-full z-50 animate-fade-in" />
                )}
              </div>
              <a href="#work" className="font-outfit font-bold hover:text-[#F25C22] transition">Our Work</a>
              <a href="#work" className="font-bold hover:text-[#F25C22] transition">Blog</a>
              <button className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-slate-800 transition">Schedule a Call</button>
            </nav>
          </div>
        </header>

        {/* --- MEGA MENU PANEL (image_067ba9.png implementation) --- */}
        <div
          className={`absolute left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-40 transition-all duration-300 transform origin-top ${activeDropdown === 'services' || activeDropdown2 === 'technologies' || activeDropdown === 'industries' || activeDropdown === 'about' ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
            }`}
          onMouseEnter={() => setActiveDropdown('services')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="w-full mx-auto grid grid-cols-12 min-h-[420px]">

            {/* Left Highlight Sidebar Column (Grey tint block) */}
            <div className="col-span-3 bg-slate-50/80 p-8 border-r border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Services<span className="text-[#F25C22]">.</span></h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Get <span className="underline decoration-slate-400 font-medium text-slate-700">software development services</span>, built around your needs:
                </p>
                <ul className="space-y-3 text-sm font-semibold text-slate-700 pt-2">
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Staff Augmentation</li>
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Dedicated Teams</li>
                  <li className="hover:text-[#F25C22] cursor-pointer transition">Software Outsourcing</li>
                  <li className="hover:text-[#F25C22] cursor-pointer transition">AI Transformation</li>
                </ul>
              </div>

              {/* Bottom Brand Feature */}
              <div className="pt-6 border-t border-slate-200/60 space-y-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Rolls-Royce_Motor_Cars_logo.svg" alt="Rolls Royce" className="h-6 object-contain grayscale opacity-70" />
                <p className="text-[11px] text-slate-500 leading-tight">
                  We built an app for real-time nuclear plant monitoring. <span className="underline text-slate-700 font-medium cursor-pointer">Read case study.</span>
                </p>
              </div>
            </div>

            {/* Right Wide Link Grid Layout */}
            <div className="col-span-9 p-8 grid grid-cols-3 gap-8 relative bg-white">

              {/* Top Services - Col 1 */}
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

              {/* Top Services - Col 2 */}
              <div className="space-y-4 pt-5"> {/* Offset heading to line up with column 1 */}
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

              {/* Enterprise Focused Column */}
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

        {/* --- MAIN HERO BODY --- */}
        {/* <main className="  mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Engineers Working"
                className="object-cover h-full w-full opacity-95"
              />
              <div className="lg:col-span-6 z-10 space-y-6 text-left absolute ">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.15]">
                  Accelerate Your Roadmap With Our Vetted <br />
                  <span className="text-[#F25C22]">Cloud Engineers</span>
                </h1>
                <p className="text-slate-500 text-base sm:text-lg max-w-lg">
                  Access 4,000+ timezone-aligned, AI-augmented software engineers across 100+ technologies.
                </p>
                <button className="bg-[#F25C22] text-white font-medium text-sm px-6 py-3 rounded-md hover:bg-[#d64b18] transition shadow-md">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </main> */}
      </div >

      {/* --- LOWER CONTAINER WITH CIRCLE ARCH --- */}
      {/* < div className="relative -mt-24 bg-slate-50 z-20" >
        <div className="absolute top-0 left-0 right-0 -translate-y-[99%] w-full pointer-events-none overflow-hidden h-[120px] md:h-[200px]">
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 200C480 50 960 50 1440 200V200H0Z" fill="#f8fafc" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-30 pt-4">
          <div className="text-center pb-20">
            <p className="text-slate-500 font-medium text-sm mb-6">
              500+ companies rely on our <span className="underline decoration-[#F25C22] font-semibold text-slate-800">top 1% talent</span> to scale
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40 grayscale">
              {clientLogos.map((client) => (
                <img key={client.name} src={client.logo} alt={client.name} className="h-6 object-contain max-w-[100px]" />
              ))}
            </div>
          </div>
        </div>
      </div > */}

    </div >
  );
}