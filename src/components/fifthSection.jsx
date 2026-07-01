import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import personPhoto from '../assets/fifthSection.png';
import emiratesLogo from '../assets/Group 132.png';
import microsoftLogo from '../assets/microsoftLogo.png';
import lexusLogo from '../assets/Logo (2).png';
import jcpenneyLogo from '../assets/jcpenneyLogo.png';
import safewayLogo from '../assets/safewayLogo.png';
import pepsicoLogo from '../assets/pepsicoLogo.png';
import citibankLogo from '../assets/citibankLogo.png';
import nutrienLogo from '../assets/nutrienLogo.png';

// Layer logo assets (W:110 H:49 as per Figma)
import layer4  from '../assets/Layer 4 2.png';
import layer6  from '../assets/Layer 6 2.png';
import layer7  from '../assets/Layer 7 2.png';
import layer11 from '../assets/Layer 11 2.png';
import layer12 from '../assets/Layer 12 2.png';

// Exactly 7 cards — no repeat
const testimonials = [
  {
    logo: layer4,
    logoAlt: 'PepsiCo',
    text: 'Number9 consistently delivered impactful activations that strengthened consumer engagement and elevated our brand presence across multiple markets.',
  },
  {
    logo: layer7,
    logoAlt: 'Lexus',
    text: 'From concept to execution, the team brought creativity, precision, and measurable results that exceeded expectations.',
  },
  {
    logo: layer6,
    logoAlt: 'Citibank',
    text: 'Their ability to combine strategy, technology, and customer experience helped us deliver meaningful outcomes at scale.',
  },
  {
    logo: layer11,
    logoAlt: 'Safeway',
    text: 'Number9 became an extension of our team, providing reliable execution and innovative solutions across retail initiatives.',
  },
  {
    logo: layer12,
    logoAlt: 'Emirates',
    text: 'Professional, responsive, and highly collaborative. Their campaigns consistently delivered strong brand impact and customer engagement.',
  },
  {
    logo: layer4,
    logoAlt: 'Microsoft',
    text: 'Their digital strategy and execution helped us accelerate enterprise adoption and expand reach across key markets globally.',
  },
  {
    logo: layer6,
    logoAlt: 'Nutrien',
    text: 'Number9 delivered a comprehensive brand activation strategy that resonated deeply with our agricultural and retail audiences.',
  },
];

// Card dimensions set by user
const CARD_W = 341;
const CARD_H = 449;
const CARD_GAP = 20;

function CircularText({ text, radius, fontSize, color }) {
  const chars = text.split('');
  const angleStep = 360 / chars.length;
  return (
    <div className="relative w-full h-full animate-spin-slow">
      {chars.map((char, i) => {
        const angle = i * angleStep;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.sin(rad);
        const y = 50 - radius * Math.cos(rad);
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              fontSize,
              color,
              fontWeight: 500,
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

const clientGrid = [
  { logo: microsoftLogo, logoAlt: 'Microsoft', logoClass: 'h-6',  title: 'Global Technology Leader',    desc: 'Cloud, AI & Enterprise Solutions' },
  { logo: emiratesLogo,  logoAlt: 'Emirates',  logoClass: 'h-9',  title: 'World-Class Airline Brand',    desc: 'Premium Travel & Customer Experience' },
  { logo: lexusLogo,     logoAlt: 'Lexus',     logoClass: 'h-5',  title: 'Luxury Automotive Excellence', desc: 'Premium Customer Experience & Innovation' },
  { logo: jcpenneyLogo,  logoAlt: 'JCPenney',  logoClass: 'h-6',  title: 'Leading Retail Brand',         desc: 'Omnichannel Commerce & Customer Engagement' },
  { logo: safewayLogo,   logoAlt: 'Safeway',   logoClass: 'h-6',  title: 'Trusted Grocery Retailer',     desc: 'Retail Marketing & Consumer Activation' },
  { logo: pepsicoLogo,   logoAlt: 'PepsiCo',   logoClass: 'h-6',  title: 'Global Consumer Goods Leader', desc: 'Brand Activation & Shopper Marketing' },
];

// How many cards fit in viewport at once (approx)
// We show cards starting from offset 0; last valid offset = total - visibleAtOnce
// Use window width to calc, but for SSR-safety default to 3 visible
function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  return Math.max(1, Math.floor(window.innerWidth / (CARD_W + CARD_GAP)));
}

export default function FifthSection() {
  const [offset, setOffset] = useState(0);

  // Max offset: last card should be the rightmost visible card, not go further
  const visibleCount = getVisibleCount();
  const maxOffset = Math.max(0, testimonials.length - visibleCount);

  const canPrev = offset > 0;
  const canNext = offset < maxOffset;

  const prev = () => { if (canPrev) setOffset((p) => p - 1); };
  const next = () => { if (canNext) setOffset((p) => p + 1); };

  return (
    <section className="w-full bg-white font-outfit overflow-hidden">

      {/* ══ TOP AREA ══ */}
      <div className="relative w-full">

        <div className="flex flex-col lg:flex-row">

          {/* LEFT — Photo: user-set w-[627px] h-[1271px], border-radius */}
          <div className="shrink-0 w-full lg:w-[627px]">
            <img
              src={personPhoto}
              alt="Team"
              className="w-full lg:w-[627px] object-cover object-top rounded-2xl"
              style={{ height: '1271px' }}
            />
          </div>

          {/* RIGHT — Heading + desc + button */}
          <div className="flex-1  flex flex-col justify-start pt-10 sm:pt-14 px-6 sm:px-10 lg:pl-12 xl:pl-16 pb-6">
            <h2 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold  leading-[1.3] max-w-[900px]">
              We've helped brands connect, engage, and grow.{' '}
              Trusted by industry leaders across North America.
            </h2>
            <p className="text-slate-500 text-[14px] sm:text-[20px] leading-relaxed mt-5 max-w-[800px]">
              20+ years of experience delivering brand activation, digital strategy, creative campaigns,
              and technology solutions for leading organizations.
            </p>
            <button className="group flex items-center gap-2 font-medium text-[14px] sm:text-[20px] text-slate-900 border-b border-slate-400 pb-1 w-fit hover:text-[#11C911] hover:border-[#11C911] transition-colors duration-300 mt-6">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ══ CARDS ROW — absolute, overlaps photo bottom ══ */}
        <div className="w-full   py-2 lg:absolute  lg:bottom-50 lg:left-0">

          <div className=" w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out px-4 lg:px-0"
              style={{
                gap: `55px`,
                transform: `translateX(calc(-${offset * (CARD_W + CARD_GAP)}px))`,
              }}
            >
             
              {testimonials.map((t, i) => (
                <div
                  key={i}
                className="shrink-0 bg-white border border-slate-100 rounded-2xl flex flex-col  justify-between cursor-pointer transition-all duration-300 hover:-translate-z-2 shadow-md hover:shadow-xl"
  style={{
    width: `341px`,
    height: `449px`,
    padding: '28px 28px 24px 28px',
    // boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
  }}
                  // onMouseEnter={e => {
                  //   e.currentTarget.style.transform = 'translateY(-6px)';
                  //   e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(0,0,0,0.16)';
                  // }}
                  // onMouseLeave={e => {
                  //   e.currentTarget.style.transform = 'translateY(0px)';
                  //   e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(0,0,0,0.08)';
                  // }}
                >
                  {/* Logo — W:110 H:49 as per Figma */}
                  <div>
                    <img
                      src={t.logo}
                      alt={t.logoAlt}
                      style={{ width: '110px', height: '49px', objectFit: 'contain', objectPosition: 'left center' }}
                      className="mb-5"
                    />
                    {/* Text — sized for 341×449 card */}
                    <p className="text-[20px] leading-[1.5]">{t.text}</p>
                  </div>
                  <button className="text-[20px] text-left hover:underline w-fit mt-4">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows — centered, both green, disabled = no pointer events */}
          <div className="flex items-center justify-center gap-4 mt-5 pb-5">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`w-[44px] h-[44px] rounded-full border flex items-center justify-center transition-colors
                ${canPrev
                  ? 'border-[#11C911] text-[#11C911] hover:bg-[#11C911] hover:text-white cursor-pointer'
                  : 'border-[#11C911]/30 text-[#11C911]/30 cursor-not-allowed'
                }`}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={`w-[44px] h-[44px] rounded-full border flex items-center justify-center transition-colors
                ${canNext
                  ? 'border-[#11C911] text-[#11C911] hover:bg-[#11C911] hover:text-white cursor-pointer'
                  : 'border-[#11C911]/30 text-[#11C911]/30 cursor-not-allowed'
                }`}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* ══ BLACK BOX ══ */}
      {/* User-set: w-[1494px] h-[932px] mx-auto, overlaps photo with -mt */}
      <div
        className="mx-auto relative z-10 px-4 lg:px-0"
        style={{ width: 'min(1494px, 100%)', marginTop: '-80px' }}
      >
        <div
          className="bg-[#0D0D0D] rounded-[24px] w-full"
          style={{ height: '932px', padding: '52px 56px' }}
        >
          <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-10 xl:gap-14">

            {/* LEFT — text block */}
            <div className="flex flex-col justify-between shrink-0 lg:w-[280px] xl:w-[320px]">
              <div>
                <p className="text-slate-500 text-[11px] tracking-[0.18em] uppercase mb-4">Our Awards</p>
                <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold leading-[1.25] text-white">
                  <span className="text-[#11C911]">Excellence.</span>
                  <br />
                  Our minimum bar
                  <br />
                  for client delivery
                  <span className="text-[#F25C22]">.</span>
                </h3>
                <p className="text-slate-400 text-[13px] leading-relaxed mt-5 max-w-[260px]">
                  Over 130 awards, accolades, and achievements showcase our quality and commitment to client success.
                </p>
              </div>
              <button className="group flex items-center gap-2 text-[#11C911] text-[13px] font-medium border-b border-[#11C911]/40 pb-1 w-fit hover:border-[#11C911] transition-colors">
                View Our Awards
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* CENTER — 2 rotating circles */}
            <div className="flex flex-col items-center justify-center gap-10 lg:flex-1">
              {[
                { stat: '1,250+', label: 'projects\ndelivered' },
                { stat: '130+',   label: 'Industry\nsectors'   },
              ].map(({ stat, label }, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-center"
                  style={{ width: '200px', height: '200px' }}
                >
                  {/* Rotating outer text */}
                  <div className="absolute inset-0">
                    <CircularText
                      text="Accomplished · Projects · Delivered · "
                      radius={44}
                      fontSize="10px"
                      color="rgba(255,255,255,0.3)"
                    />
                  </div>
                  {/* Inner circle */}
                  <div className="relative z-10 flex flex-col items-center justify-center w-[110px] h-[110px] rounded-full border border-white/15 bg-white/5">
                    <span className="text-white text-[28px] font-bold leading-none">{stat}</span>
                    <span className="text-slate-400 text-[11px] mt-1.5 text-center leading-tight whitespace-pre-line">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — client logos 2×3 grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 lg:flex-1 content-center">
              {clientGrid.map((c, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <img
                    src={c.logo}
                    alt={c.logoAlt}
                    className={`${c.logoClass} w-auto object-contain object-left brightness-0 invert opacity-90`}
                  />
                  <p className="text-slate-300 text-[12px] font-semibold leading-tight mt-2">{c.title}</p>
                  <p className="text-slate-500 text-[11px] leading-tight">{c.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
