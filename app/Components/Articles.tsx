import React from "react";

type Article = {
  id: number;
  category: string;
  title: string;
  texts: string;
  image: string;
  href: string;
};

const articles: Article[] = [
  {
    id: 1,
    category: "Press",
    title:
      "Exponential Conference 2026 Wraps 10th Edition On Authentic Leadership",
    texts:
      "The 10th edition of Exponential Conference concluded on Wednesday, February 25, 2026, at the Pistis Conference Centre Lekki, marking…",
    image: "/hero1.jpg",
    href: "#",
  },
  {
    id: 2,
    category: "Press",
    title: "TEC At 15",
    texts:
      "The Elevation Church celebrates 15 years of impact and will hold its ‘Made for More’ conference. The church has commenced its 15th anniversary celebrations, marking…",
    image: "/hero2.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "Confessions",
    title: "DIVINE HEALTH CONFESSION",
    texts:
      "This is the day the Lord has made. It is a day of rejoicing, gladness, and wholeness for me! I am born of God, filled with His Spirit, and governed by His life…",
    image: "/hero3.jpg",
    href: "#",
  },
];

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <section className="flex h-full flex-col rounded-[28px] border border-[#d7e4f1] bg-white p-5 shadow-sm sm:p-8 transition-transform duration-500 hover:scale-105">
      <div className="aspect-[1.58/1] w-full overflow-hidden rounded-[22px] bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <span className="mt-8 inline-flex w-fit rounded-full bg-[#eef4fd] px-5 py-2 text-sm text-slate-800">
        {article.category}
      </span>

      <h2 className="mt-6 text-lg font-bold leading-tight text-[#202020] sm:text-[30px]">
        {article.title}
      </h2>

      <p className="mt-6 line-clamp-3 text-sm leading-6 text-[#555] sm:text-sm">
        {article.texts}
      </p>

      <a
        href={article.href}
        className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-base md:text-lg font-medium text-[#222] transition-colors hover:text-[#ed4655]"
      >
        Read More →
      </a>
    </section>
  );
};

const LatestArticles: React.FC = () => {
  return (
    <section className="bg-[#eff5ff] px-5 py-24 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-360]">
        <header>
          <span className="inline-block rounded-full border border-lime-300 px-6 py-3 text-sm text-black sm:text-base">
            From Our Blog
          </span>

          <h1 className="mt-10 text-5xl font-bold tracking-tight text-[#202020] sm:text-7xl">
            Latest Articles
          </h1>

          <p className="mt-6 max-w-5xl text-sm leading-relaxed text-[#222] md:text-[23px]">
            Explore stories, insights, and inspiration from The Elevation Church
            community.
          </p>
        </header>

        <div className="mt-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
