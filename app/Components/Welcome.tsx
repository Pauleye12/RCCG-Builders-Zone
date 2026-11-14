import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="bg-[#ece5db] pb-2 pt-2">
      {/* White rounded card */}
      <div className="overflow-hidden rounded-b-[48px] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pl-6 md:grid-cols-2 md:gap-0 md:pl-[100px]">
          {/* Left column */}
          <div className="flex flex-col justify-between py-10 md:min-h-[550px] md:py-0 md:pr-10 mb-7">
            <h1 className="text-6xl font-medium leading-[0.95] tracking-tight text-black md:text-[88px]">
              WELCOME
              <br />
              Home
            </h1>

            <p className="mt-2 pt-7  max-w-[420px] text-lg leading-[2.3] text-neutral-900 md:mb-8 md:mt-0">
              SOUL Church is a vibrant and friendly church in the beautiful city
              of Norwich. We love Jesus and we love people. We&apos;d love to
              see you here soon!
            </p>
          </div>

          {/* Right column: image with custom corner radii */}
          <div className="md:flex md:items-stretch md:justify-end mt-1 mr-1">
            <img
              src="/hero3.jpg"
              alt=""
              className="h-[320px] w-full rounded-tl-[160px] rounded-br-[48px] object-cover md:h-full md:max-h-[500px] md:rounded-tl-[220px] md:rounded-br-[56px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
