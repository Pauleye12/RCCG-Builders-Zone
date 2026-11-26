import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="w-full min-w-0 bg-white px-6 py-10  md:px-20 md:py-20 flex justify-center items-center ">
      <div className="w-full max-w-300 ">
        <div className="grid w-full grid-cols-1  gap-10 md:grid-cols-2 md:gap-0">
          {/* Left column */}
          <div className="flex flex-col justify-center  gap-5 lg:gap-25 py-9 sm:py-8 md:min-h-105 md:py-0 md:pr-8 lg:min-h-130 lg:pr-10">
            <h1 className="mt-1 text-4xl text-center lg:text-left font-bold leading-[0.95] tracking-tighter text-black md:text-[55px]">
              Welcome Home
            </h1>

            <p className="lg:mt-6 max-w-100 lg:pt-2 pl-0.5 text-base lg:text-left leading-loose text-neutral-900 sm:text-lg md:mb-6 md:mt-0 text-center ">
              We Welcome you to our parish, We love Jesus and we love people.
              We&apos;d love to see you here soon! feel free to check through
              our website, join our services online and pay us a visit.
            </p>
          </div>

          {/* Right column: Image */}
          <div className="mt-2 w-full md:mt-0 md:flex md:items-stretch md:justify-end">
            <img
              src="/hero3.jpg"
              alt="SOUL Church"
              className="h-70 w-full rounded-tl-[120px] rounded-br-[40px] object-cover sm:h-87.5 sm:rounded-tl-[150px] md:h-full md:max-h-100 md:rounded-tl-[170px] md:rounded-br-[48px] lg:max-h-110 lg:rounded-tl-[220px] lg:rounded-br-[56px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
