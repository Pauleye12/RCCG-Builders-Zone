import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="w-full min-w-0 bg-white pb-6 pt-4">
      {/* White rounded card */}
      <div className="w-full">
        <div className="grid w-full grid-cols-1 gap-10 pl-6 md:grid-cols-2 md:gap-0 md:pl-17.5">
          {/* Left column */}

          <div className="flex flex-col justify-between py-6 sm:py-8 md:min-h-105 md:py-0 md:pr-8 lg:min-h-130 lg:pr-10">
            <h1 className="mt-1 text-5xl font-bold leading-[0.95] tracking-tighter text-black sm:text-6xl md:text-6xl lg:text-[88px]">
              Welcome
              <br />
              Home
            </h1>

            <p className="mt-6 max-w-75 pt-2 text-base leading-[2] text-neutral-900 sm:text-lg md:mb-6 md:mt-0">
              SOUL Church is a vibrant and friendly church in the beautiful city
              of Norwich. We love Jesus and we love people. We&apos;d love to
              see you here soon!
            </p>
          </div>

          {/* Right column: Image */}

          <div className="mt-2 w-full pr-7 md:mt-0 md:flex md:items-stretch md:justify-end">
            <img
              src="/hero3.jpg"
              alt="SOUL Church"
              className="h-70 w-full rounded-tl-[120px] rounded-br-[40px] object-cover sm:h-87.5 sm:rounded-tl-[150px] md:h-full md:max-h-105 md:rounded-tl-[170px] md:rounded-br-[48px] lg:max-h-125 lg:rounded-tl-[220px] lg:rounded-br-[56px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
