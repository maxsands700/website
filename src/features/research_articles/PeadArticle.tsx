import { useState } from "react";
import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { ClickableImage } from "@/components/ClickableImage";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const meta: ArticleMeta = {
  title: "Post-Earnings Announcement Drift (PEAD) Anomaly & Return Cyclicality",
  author: "Max Sands",
  date: "April 1, 2023",
  description:
    "Investigating the PEAD anomaly and return cyclicality around earnings releases, with an exploration of ML trading strategies.",
  previewImageUrl: "/articles/research/pead/preview_image.png",
  tocItems: [
    { id: "intro", label: "Intro" },
    { id: "illustrating", label: "Illustrating PEAD" },
    { id: "yearly-pead", label: "Yearly PEAD" },
    { id: "return-cyclicality", label: "Return Cyclicality" },
    { id: "yearly-cyclicality", label: "Yearly Cyclicality" },
    { id: "improving", label: "Improving the Analysis" },
    { id: "peer-analysis", label: "Peer Company Analysis" },
  ],
};

const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

export default function PeadArticle() {
  const [peadYear, setPeadYear] = useState("2015");
  const [cycleYear, setCycleYear] = useState("2015");

  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection id="intro" title="Intro - What is PEAD?">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Post-Earnings Announcement Drift (PEAD) anomaly is a phenomenon where
          stock prices continue to exhibit abnormal returns after earnings
          reports are released. Specifically, stocks that report positive
          earnings surprises tend to continue to rise, while those that report
          negative surprises tend to continue to decline.
        </p>
        <div className="bg-background/60 rounded-lg border border-border p-4 mb-4 text-center">
          <p className="text-foreground font-mono text-sm">
            Earnings Surprise = Avg Analyst Estimate of EPS - Actual Reported
            EPS
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The PEAD anomaly contradicts the Efficient Market Hypothesis (EMH),
          which suggests that all available information is immediately reflected
          in stock prices. In this article, I've gathered earnings history on
          1,844 large, publicly-traded companies along with price, volume, and
          financial data for each.
        </p>
      </ArticleSection>

      {/* Illustrating the PEAD Anomaly */}
      <ArticleSection id="illustrating" title="Illustrating the PEAD Anomaly">
        <p className="text-muted-foreground leading-relaxed mb-4">
          If the PEAD anomaly were to hold, we would expect to see abnormal
          returns following earnings releases, dependent on the magnitude of the
          earnings surprise. Let's bucket each observation by earnings surprise
          magnitude and plot average cumulative performance 1, 3, 5, 20, and 60
          days after earnings release:
        </p>
        <Tabs defaultValue="nominal">
          <TabsList>
            <TabsTrigger value="nominal">Nominal ($) Surprise</TabsTrigger>
            <TabsTrigger value="pct">Pct (%) Surprise</TabsTrigger>
          </TabsList>
          <TabsContent value="nominal">
            <ClickableImage
              src="/articles/research/pead/heatmap_nominal.png"
              alt="PEAD Heatmap - Nominal Earnings Surprise"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="pct">
            <ClickableImage
              src="/articles/research/pead/heatmap_pct.png"
              alt="PEAD Heatmap - Percentage Earnings Surprise"
              className="w-full"
            />
          </TabsContent>
        </Tabs>
        <p className="text-muted-foreground leading-relaxed mt-4">
          From the heat maps, we notice that <em>markets are inefficient in
          the short-term following earnings releases</em>. If a company's
          nominal earnings surprise is in the 90th+ percentile (bucket 10), on
          average, the stock return the next day is 1.33%! Conversely, bucket 1
          averages -1.09% the next day.
        </p>
      </ArticleSection>

      {/* Yearly PEAD */}
      <ArticleSection id="yearly-pead" title="Yearly PEAD Analysis">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's verify the PEAD anomaly holds for each individual year:
        </p>
        <div className="mb-4">
          <Select value={peadYear} onValueChange={setPeadYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`/articles/research/pead/heatmap_nominal_${peadYear}.png`}
          alt={`PEAD Heatmap - ${peadYear}`}
          className="w-full"
        />
        <p className="text-muted-foreground leading-relaxed mt-4">
          The PEAD anomaly is prevalent throughout time, especially in the
          extreme short-term (1 day post-earnings release).
        </p>
      </ArticleSection>

      {/* Return Cyclicality */}
      <ArticleSection id="return-cyclicality" title="Return Cyclicality">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's visualize the average cumulative performance over a continuous
          250 day time-span:
        </p>
        <ClickableImage
          src="/articles/research/pead/return_cyclicality.png"
          alt="Return Cyclicality - 250 Day"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          The above plot is astonishing as it depicts an idiosyncrasy not visible
          in a heatmap - stock returns, <em>on average</em>, are cyclical. If we
          divide a fiscal quarter into 3 equal parts, stock prices rise during
          the first third, decline during the second third, and rise again
          during the last third.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's visualize a single cycle:
        </p>
        <ClickableImage
          src="/articles/research/pead/return_cycle_index.png"
          alt="Isolated Return Cycle"
          className="w-full"
        />
      </ArticleSection>

      {/* Yearly Return Cyclicality */}
      <ArticleSection
        id="yearly-cyclicality"
        title="Yearly Return Cyclicality"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's investigate each year in isolation:
        </p>
        <div className="mb-4">
          <Select value={cycleYear} onValueChange={setCycleYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Tabs defaultValue="isolated">
          <TabsList>
            <TabsTrigger value="isolated">Isolated Cycle</TabsTrigger>
            <TabsTrigger value="250day">250 Day</TabsTrigger>
          </TabsList>
          <TabsContent value="isolated">
            <ClickableImage
              src={`/articles/research/pead/cycle_${cycleYear}.png`}
              alt={`Isolated Cycle - ${cycleYear}`}
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="250day">
            <ClickableImage
              src={`/articles/research/pead/cyclicality_250d_${cycleYear}.png`}
              alt={`250 Day Cyclicality - ${cycleYear}`}
              className="w-full"
            />
          </TabsContent>
        </Tabs>
      </ArticleSection>

      {/* Improving the Analysis */}
      <ArticleSection id="improving" title="Improving the Analysis">
        <p className="text-muted-foreground leading-relaxed mb-4">
          The analysis above has 2 clear caveats: it does not compare
          performance to a benchmark, and it does not distinguish the impact of
          after-market trading. In the following, we account for these using
          Abnormal Returns and separating after-hours effects:
        </p>
        <Tabs defaultValue="nominal">
          <TabsList>
            <TabsTrigger value="nominal">Nominal ($) Surprise</TabsTrigger>
            <TabsTrigger value="pct">Pct (%) Surprise</TabsTrigger>
          </TabsList>
          <TabsContent value="nominal">
            <ClickableImage
              src="/articles/research/pead/pead_nominal_improved.png"
              alt="Improved PEAD Analysis - Nominal"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="pct">
            <ClickableImage
              src="/articles/research/pead/pead_pct_improved.png"
              alt="Improved PEAD Analysis - Percentage"
              className="w-full"
            />
          </TabsContent>
        </Tabs>
        <div className="mt-4 text-muted-foreground leading-relaxed space-y-2">
          <p>Key findings:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              The majority of alpha is generated during after-hours trading
            </li>
            <li>
              For the most extreme earnings surprise observations, the market
              somewhat expects these results in the days leading to the release
            </li>
            <li>
              The PEAD effect is less noticeable for SP500 companies, indicating
              PEAD is more pronounced for smaller companies
            </li>
          </ol>
        </div>

        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          Let's visualize average CAR starting at <em>t = 1</em> (the day
          after):
        </p>
        <Tabs defaultValue="nominal-t1">
          <TabsList>
            <TabsTrigger value="nominal-t1">Nominal ($)</TabsTrigger>
            <TabsTrigger value="pct-t1">Pct (%)</TabsTrigger>
          </TabsList>
          <TabsContent value="nominal-t1">
            <ClickableImage
              src="/articles/research/pead/pead_nominal_t1.png"
              alt="PEAD Analysis from t=1 - Nominal"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="pct-t1">
            <ClickableImage
              src="/articles/research/pead/pead_pct_t1.png"
              alt="PEAD Analysis from t=1 - Percentage"
              className="w-full"
            />
          </TabsContent>
        </Tabs>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Almost all alpha is generated during after-hours. The marginal benefit
          of entering a position the morning after ranges from approximately 0%
          to 0.5%, making a pure PEAD trading strategy unlikely to be
          significantly profitable after frictional costs.
        </p>
      </ArticleSection>

      {/* Peer Company Analysis - Blurred WIP */}
      <ArticleSection id="peer-analysis" title="Peer Company Analysis">
        <div className="relative">
          <div className="blur-sm select-none pointer-events-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              How do peer/competitors perform after a target company releases
              earnings? This section explores option (4) from our strategic
              framework: building a trading strategy that predicts returns of
              peer companies after earnings releases.
            </p>
            <ClickableImage
              src="/articles/research/pead/earnings_distribution.png"
              alt="Count and Distribution of Earnings Days"
              className="w-full mb-4"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <ClickableImage
              src="/articles/research/pead/monte_carlo_decile.png"
              alt="Monte Carlo Simulation - Decile Analysis"
              className="w-full mb-4"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <ClickableImage
              src="/articles/research/pead/monte_carlo_raw.png"
              alt="Monte Carlo Simulation - Raw Analysis"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-semibold text-primary">
              Work in Progress
            </span>
          </div>
        </div>
      </ArticleSection>

      {/* Final Remarks */}
      <ArticleSection>
        <p className="text-muted-foreground leading-relaxed italic">
          The above is intended as an exploration of historical data, and all
          statements and opinions are expressly my own; neither should be
          construed as investment advice.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
