import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Link } from "react-router-dom";

export type Article = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  articleLink: string;
  imageFit?: "cover" | "contain";
};

const ArticleCard = ({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) => {
  return (
    <Card className={cn("group h-full overflow-hidden shadow-none", className)}>
      <CardContent className="space-y-2">
        <div className="overflow-hidden rounded-lg">
          <Link to={article.articleLink}>
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className={cn(
                "h-59.5 w-full transition-transform duration-300 group-hover:scale-105",
                article.imageFit === "contain"
                  ? "object-contain"
                  : "object-cover",
              )}
            />
          </Link>
        </div>
        <div className="flex items-center gap-1.5">
          <CalendarDaysIcon className="size-6" />
          <span>{article.date}</span>
        </div>
        <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
          <Link to={article.articleLink}>{article.title}</Link>
        </h3>
        <div className="flex items-end justify-between">
          <p className="text-muted-foreground line-clamp-2">
            {article.description}
          </p>
          <Button
            size="icon"
            variant="outline"
            className="p-4 shrink-0 group-hover:bg-primary! group-hover:text-primary-foreground group-hover:border-primary hover:border-primary hover:bg-primary! hover:text-primary-foreground transition-colors duration-300"
            asChild
          >
            <Link to={article.articleLink}>
              <ArrowRightIcon className="size-4 -rotate-45" />
              <span className="sr-only">Read more: {article.title}</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
