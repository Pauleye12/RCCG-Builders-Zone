import React from "react";

const AboutUs = () => {
  return (
    <section className="  w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Circular Image with Decorative Swoosh/Ring */}
        <div className="relative flex justify-center items-center">
          {/* Outer Decorative Ring / Crescent */}
          <div className="relative w-[320px] h-[350px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center">
            {/* Light blue-gray circular ring & swoosh SVG */}
            <svg
              viewBox="0 0 500 500"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main soft outer circle */}
              <circle
                cx="260"
                cy="265"
                r="210"
                stroke="#EDF2F6"
                strokeWidth="55"
              />
              {/* Top-left decorative swoosh accent */}
              <path
                d="M115 45 C 45 120, 35 230, 75 320 C 55 220, 75 125, 130 60 Z"
                fill="#EDF2F6"
              />
            </svg>

            {/* Circular Masked Photo */}
            <div className="relative z-10 w-[275px] h-[275px] sm:w-[360px] sm:h-[360px] md:w-[395px] md:h-[395px] rounded-full overflow-hidden shadow-sm translate-x-2 translate-y-3">
              <img
                src="/hero2.jpg"
                alt="Pastor speaking at The Elevation Church"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="mb-[-15px] flex flex-col items-start text-left max-w-xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B5D334] bg-[#F9FCEF] mb-6">
            <span className="text-[11px] font-medium text-[#2A3B47] tracking-wide">
              Who We Are
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-6">
            Welcome To <br />
            The Elevation Church,{" "}
            <span className="bg-gradient-to-r from-[#0066A1] via-[#348F6C] to-[#98C93C] bg-clip-text text-transparent">
              TEC
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#4A5568] text-base sm:text-[17px] leading-[1.7] mb-8">
            We are not just a ministry, but a global movement dedicated to
            empowering individuals with the transformative power of biblical
            wisdom and practical principles. With a forward-thinking approach,
            we aim to equip our diverse community with the tools they need to
            achieve{" "}
            <span className="font-semibold text-[#0066A1]">
              greatness in every aspect of their lives.
            </span>
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-[#333333] text-[#1A1A1A] text-sm font-medium transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white"
          >
            <span className="text-[14px]">Learn More</span>
            <svg
              className="w-2.5 h-2.5 fill-current transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L6 5L0 10V0Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
