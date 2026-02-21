import { useState, useEffect } from "react";
import ArticleCard, { type Article } from "@/components/ArticleCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const researchArticles: Article[] = [
  {
    title: "Post-Earnings Announcement Drift (PEAD)",
    description:
      "Investigating the PEAD anomaly and return cyclicality around earnings releases, with an exploration of ML trading strategies.",
    imageUrl: "/articles/research/pead/preview_image.png",
    imageAlt: "PEAD Anomaly",
    date: "April 1, 2023",
    articleLink: "/articles/research/pead",
  },
  {
    title: "Financial Bubbles",
    description:
      "A framework for identifying financial bubbles using fundamental valuation metrics, debt levels, and IPO activity.",
    imageUrl: "/articles/research/financial-bubbles/preview_image.png",
    imageAlt: "Financial Bubbles",
    date: "March 10, 2023",
    articleLink: "/articles/research/financial-bubbles",
  },
  {
    title: "EPS Revision Breadth Analysis",
    description:
      "Identifying tops and bottoms in EPS Revision Breadth to distinguish periods of strong vs. weak equity returns.",
    imageUrl: "/articles/research/eps-revision/preview_image.jpeg",
    imageAlt: "EPS Revision Breadth",
    date: "February 5, 2023",
    articleLink: "/articles/research/eps-revision",
  },
  {
    title: "Bull vs. Bear",
    description:
      "Analyzing the bull and bear cases for U.S. equities amid rising interest rates, inflation, and valuation concerns.",
    imageUrl: "/articles/research/bull-vs-bear/preview_image.jpeg",
    imageAlt: "Bull vs Bear",
    date: "January 4, 2023",
    articleLink: "/articles/research/bull-vs-bear",
  },
  {
    title: "Weather & the Stock Market",
    description:
      "An investigation into whether weather conditions in New York have any noticeable impact on daily stock market returns.",
    imageUrl: "/articles/research/weather-markets/preview_image.webp",
    imageAlt: "Weather & Markets",
    date: "December 22, 2022",
    articleLink: "/articles/research/weather-markets",
  },
  {
    title: "Management Trading",
    description:
      "An investigation into whether following management trading can provide superior investment returns.",
    imageUrl: "/articles/research/management-trading/preview_image.jpeg",
    imageAlt: "Management Trading",
    date: "December 11, 2022",
    articleLink: "/articles/research/management-trading",
  },
  {
    title: "High Yield Debt vs. Equities",
    description:
      "Exploring the relationship between high yield credit spreads and equity market performance.",
    imageUrl: "/articles/research/high-yield/preview_image.jpeg",
    imageAlt: "High Yield Analysis",
    date: "November 28, 2022",
    articleLink: "/articles/research/high-yield",
  },
];

const thinkPadArticles: Article[] = [
  {
    title: "U.S. Immigration & Border Control",
    description:
      "A deep dive into current U.S. immigration policy from first principles, and my thoughts for improvements.",
    imageUrl: "/articles/thinkpad/immigration/preview_image.jpg",
    imageAlt: "U.S. Immigration & Border Control",
    date: "February 28, 2024",
    articleLink: "/articles/thinkpad/immigration",
    imageFit: "cover",
  },
];

const cardDirectionClasses = [
  // Left column: slide from left
  {
    start: "-translate-x-12 opacity-0 blur-md",
    end: "translate-x-0 opacity-100 blur-0",
  },
  // Center column: slide from bottom
  {
    start: "translate-y-12 opacity-0 blur-md",
    end: "translate-y-0 opacity-100 blur-0",
  },
  // Right column: slide from right
  {
    start: "translate-x-12 opacity-0 blur-md",
    end: "translate-x-0 opacity-100 blur-0",
  },
];

function CarouselArrow({ direction }: { direction: "prev" | "next" }) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  const isPrev = direction === "prev";
  const disabled = isPrev ? !canScrollPrev : !canScrollNext;

  return (
    <button
      onClick={isPrev ? scrollPrev : scrollNext}
      disabled={disabled}
      className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm px-3 flex items-center justify-center text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
    >
      {isPrev ? (
        <ChevronLeftIcon className="size-5" />
      ) : (
        <ChevronRightIcon className="size-5" />
      )}
    </button>
  );
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const CARDS_PER_PAGE = 6;

function ArticleCarousel({
  articles,
  loaded,
  entranceDone,
}: {
  articles: Article[];
  loaded: boolean;
  entranceDone: boolean;
}) {
  const pages = chunkArray(articles, CARDS_PER_PAGE);

  return (
    <Carousel opts={{ loop: true }}>
      <div className="flex gap-4 items-stretch p-8">
        <CarouselArrow direction="prev" />
        <div className="flex-1 min-w-0">
          <CarouselContent>
            {pages.map((chunk, pageIndex) => (
              <CarouselItem key={pageIndex}>
                <div className="group/cards grid grid-cols-3 gap-6">
                  {chunk.map((article, index) => {
                    const col = index % 3;
                    const direction = cardDirectionClasses[col];
                    const delay = `delay-${index * 200}`;
                    return (
                      <div
                        key={article.title}
                        className={`transition-all ease-out ${
                          entranceDone
                            ? "duration-300"
                            : `duration-1000 ${delay}`
                        } ${loaded ? direction.end : direction.start} ${
                          entranceDone
                            ? "group-hover/cards:blur-xs hover:!blur-none hover:scale-[1.02]"
                            : ""
                        }`}
                      >
                        <ArticleCard
                          article={article}
                          className="transition-colors duration-300 bg-background/80 border border-border hover:bg-muted"
                        />
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselArrow direction="next" />
      </div>
    </Carousel>
  );
}

function ArticleGrid({
  articles,
  loaded,
  entranceDone,
}: {
  articles: Article[];
  loaded: boolean;
  entranceDone: boolean;
}) {
  return (
    <div className="group/cards grid grid-cols-1 gap-6 md:grid-cols-2 p-8">
      {articles.map((article, index) => {
        const col = index % 3;
        const direction = cardDirectionClasses[col];
        const delay = `delay-${index * 200}`;
        return (
          <div
            key={article.title}
            className={`transition-all ease-out ${
              entranceDone ? "duration-300" : `duration-1000 ${delay}`
            } ${loaded ? direction.end : direction.start} ${
              entranceDone
                ? "group-hover/cards:blur-xs hover:!blur-none hover:scale-[1.02]"
                : ""
            }`}
          >
            <ArticleCard
              article={article}
              className="transition-colors duration-300 bg-background/80 border border-border hover:bg-muted"
            />
          </div>
        );
      })}
    </div>
  );
}

const ArticlesPage = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [loaded, setLoaded] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setEntranceDone(false);
    const frame = requestAnimationFrame(() => setLoaded(true));
    const timer = setTimeout(() => setEntranceDone(true), 2500);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [activeTab]);

  return (
    <div className="p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div
          className={`flex justify-center transition-all duration-1000 ease-out ${
            loaded
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-md -translate-y-6"
          }`}
        >
          <TabsList className="bg-background/80">
            <TabsTrigger value="research" className="text-lg data-active:text-primary data-active:border-primary">
              Research
            </TabsTrigger>
            <TabsTrigger value="think-pad" className="text-lg data-active:text-primary data-active:border-primary">
              Think Pad
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="research">
          {/* Plain grid for md and below */}
          <div className="lg:hidden">
            <ArticleGrid
              articles={researchArticles}
              loaded={loaded}
              entranceDone={entranceDone}
            />
          </div>
          {/* Carousel for lg and above */}
          <div className="hidden lg:block">
            <ArticleCarousel
              articles={researchArticles}
              loaded={loaded}
              entranceDone={entranceDone}
            />
          </div>
        </TabsContent>

        <TabsContent value="think-pad">
          <div
            className={`mx-auto max-w-3xl px-8 pt-8 pb-4 text-center transition-all duration-1000 ease-out ${
              loaded
                ? "opacity-100 blur-0 translate-y-0"
                : "opacity-0 blur-md translate-y-6"
            }`}
          >
            <div className="rounded-xl border border-border bg-background/80 p-6">
              <h2 className="text-xl font-semibold mb-3">
                Welcome to my Think Pad!
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The following page is intended as a personal drawing board to
                organize my thoughts about current events, the economy,
                politics, financial markets, and their impact on the current and
                future states of the world. Staying up-to-date with current
                world proceedings has always been a weakness of mine. As such,
                this will likely be a useful exercise for me.
              </p>
            </div>
          </div>
          {/* Plain grid for md and below */}
          <div className="lg:hidden">
            <ArticleGrid
              articles={thinkPadArticles}
              loaded={loaded}
              entranceDone={entranceDone}
            />
          </div>
          {/* Carousel for lg and above */}
          <div className="hidden lg:block">
            <ArticleCarousel
              articles={thinkPadArticles}
              loaded={loaded}
              entranceDone={entranceDone}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArticlesPage;
