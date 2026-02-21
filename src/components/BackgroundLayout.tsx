import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export function BackgroundLayout() {
  const bgRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    if (location.pathname === "/") {
      // Instantly apply grayscale with no transition
      el.style.transition = "none";
      el.style.filter = "grayscale(1) blur(8px)";
      // Force reflow so the browser commits the grayscale frame
      void el.offsetHeight;
      // Re-enable transition and animate to color
      el.style.transition = "filter 7s ease";
      el.style.filter = "grayscale(0) blur(0px)";
    } else {
      // Non-home pages: instantly show full color, no animation
      el.style.transition = "none";
      el.style.filter = "grayscale(0) blur(0px)";
    }
  }, [location.pathname]);

  return (
    <>
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/road-image.webp')",
          filter: "grayscale(1) blur(8px)",
        }}
      />
      {/* Dark gradient scrim for text readability at top */}
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <Outlet />
    </>
  );
}
