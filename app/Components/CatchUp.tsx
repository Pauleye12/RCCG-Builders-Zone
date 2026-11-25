const CatchUp = () => {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-[#006ca5] px-6 py-16 lg:px-10 md:flex-row">
      {/* Left: text */}
      <div className="flex flex-col items-start justify-center gap-6 py-12 md:w-1/2 lg:py-20">
        <span className="inline-block rounded-full border border-[#c4d600] px-6 py-3 text-sm text-white sm:text-base">
          Missed Service?
        </span>

        <h2 className="max-w-[12ch] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-7xl">
          Catch up on our powerful
          <span className="mt-3 block w-fit rotate-[-4deg] bg-[#c4d600] px-8 py-3 text-[#006ca5] italic">
            Sermons
          </span>
        </h2>
      </div>

      {/* Right: image */}
      <div className="relative my-10 aspect-4/5 w-full max-w-105 -rotate-6 overflow-hidden rounded-[50%] md:w-1/2 md:max-w-none lg:aspect-4/3">
        <img
          src="/hero3.jpg"
          alt="catch up image"
          className="absolute inset-0 h-full w-full rotate-6 scale-125 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default CatchUp;
