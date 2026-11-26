import React from "react";

const LeadPastor: React.FC = () => {
  return (
    <section className="w-full bg-black text-white flex justify-center items-center md:px-20 md:py-30 py-20 ">
      <div className="max-w-300 gap-10 lg:md-20   w-full  items-center flex justify-between flex-col md:flex-row ">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="/Pastor.jpg"
            alt="Lead Pastor"
            className="  rounded-full object-cover w-full lg:max-w-125 max-w-70 aspect-square "
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col items-center md:w-[45%] px-6 py-16 text-center  pt-5">
          {/* Logo */}

          {/* Heading */}
          <h2 className="lg:mb-6 mb-3  text-2xl font-extrabold uppercase text-[#FF5A5F] tracking-[3px] sm:text-4xl">
            Our Lead Pastor
          </h2>

          {/* Description */}
          <p className="mb-9  text-sm leading-[1.8] text-white md:text-lg lg:text-lg">
            Pastor Lanre Awoyemi is the pastor in charge of RCCG Builders zone,
            a dynamic teaching ministry dedicated to spreading the gospel and
            helping people discover their purpose in Christ. With a passion for
            the Word of God and a heart for missions, Apostle Iren has led the
            church to establish Over 30 campuses across Nigeria, North America,
            and the UK, all while inspiring countless lives to grow in their
            faith and embrace the life-changing power of Christ.
          </p>

          {/* Read More Button */}
          <button className="rounded-full border border-white px-7 py-3 text-sm font-bold uppercase transition duration-300 hover:bg-white hover:text-black cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadPastor;
