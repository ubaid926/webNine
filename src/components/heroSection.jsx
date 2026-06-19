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
            <div className={`bg-white max-[786px]:bg-slate-100 max-[786px]:pb-20 font-outfit text-slate-900 relative  transition-all duration-300 ${isDarkened ? 'brightness-50 pointer-events-none blur-[1px]' : 'brightness-100'
                }`}>

                <div className="w-full flex flex-col justify-between relative">

                    {/* Grid Section: 
                      - Mobile par flex-col-reverse kiya hai taaki text pehle aaye aur image upar chali jaye (or vice-versa, content flow automatic flexible hai).
                      - Fixed h-[900px] ko hata kar lg:min-h-[calc(100vh-80px)] ya standard responsive layout diya hai.
                    */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12  min-h-[auto] lg:min-h-[900px]">

                        {/* LEFT CONTENT BLOCK */}
                        {/* LEFT CONTENT BLOCK */}
                        <div className="col-span-1 lg:col-span-6 xl:col-span-6 pt-12 pb-8 lg:py-14 px-6 sm:px-12 lg:pl-12 xl:pl-45  space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-xl xl:max-w-4xl mx-auto lg:mx-0 w-full">

                            {/* Font size reduced specifically for lg (1024px) and xl (1440px) */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide lg:text-[38px] xl:text-[48px] 2xl:text-[63px] font-semibold tracking-tight text-slate-900 leading-[1.25] lg:leading-[1.4]">
                                Creating Meaningful <br className="hidden sm:inline lg:hidden xl:inline" />
                                Brand Experiences <br className="hidden sm:inline lg:hidden xl:inline" />
                                Through Strategy, <br />

                                {/* Animation container container width scaled down to match smaller font */}
                                <span className="inline-block relative overflow-hidden h-[1.3em] w-full sm:w-auto sm:min-w-[420px] lg:min-w-[320px] xl:min-w-[400px] 2xl:min-w-[580px] align-bottom pb-1 text-center lg:text-left">
                                    <span className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-fit bg-gradient-to-r from-[#3BA51F] to-[#3FA5D4] bg-clip-text text-transparent block whitespace-nowrap will-change-transform ${fadeState}`}>
                                        {words[index]}
                                    </span>
                                </span>
                            </h1>

                            <p className=" text-slate-500 text-base sm:text-lg lg:text-[18px] xl:text-[24px] max-w-md lg:max-w-sm xl:max-w-xl mx-auto lg:mx-0 leading-snug">
                                Digital brand activation agency delivering strategy, creativity, technology, and seamless execution.
                            </p>

                            <div className="pt-2">
                                <button className="w-[145px] sm:w-[162px] h-[45px] sm:h-[51px] bg-gradient-to-r from-[#3BA51F] to-[#71C327] text-white font-semibold text-[16px] sm:text-[19px] rounded-[8px] sm:rounded-[10px] hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap leading-none">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE BLOCK */}
                        {/* Mobile par h-[300px] ya md:h-[450px] allocate kiya hai aur desktop (lg) par full height capture karega */}
                        <div className="bg-orange-200 col-span-1 lg:col-span-6 h-[320px] sm:h-[400px] md:h-[480px] lg:h-full relative w-full overflow-hidden order-first lg:order-last">

                            {/* Gradients to blend smoothly with background */}
                            <div className="absolute inset-0 bg-gradient-to-b  lg:bg-gradient-to-r from-white via-white/20  to-transparent z-30 w-full lg:w-[40%] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 h-[30%] lg:hidden pointer-events-none" />

                            <img
                                src={heroImage}
                                alt="Brand Strategy Space"
                                className="object-cover w-full h-full absolute  inset-0 z-10 scale-105"
                            />
                        </div>
                    </div>

                    {/* --- TRUSTED LOGOS SECTION --- */}


                </div>

            </div>
        </>
    );
}