import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type TocItem = { id: string; label: string };

export type ArticleMeta = {
  title: string;
  author: string;
  date: string;
  description: string;
  tags?: string[];
  previewImageUrl?: string;
  tocItems?: TocItem[];
};

export function ArticleSection({
  id,
  title,
  children,
  className,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-lg border border-border bg-background/80 backdrop-blur-sm p-6",
        className,
      )}
    >
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
      )}
      {children}
    </section>
  );
}

export function ArticleLayout({
  meta,
  children,
}: {
  meta: ArticleMeta;
  children: ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!meta.tocItems?.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    for (const item of meta.tocItems) {
      const el = document.getElementById(item.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [meta.tocItems]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Header */}
        <header
          className={cn(
            "mb-8 transition-all duration-1000 ease-out bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border",
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 -translate-y-6 blur-md",
          )}
        >
          <Button asChild className="mb-6">
            <Link to="/articles">
              <ArrowLeft className="size-4" />
              Back to Articles
            </Link>
          </Button>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-3">
            {meta.title}
          </h1>

          <p className="text-muted-foreground text-sm">
            {meta.author} &middot; {meta.date}
          </p>

          {meta.previewImageUrl && (
            <img
              src={meta.previewImageUrl}
              alt={meta.title}
              className="mt-6 w-full rounded-lg object-cover max-h-80"
            />
          )}
        </header>

        {/* Body: TOC + Content */}
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-8">
          {/* Main content */}
          <main
            className={cn(
              "space-y-6 transition-all duration-1000 ease-out delay-200",
              loaded
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-md",
            )}
          >
            {children}
          </main>

          {/* Sticky TOC sidebar (desktop only) */}
          {meta.tocItems && meta.tocItems.length > 0 && (
            <aside
              className={cn(
                "hidden lg:block transition-all duration-1000 ease-out delay-300",
                loaded
                  ? "opacity-100 translate-x-0 blur-0"
                  : "opacity-0 translate-x-6 blur-md",
              )}
            >
              <nav className="sticky top-24">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  On this page
                </h3>
                <ul className="space-y-2 border-l border-border">
                  {meta.tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          "block pl-3 text-sm transition-colors -ml-px border-l-2",
                          activeId === item.id
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
