import React, { useState, useEffect, useRef, useCallback } from "react";

interface SlideData {
  id: number;
  image: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "WE ENVISION ALL MEN CELEBRATING ENDLESS",
    highlight: "LIFE IN CHRIST",
    description:
      "A vibrant community of believers walking together in faith, empowered to celebrate God's endless love and grace every day.",
    primaryBtn: "WATCH LIVE",
    secondaryBtn: "QUICK LINKS",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "EXPERIENCE GOD'S LOVE & POWER IN EVERY",
    highlight: "FELLOWSHIP",
    description:
      "Join us for uplifting worship, transformative teachings, and authentic fellowship where you and your family can truly belong.",
    primaryBtn: "JOIN A SERVICE",
    secondaryBtn: "FIND A CAMPUS",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "RAISING KINGDOM AMBASSADORS FOR",
    highlight: "GLOBAL IMPACT",
    description:
      "Equipping and sending out passionate leaders to shine the light of truth and make a lasting difference across nations.",
    primaryBtn: "OUR MINISTRIES",
    secondaryBtn: "GET CONNECTED",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      className="relative w-full h-screen min-h-160 max-h-270 bg-black text-white overflow-hidden select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Track: Images & Text sliding together */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-w-full w-full h-full flex items-center justify-center shrink-0 overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              draggable={false}
            />

            {/* Gradient Overlays: Top, Bottom, Vignette, and Color Accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />

            {/* Slide Content Box */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 max-w-5xl mx-auto pt-20 sm:pt-24 pb-16">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.12] drop-shadow-lg">
                {slide.title}{" "}
                <span className="text-[#FF5A5F] block sm:inline">
                  {slide.highlight}
                </span>
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed drop-shadow">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  className="px-7 py-3 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
                >
                  {slide.primaryBtn}
                </button>
                <button
                  type="button"
                  className="px-7 py-3 rounded-full bg-transparent text-white border border-white/80 font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/15 hover:border-white hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer"
                >
                  {slide.secondaryBtn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
