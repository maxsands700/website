import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export function BackgroundLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/road-image.webp')",
          filter: loaded ? "grayscale(0) blur(0px)" : "grayscale(1) blur(8px)",
          transition: "filter 7s ease",
        }}
      />
      <Outlet />
    </>
  );
}
