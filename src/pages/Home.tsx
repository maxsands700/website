import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="relative flex-1 grid grid-cols-3 items-center">
        <div className="col-span-1 flex justify-center items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="/Max_Sands_Resume.pdf" download>
                <img
                  src="/profile-photo-transparent.png"
                  alt="Profile photo"
                  className={`h-[90vh] w-auto max-w-none object-contain transition-all duration-3000 cursor-pointer hover:duration-100 hover:scale-102 hover:grayscale ${loaded ? "grayscale-0" : "grayscale"}`}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm text-xl">
              Click to Download my Resume
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center gap-4">
          <p
            className={`text-2xl tracking-widest uppercase text-white/70 font-light
              transition-all duration-2000 delay-500
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Hello, my name is
          </p>

          <h1
            className={`text-9xl font-extralight tracking-tight text-white
              transition-all duration-2000 delay-700
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Max <span className="font-light" style={{ color: "oklch(0.4009 0.091 266.48)" }}>Sands</span>
          </h1>

          <p
            className={`text-3xl font-extralight text-white/80 leading-relaxed
              transition-all duration-2000 delay-1000
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Welcome to my journey.
          </p>

          <div
            className={`h-1
              transition-all duration-2000 delay-1200
              ${loaded ? "opacity-100 w-24" : "opacity-0 w-0"}`}
            style={{ backgroundColor: "oklch(0.4009 0.091 266.48 / 0.6)" }}
          />
        </div>
      </div>
    </>
  );
}
