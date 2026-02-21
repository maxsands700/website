import { useMermaid } from "@/hooks/useMermaid";
import { cn } from "@/lib/utils";

export function MermaidChart({
  chart,
  className,
}: {
  chart: string;
  className?: string;
}) {
  const ref = useMermaid(chart);

  return (
    <div
      ref={ref}
      className={cn("flex justify-center [&_svg]:max-w-full", className)}
    />
  );
}
