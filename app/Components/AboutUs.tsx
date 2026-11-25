import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white px-6 py-16 font-sans md:px-7">
      <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row md:gap-8 lg:gap-24">
        {/* Left column: circular image */}
        <div className="relative flex w-full min-w-0 items-center justify-center md:w-1/2 md:justify-start">
          <div className="relative flex aspect-square w-full max-w-[320px] items-center justify-center sm:max-w-105 md:max-w-115">
            {/* Decorative ring and swoosh */}
            <svg
              viewBox="0 0 500 500"
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="250"
                cy="264"
                r="210"
                stroke="#EDF2F6"
                strokeWidth="55"
              />
              <path
                d="M115 45 C 45 120, 35 230, 75 320 C 55 220, 75 125, 130 60 Z"
                fill="#EDF2F6"
              />
            </svg>

            {/* Circular photo */}
            <div className="relative z-10 h-[86%] w-[86%] translate-y-3 overflow-hidden rounded-full shadow-sm">
              <img
                src="/hero2.jpg"
                alt="Pastor speaking at The Elevation Church"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right column: content */}
        <div className="flex w-full min-w-0 max-w-xl flex-col items-start text-left md:w-1/2">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#B5D334] bg-[#F9FCEF] px-4 py-1.5">
            <span className="text-[11px] font-medium tracking-wide text-[#2A3B47]">
              Who We Are
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-[1.2] tracking-tight text-[#1A1A1A] sm:text-4xl md:text-3xl lg:text-[42px]">
            Welcome To
            <br />
            The Elevation Church,{" "}
            <span className="bg-linear-to-r from-[#0066A1] via-[#348F6C] to-[#98C93C] bg-clip-text text-transparent">
              TEC
            </span>
          </h2>

          <p className="mb-8 text-base leading-[1.7] text-[#4A5568] sm:text-[17px] md:text-base lg:text-[17px]">
            We are not just a ministry, but a global movement dedicated to
            empowering individuals with the transformative power of biblical
            wisdom and practical principles. With a forward-thinking approach,
            we aim to equip our diverse community with the tools they need to
            achieve{" "}
            <span className="font-semibold text-[#0066A1]">
              greatness in every aspect of their lives.
            </span>
          </p>

          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-lg border border-[#333333] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white"
          >
            <span className="text-[14px] cursor-pointer">Learn More</span>
            <svg
              className="h-2.5 w-2.5 fill-current transition-transform duration-200 group-hover:translate-x-1"
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
