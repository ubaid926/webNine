import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function HeroSectionFullWidth() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navbar scroll visibility behavior
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // Jin keywords ko aap animate karna chahte hain unki list
    const words = ["Brand Activation", "Digital Strategy", "Creative Design", "Seamless Tech"];

    const [index, setIndex] = useState(0);
    const [fadeState, setFadeState] = useState("animate-bounce-up-in");

    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Pehle current word ko exit slide-out animation trigger karein
            setFadeState("animate-bounce-up-out");

            setTimeout(() => {
                // 2. Index update karein aur naye word ko elastic bouncy entry dein
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFadeState("animate-bounce-up-in");
            }, 350); // Fast snap-out transition duration
        }, 3200); // Har 3.2 seconds mein text rotate hoga

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setActiveDropdown(null);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const clientLogos = [
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_2012.svg' },
        { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg' },
        { name: 'Citibank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Citibank_logo.svg' },
        { name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Lexus_logo.svg' },
        { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' }
    ];

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
        <>


            <div className="  bg-white font-outfit text-slate-900 relative overflow-x-hidden">

                <div className="w-full lg:pt-0 flex flex-col justify-between relative ">

                    <div className=" w-full grid grid-cols-1 lg:grid-cols-12 flex-grow h-[900px]">
                        <div className="lg:col-span-6 pt-20  px-6 sm:px-12 lg:pl-45 py-12 space-y-8 text-left max-w-2xl lg:max-w-none">
                            <h1 className=" text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight text-slate-900 leading-[1.4]">
                                Creating Meaningful <br />
                                Brand Experiences <br />
                                Through Strategy, <br />

                                <span className="inline-block relative overflow-hidden h-[1.3em] min-w-[440px] align-bottom pb-1">
                                    <span className={`absolute left-0 text-[#F25C22] block whitespace-nowrap will-change-transform ${fadeState}`}>
                                        {words[index]}
                                    </span>
                                </span>
                            </h1>
                            <p className="text-slate-500 text-[22px]   max-w-lg">
                                Digital brand activation agency delivering strategy, creativity, technology, and seamless execution.
                            </p>
                            <div className="pt-2">
                                <button className="bg-[#F25C22] text-white font-semibold text-xl px-6 py-3.5 rounded-md hover:bg-[#d64b18] transition shadow-md tracking-wider">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-6 h-full min-h-[450px]  relative w-full overflow-hidden">

                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-20 w-full lg:w-[40%] pointer-events-none" />
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 h-[15%] lg:hidden pointer-events-none" />

                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                                alt="Brand Strategy Space"
                                className="object-cover w-full h-full absolute inset-0 z-10 scale-105"
                            />
                        </div>
                    </div>

                    <div className="w-full relative  py-12 border-t border-slate-100/50 z-30">

                        <div className=" absolute top-0 left-0 right-0 -translate-y-[99%] w-full pointer-events-none overflow-hidden h-[80px] md:h-[140px]">
                            {/* <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
                                <path d="M0 200C480 80 960 80 1440 200V200H0Z" fill="#f8fafc" />
                            </svg> */}
                        </div>
                        <div className="w-full mx-auto px-6 text-center space-y-6">
                            <p className="text-slate-400 font-bold text-xs tracking-wider uppercase">
                                Trusted by Global Brands Across North America
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50 grayscale hover:opacity-80 transition duration-300">
                                {clientLogos.map((client) => (
                                    <img
                                        key={client.name}
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-5 sm:h-6 object-contain max-w-[110px]"
                                    />
                                ))}
                            </div>
                        </div>

                      
                    </div>

                </div>

            </div>
        </>
    );
}