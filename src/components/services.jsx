import React from 'react';
import { ArrowRight } from 'lucide-react';
import microsoftLogo from '../assets/microsoftLogo.png';
import citibankLogo from '../assets/citibankLogo.png';
import pepsicoLogo from '../assets/pepsicoLogo.png';
import lexusLogo from '../assets/lexusLogo.png';
import emiratesLogo from '../assets/emiratesLogo.png';
import safewayLogo from '../assets/safewayLogo.png';
import nutrienLogo from '../assets/nutrienLogo.png';
import jcpenneyLogo from '../assets/jcpenneyLogo.png';

// Service Icons from Assets
import publicRelationIcon from '../assets/public-relation 1.png';
import targetMarketingIcon from '../assets/target-marketing 1.png';
import uxDesignIcon from '../assets/ux-design 1.png';
import internetIcon from '../assets/internet (1) 1.png';
import diagramIcon from '../assets/diagram (1) 1.png';
import connectionIcon from '../assets/connection 1.png';

export default function ServicesSection() {
  const servicesData = [
    {
      icon: publicRelationIcon,
      iconBg: "bg-[#F25C22]", // Matches your theme orange
      title: "Brand Activation",
      description: "Create memorable experiences through events, activations, and marketing.",
      tags: [
        ["Experiential Marketing", "Events"],
        ["Retail Activations", "Consumer Engagement"]
      ]
    },
    {
      icon: targetMarketingIcon,
      iconBg: "bg-[#0F172A]", // Deep slate/black
      title: "Digital Strategy",
      description: "Develop data-driven roadmaps aligning marketing, technology, business goals.",
      tags: [
        ["Strategy", "Growth Planning", "Analytics"],
        ["Digital Transformation"]
      ]
    },
    {
      icon: uxDesignIcon,
      iconBg: "bg-[#1E40AF]", // Royal blue
      title: "UI/UX Design",
      description: "Design intuitive experiences improving engagement, usability, and satisfaction.",
      tags: [
        ["UX Research", "UI Design", "Prototyping"],
        ["User Experience"]
      ]
    },
    {
      icon: internetIcon,
      iconBg: "bg-[#0D9488]", // Teal
      title: "Website & Web App Development",
      description: "Build scalable websites and applications for performance and growth.",
      tags: [
        ["Website", "Web Apps", "E-Commerce"],
        ["CMS Platforms"]
      ]
    },
    {
      icon: diagramIcon,
      iconBg: "bg-[#6B21A8]", // Purple
      title: "Digital Marketing",
      description: "Drive awareness, traffic, and conversions through digital campaigns.",
      tags: [
        ["Social Media", "Paid Media", "SEO"],
        ["Content Marketing"]
      ]
    },
    {
      icon: connectionIcon,
      iconBg: "bg-[#166534]", // Green
      title: "Multichannel Marketing",
      description: "Deliver consistent experiences across digital, retail, social channels.",
      tags: [
        ["Omnichannel", "Customer Journey"],
        ["Retail Marketing", "Brand Communications"]
      ]
    }
  ];

  const clientLogos = [
    {
      name: 'Microsoft',
      logo: microsoftLogo,
      wScale: 'w-[110px] sm:w-[130px] md:w-[140px]'
    },
    {
      name: 'PepsiCo',
      logo: pepsicoLogo,
      wScale: 'w-[100px] sm:w-[120px] md:w-[135px]'
    },
    {
      name: 'Citibank',
      logo: citibankLogo,
      wScale: 'w-[90px] sm:w-[110px] md:w-[125px]'
    },
    {
      name: 'Lexus',
      logo: lexusLogo,
      wScale: 'w-[110px] sm:w-[130px] md:w-[145px]'
    },
    {
      name: 'Emirates',
      logo: emiratesLogo,
      wScale: 'w-[45px] sm:w-[55px] md:w-[85px]'
    },
    {
      name: 'Safeway',
      logo: safewayLogo,
      wScale: 'w-[110px] sm:w-[130px] md:w-[140px]'
    },
    {
      name: 'Nutrien',
      logo: nutrienLogo,
      wScale: 'w-[95px] sm:w-[115px] md:w-[130px]'
    },
    {
      name: 'JCPenney',
      logo: jcpenneyLogo,
      wScale: 'w-[120px] sm:w-[145px] md:w-[165px]'
    }
  ];

  return (
    <section className=" w-full text-slate-950 py-20 font-outfit">

      {/* --- TRUSTED LOGOS SECTION (Full Width Layout) --- */}
      <div className="w-full relative flex items-end pb-12 sm:pb-24  overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-8 text-center space-y-8 sm:space-y-10 relative z-20">

          <h2 className="text-[#334155]  pt-10 text-xl sm:text-2xl md:text-[33px] tracking-tight">
            Trusted by Global Brands Across North America.
          </h2>

          {/* Full Screen container wrapper for logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-14 lg:gap-x-11 max-w-[94rem] 2xl:max-w-none mx-auto px-4 opacity-65 grayscale contrast-125">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className={`flex items-center justify-center h-10 transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${client.wScale}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTENT CONTAINER WITH FULL SCREEN / RESPONSIVE MX BREAKPOINTS --- */}
      <div className=" flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-25 pt-20 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-33 2xl:mx-auto">
        <h2 className=" text-3xl sm:text-4xl md:text-[3.3rem] font-semibold xl:tracking-wide text-slate-900 max-w-3xl leading-[1.3] md:leading-[1.4]">
          Everything You Need To <br className="hidden sm:block" />
          Build, Activate & Grow Brand<span className="text-[#11C911] ml-0.5">.</span>
        </h2>
 
        <button className="group flex items-center gap-4 font-medium text-[22px] text-slate-900 border-b border-slate-900 pb-1 hover:text-[#11C911] hover:border-[#11C911] transition-colors duration-300 self-start md:self-auto shrink-0 mb-2">
          Explore All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="mx-4 md:mx-6 lg:mx-[9.25rem] xl:mx-52 2xl:mx-auto 2xl:max-w-[102rem] px-10 pb-24">

        {/* --- HEADER SECTION --- */}

        {/* --- SERVICES RESPONSIVE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-transparent"
            >
              <div>
                {/* Icon Container */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-[12px] flex items-center justify-center mb-6`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-normal text-slate-900 mb-3 tracking-tight whitespace-normal 2xl:whitespace-nowrap">
                  {service.title}
                </h3>
                <p className="text-black text-[18px] leading-relaxed mb-3 max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Dynamic Interactive Tags (Pills) */}
              <div className="flex flex-col gap-2 pt-1">
                {service.tags.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-wrap gap-2">
                    {row.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="h-[37px] px-4 flex items-center justify-center text-[15px] font-medium text-[#3168AF] bg-transparent border border-[#3168AF] rounded-[8px] hover:bg-[#3168AF]/5 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}