import React, { useState, useEffect } from "react";

interface LearnMoreProps {
  id: number;
  image: string;
  title: string;
  // highlight: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

const SecondSlides: LearnMoreProps[] = [
  {
    id: 1,
    image: "/hero3.jpg",
    title: "OPERATION FEED YOUR NEIGHBOR",
    // highlight: "CHRIST JESUS",
    description:
      "Our greatest success story at Celebration Church has been the 'grace' to effectively evangelize, make disciples of, and deploy people who once upon a time were mere seekers, as mature disciples and vibrant ministers of the gospel.",
    primaryBtn: "LEARN MORE",
    secondaryBtn: "GET CONNECTED",
  },
  {
    id: 2,
    image: "/learnmore.jpeg",
    title: "MEDICAL OUTREACH",
    // highlight: "CHRIST JESUS",
    description:
      "Our greatest success story at Celebration Church has been the 'grace' to effectively evangelize, make disciples of, and deploy people who once upon a time were mere seekers, as mature disciples and vibrant ministers of the gospel.",
    primaryBtn: "LEARN MORE",
    secondaryBtn: "GET CONNECTED",
  },
  {
    id: 3,
    image: "/hero1.jpg",
    title: "HELPING THE NEEDY/WIDOWS",
    // highlight: "CHRIST JESUS",
    description:
      "Our greatest success story at Celebration Church has been the 'grace' to effectively evangelize, make disciples of, and deploy people who once upon a time were mere seekers, as mature disciples and vibrant ministers of the gospel.",
    primaryBtn: "LEARN MORE",
    secondaryBtn: "GET CONNECTED",
  },
  {
    id: 4,
    image: "/learnmore.jpeg",
    title: "WE BOAST IN",
    // highlight: "CHRIST JESUS",
    description:
      "Our greatest success story at Celebration Church has been the 'grace' to effectively evangelize, make disciples of, and deploy people who once upon a time were mere seekers, as mature disciples and vibrant ministers of the gospel.",
    primaryBtn: "LEARN MORE",
    secondaryBtn: "GET CONNECTED",
  },
];

const LearnMore: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SecondSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = SecondSlides[currentSlide];

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + SecondSlides.length) % SecondSlides.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SecondSlides.length);
  };

  return (
    <section className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={slide.image}
          alt="learn more image"
          className="h-full w-full object-center object-cover "
        />

        <div className="absolute inset-0 bg-black/70" />

        {/* Slide Content */}
        <div className="absolute bottom-8 left-0 z-10 w-full max-w-165 px-6 md:bottom-10 md:px-6">
          <h1 className="mb-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-6xl">
            {slide.title}
          </h1>

          <p className="mb-5 max-w-165 text-base leading-[1.6] text-white md:text-lg">
            {slide.description}
          </p>

          <button className="inline-flex items-center gap-3 rounded-full bg-[#f43f46] px-7 py-3 text-sm font-bold uppercase text-white transition hover:bg-red-600">
            {slide.primaryBtn}
            <span>→</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="absolute inset-x-6 top-1/2 z-20 flex -translate-y-1/2 justify-between">
          <button
            onClick={prevSlide}
            className="rounded-full bg-purple-200 px-4 py-2"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="rounded-full bg-purple-200 px-4 py-2"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
