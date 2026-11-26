export default function Story() {
  return (
    <section className="flex-1 min-h-screen items-center bg-white px-6 py-35 sm:px-10 lg:px-16 border-t border-gray-300 ">
      <div className="relative aspect-square overflow-hidden rounded-[34px] border-[5px] border-lime-400 transition-transform duration-500 hover:scale-105">
        {/* put image */}
        <img
          src="/hero1.jpg"
          alt="Church testimony"
          className="h-full w-full object-cover"
        />
        {/* image purple background */}
        <div className="absolute inset-0 bg-purple-700/40" />
      </div>

      {/* Text Elements */}
      <div className="max-w-2xl mt-9 md:mt-13">
        <span className="rounded-full border border-lime-400 px-5 py-2 text-sm font-semibold text-black  md:text-xl">
          Testimonies
        </span>

        <h1 className="mt-8 text-[27px] font-extrabold leading-tight tracking-tight text-black md:text-[45px]">
          Share Your Story of God's Goodness
        </h1>

        <p className="mt-8 text-sm leading-relaxed text-black md:text-lg mb-3">
          Has God done something special in your life? Maybe it's a healing, a
          breakthrough, or an answered prayer. We'd love to hear your story and
          celebrate what God has done, whether you worship with us in person or
          online.
        </p>

        <a
          href="#share-testimony"
          className="mt-10 inline-flex items-center gap-6 rounded-xl bg-lime-400 px-8 py-5 text-sm font-semibold text-black transition-transform duration-500 hover:scale-105 hover:bg-lime-500 md:text-lg"
        >
          Share Your Testimony <span aria-hidden="true">"›"</span>
        </a>
      </div>
    </section>
  );
}
