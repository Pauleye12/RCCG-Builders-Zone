import React from "react";

const LeadPastor: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto grid max-sm:h-250 pt-4 min-h-screen w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Image Section - Reserved */}
        <div className="relative min-h-75 w-full lg:min-h-screen pt-5">
          {/* Image Section */}
          <div className="flex min-h-122.5 w-full items-center justify-center lg:min-h-screen">
            <img
              src="/hero1.jpg"
              alt="Lead Pastor"
              className="mx-auto h-75 w-75 rounded-full object-cover  sm:h-100 sm:w-100 lg:h-125 lg:w-125 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col items-center px-6 py-16 text-center sm:px-12 lg:px-16 xl:px-24 pt-5">
          {/* Logo */}
          <div className="mb-7 flex flex-col items-center">
            <span className="text-6xl leading-[0.7] font-light text-red-600">
              ∞
            </span>
            <span className="mt-2 text-[10px] font-bold tracking-[2px]">
              GLOBAL
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-[3px] sm:text-4xl">
            Our Lead Pastor
          </h2>

          {/* Description */}
          <p className="mb-9 max-w-117.5 text-sm leading-[1.8] text-white md:text-lg lg:text-lg">
            Apostle Emmanuel Iren is the visionary founder and lead pastor of
            Celebration Church International, a dynamic teaching ministry
            dedicated to spreading the gospel and helping people discover their
            purpose in Christ. With a passion for the Word of God and a heart
            for missions, Apostle Iren has led the church to establish Over 30
            campuses across Nigeria, North America, and the UK, all while
            inspiring countless lives to grow in their faith and embrace the
            life-changing power of Christ.
          </p>

          {/* Read More Button */}
          <button className="rounded-full border border-white px-7 py-3 text-sm font-bold uppercase transition duration-300 hover:bg-white hover:text-black">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadPastor;
