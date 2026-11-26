import React, { useState, useEffect } from "react";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Campuses", href: "#campuses" },
  { label: "Sermons", href: "#sermons" },
  { label: "Give", href: "#give" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-300 ease-out flex items-center justify-between ${
          isScrolled
            ? "top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60"
            : "top-0 left-0 right-0 w-full px-6 sm:px-12 py-5 sm:py-6 bg-linear-to-b from-black/80 via-black/30 to-transparent border-transparent"
        }`}
      >
        {/* Left: Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 z-10"
        >
          <img
            src="/logo.png"
            alt="RCCG Builders"
            className={`w-auto object-contain transition-all duration-300 drop-shadow ${
              isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"
            }`}
          />
          <div className="flex flex-col leading-none">
            <span className="font-extrabold tracking-wider text-xs sm:text-sm uppercase text-white group-hover:text-neutral-200 transition-colors">
              RCCG BUILDERS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-[#FF5A5F] uppercase font-bold">
              ZONE
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links (Centered) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA Button ("Watch Live") */}
        <div className="hidden md:flex items-center shrink-0 z-10">
          <a
            href="#watch-live"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#FF5A5F] hover:bg-[#e44d52] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#FF5A5F]/25 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Watch Live
          </a>
        </div>

        {/* Mobile: Hamburger and optional quick action */}
        <div className="flex items-center gap-3 md:hidden z-10">
          <a
            href="#watch-live"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5A5F] text-white text-[11px] font-bold tracking-wider uppercase shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            Live
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 sm:p-2 text-white hover:text-neutral-300 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-7 text-base font-bold uppercase tracking-widest text-neutral-200 md:hidden animate-in fade-in duration-200">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#FF5A5F] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#FF5A5F] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Watch Live in Mobile Menu */}
          <a
            href="#watch-live"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FF5A5F] text-white text-sm font-extrabold tracking-widest hover:bg-[#e44d52] transition-all shadow-lg shadow-[#FF5A5F]/30"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Watch Live
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
