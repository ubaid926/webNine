import React from 'react';
import { ArrowRight, Car, Building2, Plane } from 'lucide-react';
import carImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1.png'
import microsoftImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (1).png'
import emiratesImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (2).png'
import lexuslogo from '../assets/Logo (2).png'
import msLogo from '../assets/mlogo 1.png'
import emiratesLogo from '../assets/Group 132.png'
import electricCar from '../assets/electric-car 1.png'
import building from '../assets/electric-car 1 (1).png'
import plane from '../assets/electric-car 1 (2).png'

const caseStudies = [
  {
    id: '01',
    category: 'AUTOMOTIVE',
    title: 'Lexus Interactive Experience',
    description: 'An immersive digital platform & configurator that redefines luxury vehicle exploration.',
    icon: <img src={electricCar} className="w-[41px] h-[41px] " />,
    image: carImage,
    logo: lexuslogo
  },
  {
    id: '02',
    category: 'ENTERPRISE',
    title: 'Microsoft Enterprise Solutions',
    description: 'Enterprise-grade solutions and digital transformation for global teams and business units.',
    icon: <img src={building} className="w-[41px] h-[41px] " />,
    image: microsoftImage,
    logo: msLogo
  },
  {
    id: '03',
    category: 'TRAVEL & HOSPITALITY',
    title: 'Emirates Digital Experience Platform',
    description: 'Digital experience platform enhancing customer engagement across global touchpoints.',
    icon: <img src={plane} className="w-[41px] h-[41px] " />,
    image: emiratesImage,
    logo: emiratesLogo
  },
];

const CaseStudies = () => {
  return (
    <section className=" min-h-fit 2xl:h-[1087px] py-12 sm:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-[#E4E4E4] overflow-hidden">
      <div className="2xl:max-w-[102rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center xl:items-start gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-medium text-gray-900 mb-4 leading-[1.1]">
              Featured{' '}
              <span className="bg-gradient-to-r from-[#169C55] to-[#044E36] bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-[20px]">
              Explore how we partner with global brands to deliver innovative digital solutions that create real business impact.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#199A61] to-[#1FBB68]/[0.17] rounded-full" />
          </div>

          <div className="mt-2 md:mt-4 shrink-0 ">
            <button
              className="group flex items-center justify-between bg-white transition-all duration-300 max-w-full"
              style={{
                width: '298px',
                height: '81px',
                borderRadius: '40.5px',
                border: '2px solid #1FBB68',
                padding: '4px'
              }}
            >
              <span className="pl-4 sm:pl-6 font-medium text-base sm:text-[20px] whitespace-nowrap">View All Case Studies</span>

              <div className="bg-gradient-to-br from-[#29C46C] to-[#1CAC69] text-white p-4 sm:p-5 rounded-full hover:opacity-90 transition-opacity shrink-0 flex items-center justify-center">
                <ArrowRight size={24} />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 justify-items-center  py-6 md:py-10">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative group hover:-translate-y-2 transition-all duration-500 w-full max-w-[480px] h-[580px] sm:h-[603px] "
            >
              {/* Outer Outer Glow Effect (starts from borders, behind card) */}
              <div className="absolute -inset-4 bg-emerald-500 opacity-0 group-hover:opacity-40 blur-[50px] transition-all duration-500 rounded-[4rem] -z-20" />

              {/* Main Card Content */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 z-10 transition-shadow group-hover:shadow-lg w-full h-full flex flex-col justify-between">
                {/* Image Section */}
                <div className="relative h-[270px] sm:h-[313px] overflow-hidden shrink-0">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />

                  {/* Left Column Wrapper (ID + Logo) */}
                  <div className="absolute top-4 sm:top-6 left-5 sm:left-8 flex flex-col items-start gap-2 sm:gap-3 z-10">

                    {/* ID Badge */}
                    <span className="w-[36px] h-[36px] sm:w-[41px] sm:h-[41px] flex items-center justify-center border border-[#17A229] text-[#17A229] px-2 py-1 rounded-[8px] text-[16px] sm:text-[20px] font-medium bg-black/20 backdrop-blur-sm">
                      {study.id}
                    </span>

                    {/* Logo */}
                    <img
                      src={study.logo}
                      alt="Logo"
                      className={`object-left object-contain drop-shadow-lg ${study.id === '01' ? '-ml-[15px] h-[70px] sm:h-[86px] w-[180px] sm:w-[222px]' : study.id === '03' ? 'w-[180px] sm:w-[222px] h-[80px] sm:h-[100px]' : 'h-[70px] sm:h-[86px] w-[180px] sm:w-[222px]'
                        }`}
                    />
                  </div>

                  {/* Right Bottom Arrow */}
                  <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] absolute bottom-4 right-4 bg-white p-2.5 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="text-[#17A229] w-5 h-5 sm:w-[29px] sm:h-[29px]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col justify-between h-[300px] sm:h-[290px]">
                  <div>
                    <span className="inline-flex items-center text-[15px] sm:text-[19px] h-[28px] sm:h-[32px] text-[#28B023] border border-[#28B023] px-3 sm:px-4 py-0.5 rounded-full mb-3 sm:mb-4">
                      {study.category}
                    </span>

                    <div className="flex justify-between items-start gap-3 sm:gap-4">
                      {/* Title Section */}
                      <div className="mb-2">
                        <h3 className="text-[26px] sm:text-[30px] lg:text-[35px] font-semibold leading-tight">
                          {study.title.split(' ').slice(0, 2).join(' ')} <br className="hidden sm:block" />
                          <span className="text-[#1DC16A]">
                            {' '}{study.title.split(' ').slice(2).join(' ')}
                          </span>
                        </h3>
                      </div>
                      <div className="flex-shrink-0 bg-[#E1F5ED] w-[54px] h-[54px] sm:w-[67px] sm:h-[67px] p-2.5 sm:p-3 rounded-full flex items-center justify-center">
                        {study.icon}
                      </div>
                    </div>

                    <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed line-clamp-3 sm:line-clamp-none">{study.description}</p>
                  </div>

                  <a href="#" className="flex items-center  justify-between group mt-auto ">
                    {/* Text */}
                    <span className="text-gray-900 text-[16px] sm:text-[18px] font-semibold">View Case Study</span>

                    {/* Rounded Arrow Icon */}
                    <div className="border border-[#1DC16A] p-2 sm:p-2.5 rounded-full text-[#1DC16A] w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center shrink-0  ">
                      <ArrowRight className="text-[#17A229] w-5 h-5 sm:w-[29px] sm:h-[29px]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;