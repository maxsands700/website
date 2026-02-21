import { useRef, useEffect, useId } from "react";
import mermaid from "mermaid";

let initialized = false;

function initMermaid() {
  if (initialized) return;
  initialized = true;
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      primaryColor: "#3da892",
      primaryTextColor: "#1e1e1e",
      primaryBorderColor: "#2d8a7a",
      lineColor: "#888888",
      secondaryColor: "#f5f5f5",
      tertiaryColor: "#e8e8e8",
      background: "transparent",
      mainBkg: "#f0f0f0",
      nodeBorder: "#2d8a7a",
      clusterBkg: "#fafafa",
      titleColor: "#1e1e1e",
      edgeLabelBackground: "#ffffff",
    },
    flowchart: {
      htmlLabels: true,
      curve: "basis",
    },
  });
}

export function useMermaid(chart: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId().replace(/:/g, "_");

  useEffect(() => {
    if (!containerRef.current || !chart) return;

    initMermaid();

    let cancelled = false;

    (async () => {
      try {
        const { svg } = await mermaid.render(
          `mermaid${uniqueId}`,
          chart,
        );
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, uniqueId]);

  return containerRef;
}
