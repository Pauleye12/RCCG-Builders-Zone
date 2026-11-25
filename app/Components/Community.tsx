import React from "react";

const communityItems = [
  {
    image: "/hero1.jpg",
    title: "Membership Classes",
    description:
      "Our Membership Classes get you up to speed with accurate scripture-based teachings designed to create a strong bedrock for your spiritual growth.",
  },
  {
    image: "/hero2.jpg",
    title: "Celebrations",
    description:
      "You are the answer to our prayers, so we celebrate you every day, especially on your special days. You mean that much to us.",
  },
  {
    image: "/hero3.jpg",
    title: "Counselling",
    description:
      "Need counsel? There is always someone available to pray with you and provide sound biblical counsel with zero judgment.",
  },
];

const Community: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-7 lg:px-9">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        {/* Badge */}
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <span className="text-sm">🌍</span>
          <span className="text-xs font-bold tracking-[2px] text-gray-800">
            COMMUNITY
          </span>
        </div>

        <h1 className="text-2xl font-black leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-6xl">
          We do community differently
          <br />
          at <span className="text-[#ed4655]">Celebration Church</span>
        </h1>

        <p className="mt-6 text-[12px] text-gray-500 md:text-base lg:text-xl">
          More than a church, a place to grow
        </p>
      </div>

      {/* Community Cards */}
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {communityItems.map((item, index) => (
          <div key={index} className="w-full">
            {/* Image */}
            <div className="h-60 w-full overflow-hidden rounded-xl sm:h-67.5">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-xl font-bold text-black transition-colors hover:text-[#ed4655]"
            >
              {item.title}
              <span className="text-2xl">→</span>
            </a>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.6] text-gray-600 md:text-base lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
