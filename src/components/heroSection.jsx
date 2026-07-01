import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import heroImage from '../assets/ChatGPT Image Jun 19, 2026, 12_32_41 PM.png';

export default function HeroSectionFullWidth({ isDarkened }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navbar scroll visibility behavior
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Keywords list to animate
    const words = ["Brand Activation", "Digital Strategy", "Creative Design", "Seamless Tech"];

    const [index, setIndex] = useState(0);
    const [fadeState, setFadeState] = useState("animate-bounce-up-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState("animate-bounce-up-out");

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFadeState("animate-bounce-up-in");
            }, 350);
        }, 3200);

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
        { name: 'Lexus', logo: '../assets/lexusLogo.png' },
        { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg' },
        { name: 'Citibank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Citibank_logo.svg' },
        // { name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Lexus_logo.svg' },
        { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' }
    ];

    return (
        <>
            {/* Main Wrapper: 'isDarkened' toggle hone par brightness auto control hogi.
              Bina kisi additional overlay ke pure code ko smoothly dark and light karega.
            */}
            <div className={`bg-white font-outfit text-slate-900 relative transition-all duration-300 ${isDarkened ? 'brightness-50 pointer-events-none blur-[1px]' : 'brightness-100'
                }`}>

                <div className="w-full flex flex-col justify-between relative">

                    {/* Grid Section: 
                      - Mobile par flex-col-reverse kiya hai taaki text pehle aaye aur image upar chali jaye (or vice-versa, content flow automatic flexible hai).
                      - Fixed h-[900px] ko hata kar lg:min-h-[calc(100vh-80px)] ya standard responsive layout diya hai.
                    */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[auto] lg:min-h-[900px]">

                        {/* LEFT CONTENT BLOCK */}
                        <div className="col-span-1 lg:col-span-6 xl:col-span-6 pt-14 pb-10 lg:py-14 px-6 sm:px-12 lg:pl-12 xl:pl-45 space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-xl xl:max-w-4xl mx-auto lg:mx-0 w-full">

                            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[38px] xl:text-[48px] 2xl:text-[63px] font-bold tracking-tight text-slate-900 leading-[1.3] lg:leading-[1.4]">
                                Creating Meaningful{' '}
                                <br className="hidden sm:inline lg:hidden xl:inline" />
                                Brand Experiences{' '}
                                <br className="hidden sm:inline lg:hidden xl:inline" />
                                Through Strategy,{' '}
                                <br />

                                {/* Animation span */}
                                <span className="inline-block relative overflow-hidden h-[1.3em] w-full sm:w-auto sm:min-w-[420px] lg:min-w-[320px] xl:min-w-[400px] 2xl:min-w-[580px] align-bottom pb-1 text-center lg:text-left">
                                    <span className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-fit text-[#11C911] lg:bg-gradient-to-r lg:from-[#3BA51F] lg:to-[#3FA5D4] lg:bg-clip-text lg:text-transparent block whitespace-nowrap will-change-transform ${fadeState}`}>
                                        {words[index]}
                                    </span>
                                </span>
                            </h1>

                            <p className="text-slate-500 text-[15px] sm:text-lg lg:text-[18px] xl:text-[24px] max-w-[280px] sm:max-w-md lg:max-w-sm xl:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Digital brand activation agency delivering strategy, creativity, technology, and seamless execution
                            </p>

                            <div className="pt-1">
                                <button className="w-[162px] h-[48px] bg-[#22A722] text-white font-semibold text-[16px] sm:text-[18px] rounded-[8px] hover:bg-[#1a8f1a] hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap leading-none">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE BLOCK — hidden on mobile */}
                        <div className="hidden lg:block col-span-1 lg:col-span-6 h-[320px] sm:h-[400px] md:h-[480px] lg:h-full relative w-full overflow-hidden">

                            {/* Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-30 w-[40%] pointer-events-none" />

                            <img
                                src={heroImage}
                                alt="Brand Strategy Space"
                                className="object-cover w-full h-full absolute inset-0 z-10 scale-105"
                            />
                        </div>
                    </div>

                    {/* --- TRUSTED LOGOS SECTION --- */}


                </div>

            </div>
        </>
    );
}