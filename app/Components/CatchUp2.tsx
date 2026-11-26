import React from "react";

const highlights = [
  "Spirit-led worship.",
  "Sound biblical truth.",
  "Vibrant fellowship.",
  "Transformed lives.",
];

const CatchUp2: React.FC = () => {
  return (
    <section className="w-full bg-[#006ca5] px-6 py-20 font-sans md:px-12 lg:px-16">
      <div className="mx-auto grid w-full max-w-350 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-5">
        {/* Column 1: Heading, CTA & bottom photo */}
        <div className="flex flex-col justify-between gap-10 sm:col-span-2 lg:col-span-1 lg:gap-20">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[42px]">
              Missed Service?
              <br />
            </h2>
            {/* <p className="sm:text-2xl lg:text-[22px] ">
              Catch up on our powerful
              <br />
              <span className="text-red-500 sm:text-2xl lg:text-[32px]">
                Sermon
              </span>
            </p> */}

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white sm:text-base">
              Catch up on our powerful sermon. Timeless moments of praise, the
              Word, and fellowship that speak to the heart.
            </p>

            <a
              href="#sermons"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md shadow-[#006ca5]/20 transition-all duration-200 hover:scale-105 hover:bg-[#FF5A5F] hover:shadow-[#FF5A5F]/25 active:scale-95"
            >
              See the Services
            </a>
          </div>

          <div className="h-64 w-full overflow-hidden rounded-2xl shadow-sm lg:h-64">
            <img
              src="/service1.jpg"
              alt="Sunday worship service"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Column 2: Stepped down two-photo stack */}
        <div className="flex flex-col gap-5 lg:mt-32">
          <div className="h-64 w-full overflow-hidden rounded-2xl shadow-sm lg:h-72">
            <img
              src="/service2.jpg"
              alt="Congregation in praise"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="h-44 w-full overflow-hidden rounded-2xl shadow-sm lg:h-48">
            <img
              src="/service10.jpg"
              alt="Midweek fellowship"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Column 3: Slightly higher two-photo stack */}
        <div className="flex flex-col gap-5 lg:mt-16">
          <div className="h-56 w-full overflow-hidden rounded-2xl shadow-sm lg:h-60">
            <img
              src="/service8.jpg"
              alt="Word ministration"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="h-68 w-full overflow-hidden rounded-2xl shadow-sm lg:h-72">
            <img
              src="/service5.jpg"
              alt="Prayer and thanksgiving"
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Column 4: Highlight list & tall vertical photo */}
        <div className="flex flex-col gap-8 lg:mt-20">
          <ul className="flex flex-col gap-3 px-1">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-[#1A1A1A] sm:text-base"
              >
                <span className="font-bold text-[#FF5A5F]" aria-hidden="true">
                  ↗
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="h-72 w-full overflow-hidden rounded-2xl shadow-sm lg:h-80">
            <img
              src="/service3.jpg"
              alt="Church community gathering"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Column 5: Full-height three-photo stack */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <div className="h-44 w-full overflow-hidden rounded-2xl shadow-sm lg:h-44">
            <img
              src="/service9.jpg"
              alt="Choir and worship team"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="h-72 w-full overflow-hidden rounded-2xl shadow-sm lg:h-80">
            <img
              src="/service6.jpg"
              alt="Sunday celebration"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="h-40 w-full overflow-hidden rounded-2xl shadow-sm lg:h-40">
            <img
              src="/service4.jpg"
              alt="Builders Zone service"
              className="h-full w-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatchUp2;
