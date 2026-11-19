import React from "react";

const LearnMore: React.FC = () => {
  return (
    <section>
      <div className="relative w-screen h-screen ">
        <img
          src="/learnmore.jpeg"
          alt="learn more image"
          className="h-full w-full object-fill"
        />

        <div className="absolute bottom-8 left-6 z-10 w-full max-w-[660px] px-6 md:bottom-10 md:left-[7%] md:px-0">
          <h1 className="mb-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-6xl">
            WE BOAST IN
            <br />
            CHRIST JESUS
          </h1>

          <p className="mb-5 max-w-[660px] text-base leading-[1.6] text-white md:text-lg">
            Our greatest success story at Celebration Church has been the
            'grace' to effectively evangelize, make disciples of, and deploy
            people who once upon a time were mere seekers, as mature disciples
            and vibrant ministers of the gospel.
          </p>

          <button className="inline-flex items-center gap-3 rounded-full bg-[#f43f46] px-7 py-3 text-sm font-bold uppercase text-white transition hover:bg-red-600">
            LEARN MORE
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
