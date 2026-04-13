import { type ReactNode, useState, useEffect } from "react";
import { GithubIcon } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const roleModels: { name: string; description: ReactNode }[] = [
  {
    name: "Eric A. Posner & E. Glen Weyl",
    description: (
      <>
        Their book{" "}
        <em>
          Radical Markets: Uprooting Capitalism & Democracy for a Just Society
        </em>{" "}
        is one of the most prescient works I've read. It challenges fundamental
        assumptions about property and democracy with concrete, actionable
        mechanisms — like quadratic voting and common ownership self-assessed
        tax — that could meaningfully reduce inequality and strengthen
        collective decision-making.
      </>
    ),
  },
  {
    name: "Ray Dalio",
    description:
      "Ray Dalio is more of a historian, econometrician, and data scientist than hedge fund manager. His ability to distill centuries of history into clear narratives of cause and effect is remarkable, producing deeply compelling work on debt crises and the changing world order.",
  },
  {
    name: "Balaji Srinivasan",
    description: (
      <>
        His book <em>The Network State</em> offers a bold, actionable framework
        for how technology and collective coordination can build new societies
        from scratch. Balaji, similar to many of these other role models, has
        the ability to synthesize history, technology, and political theory into
        a coherent vision for the future. In his case, his vision is a roadmap
        for turning online communities into sovereign realities.
      </>
    ),
  },
  {
    name: "Vitalik Buterin",
    description:
      "His selfless, altruistic approach to building Ethereum stands out in a space driven by profit. The technology he championed underpins concepts like quadratic voting and other mechanisms that could fundamentally strengthen democratic processes and individual liberties.",
  },
  {
    name: "David Friedberg",
    description:
      'David Friedberg (a.k.a. "The Sultan of Science") is my favorite voice on the All-In Podcast. He has a Dalio-esque ability to deconstruct complex problems into clear, first-principles reasoning — particularly on topics like the U.S. fiscal outlook. His altruism and intellectual honesty make him stand out.',
  },
  {
    name: "3Blue1Brown",
    description:
      "Grant Sanderson proves that deep understanding and clear communication can make even the most abstract math feel intuitive and beautiful.",
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

export default function AboutMe() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  return (
    <div className="relative flex-1 flex flex-col items-center px-4 md:px-8 pt-6 pb-16">
      <h1
        className={`text-4xl md:text-6xl font-bold text-center text-white transition-[opacity,filter,transform] duration-1000 ease-out ${
          loaded
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-md -translate-y-6"
        }`}
      >
        About Me
      </h1>

      <div
        className={`h-1 mt-6 transition-[opacity,width] duration-2000 delay-300 ${
          loaded ? "opacity-100 w-24" : "opacity-0 w-0"
        }`}
        style={{ backgroundColor: "oklch(0.4009 0.091 266.48 / 0.6)" }}
      />

      <div className="mt-6 max-w-5xl w-full space-y-6">
        <p
          className={`text-xl font-light leading-relaxed text-white/90 text-center transition-[opacity,filter,transform] duration-2000 delay-500 ${
            loaded
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-md translate-y-4"
          }`}
        >
          I'm a Software Engineer with a passion for building web applications
          and learning new things.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className={`md:col-span-2 rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm p-6 space-y-3 transition-[opacity,filter,transform] duration-2000 delay-700 ${
              loaded
                ? "opacity-100 blur-0 translate-x-0"
                : "opacity-0 blur-md -translate-x-12"
            }`}
          >
            <h2 className="text-2xl font-light text-[oklch(0.4009_0.091_266.48)]">
              Background
            </h2>
            <p className="text-grey-500 md:text-white/70 font-light leading-relaxed">
              I originally studied Finance for 3 years at McGill University in
              Montreal, Canada. After graduating, I dabbled in coding during my
              spare time and realized that software engineering was my true
              passion. Since then, I have been learning and building web
              applications in my free time.
            </p>
          </div>

          <div
            className={`rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm p-6 space-y-3 transition-[opacity,filter,transform] duration-2000 delay-900 ${
              loaded
                ? "opacity-100 blur-0 translate-y-0"
                : "opacity-0 blur-md translate-y-12"
            }`}
          >
            <h2
              className="text-2xl font-light text-white"
              style={{ color: "oklch(0.4009 0.091 266.48)" }}
            >
              Interests
            </h2>
            <p className="text-white/70 font-light leading-relaxed">
              Weightlifting, CrossFit, Calisthenics, Rock Climbing, Golf,
              Guitar, Chess, Poker, Math, Reading, Philosophy, Economics, Data
              Science
            </p>
          </div>

          <div
            className={`rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm p-6 space-y-3 transition-[opacity,filter,transform] duration-2000 delay-1100 ${
              loaded
                ? "opacity-100 blur-0 translate-x-0"
                : "opacity-0 blur-md translate-x-12"
            }`}
          >
            <h2
              className="text-2xl font-light text-white"
              style={{ color: "oklch(0.4009 0.091 266.48)" }}
            >
              Technical Skills
            </h2>
            <p className="text-white/70 font-light leading-relaxed">
              Python, R, JavaScript/TypeScript, HTML, Tailwind CSS, SQL,
              React.js, Django, FastAPI, PostgreSQL, Git, Web Scraping, Data
              Visualization, Machine Learning
            </p>
          </div>
        </div>

        <Carousel
          opts={{ loop: true }}
          className={`transition-[opacity,filter,transform] duration-2000 delay-1300 ${
            loaded
              ? "opacity-100 blur-0 translate-x-0"
              : "opacity-0 blur-md -translate-x-12"
          }`}
        >
          <div className="flex gap-4 items-stretch">
            <CarouselArrow direction="prev" />
            <div className="flex-1 rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm p-6 space-y-3 min-w-0">
              <h2
                className="text-2xl font-light text-white"
                style={{ color: "oklch(0.4009 0.091 266.48)" }}
              >
                Influential Role Models
              </h2>
              <CarouselContent>
                {roleModels.map((model) => (
                  <CarouselItem key={model.name}>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-white">
                        {model.name}
                      </h3>
                      <p className="text-white/70 font-light leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselArrow direction="next" />
          </div>
        </Carousel>

        <Carousel
          opts={{ loop: true }}
          className={`transition-[opacity,filter,transform] duration-2000 delay-1500 ${
            loaded
              ? "opacity-100 blur-0 translate-x-0"
              : "opacity-0 blur-md translate-x-12"
          }`}
        >
          <div className="flex gap-4 items-stretch">
            <CarouselArrow direction="prev" />
            <div className="flex-1 rounded-lg border border-white/10 bg-background/30 backdrop-blur-sm p-6 space-y-3 min-w-0">
              <h2
                className="text-2xl font-light text-white"
                style={{ color: "oklch(0.4009 0.091 266.48)" }}
              >
                What I'm Working On
              </h2>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-white">NUTRX</h3>
                      <p className="text-white/70 font-light leading-relaxed">
                        A B2B SaaS application for private practice dietitians
                        that helps create preliminary meal plans for clients
                        given nutritional and budgetary constraints. Also serves
                        as a client data record with tele-health functionality
                        and customizable Client Portals.
                      </p>
                      <p className="text-white/40 text-sm font-light">
                        React, TypeScript, Tailwind CSS, Python, Django,
                        PostgreSQL
                      </p>
                    </div>
                    <a
                      href="https://github.com/maxsands700/NUTRX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-white">
                        Polymarket Bot
                      </h3>
                      <p className="text-white/70 font-light leading-relaxed">
                        A trading bot that identifies Polymarket bettors acting
                        with asymmetric information by analyzing on-chain
                        transaction data. Leverages the public nature of
                        blockchain transactions to detect informed participants
                        and mirror their positions.
                      </p>
                      <p className="text-white/40 text-sm font-light">Python</p>
                    </div>
                    <a
                      href="https://github.com/maxsands700/polymarket_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-white">AddePy</h3>
                      <p className="text-white/70 font-light leading-relaxed">
                        An open-source Python SDK for the Addepar API, enabling
                        programmatic access to portfolio analytics, ownership
                        management, and bulk data imports. Features a two-tier
                        architecture with built-in pagination, rate-limiting,
                        and exponential-backoff polling.
                      </p>
                      <p className="text-white/40 text-sm font-light">Python</p>
                    </div>
                    <a
                      href="https://github.com/maxsands700/addepy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </div>
            <CarouselArrow direction="next" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
