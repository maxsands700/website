import { useState } from "react";
import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { ClickableImage } from "@/components/ClickableImage";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const meta: ArticleMeta = {
  title: "High Yield Debt vs. Equities",
  author: "Max Sands",
  date: "December 9, 2022",
  description:
    "An investigation into when High Yield Debt outperforms Equities, why, and where both asset classes may be heading.",
  previewImageUrl: "/articles/research/high-yield/preview_image.jpeg",
  tocItems: [
    { id: "intro", label: "Intro" },
    { id: "data", label: "Data" },
    { id: "performance", label: "Performance Comparison" },
    { id: "key-takeaways", label: "Key Takeaways" },
    { id: "narrative", label: "Building a Narrative" },
    { id: "going-back", label: "Going Back Further" },
    { id: "applying", label: "Applying Takeaways" },
    { id: "future", label: "The Future" },
  ],
};

const variableDefinitions = [
  {
    name: "SP500 Index",
    def: "A stock market index composed of 500 large companies traded on U.S. stock exchanges. Each constituent's weight in the index is proportional to its market capitalization.",
  },
  {
    name: "High Yield Index",
    def: "A bond index composed of high yield debt - corporate bonds with an investment grade of BB and below.",
  },
  {
    name: "High Yield Spread",
    def: "The yield difference between High Yield Debt and U.S. Treasuries (U.S. Government Debt).",
  },
  {
    name: "Federal Funds Rate",
    def: "The rate at which major U.S. banks lend their reserve balances to each other overnight. This is generally the rate referred to when people mention 'the interest rate'.",
  },
  {
    name: "Coupon Rate",
    def: "The annual rate of income received by an investor for holding a bond. A bond with a 5% coupon rate and face value of $100 will result in annual income receipts of $5.",
  },
  {
    name: "Yield to Worst",
    def: "The lowest possible yield that can be earned by a bond that fully adheres to its contracted terms. This measure does not include default risk.",
  },
  {
    name: "Inflation",
    def: "The yearly rate of increase in prices.",
  },
];

export default function HighYieldArticle() {
  const [dataTab, setDataTab] = useState("plot");

  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection id="intro">
        <p className="text-muted-foreground leading-relaxed">
          In this article we will investigate:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mt-2">
          <li>
            The time periods where High Yield Debt outperformed Equities
          </li>
          <li>Why these time periods occurred</li>
          <li>
            Where both of these asset classes may be heading over the next few
            years
          </li>
        </ol>
      </ArticleSection>

      {/* Data Section */}
      <ArticleSection id="data" title="Data">
        <Tabs value={dataTab} onValueChange={setDataTab}>
          <TabsList>
            <TabsTrigger value="plot">Plot</TabsTrigger>
            <TabsTrigger value="variables">Variable Definitions</TabsTrigger>
          </TabsList>
          <TabsContent value="plot">
            <ClickableImage
              src="/articles/research/high-yield/weekly_time_series.png"
              alt="High Yield Data Time Series"
              caption="Shaded regions indicate a time period when High Yield spreads exceeded 10%"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="variables">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">
                      Variable
                    </th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">
                      Definition
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {variableDefinitions.map((v) => (
                    <tr key={v.name} className="border-b border-border">
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {v.name}
                      </td>
                      <td className="py-3 px-4">{v.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </ArticleSection>

      {/* Performance Comparison */}
      <ArticleSection id="performance" title="Performance Comparison">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's visualize how Equities have performed relative to High Yield
          Debt:
        </p>
        <Tabs defaultValue="aggregate">
          <TabsList>
            <TabsTrigger value="aggregate">Aggregate</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="aggregate">
            <ClickableImage
              src="/articles/research/high-yield/aggregate_performance.png"
              alt="Aggregate Performance - Wealth Index since 1984"
              className="w-full mb-4"
            />
            <p className="text-muted-foreground leading-relaxed">
              We can see that, since 1984, the performance of Equities relative
              to High Yield Debt has been roughly comparable, with Equities
              slightly outperforming. Equities returned approximately 24x and
              High Yield Debt returned 20x. However, let's see if we can
              identify the time periods where High Yield Debt outperformed
              Equities, and why.
            </p>
          </TabsContent>
          <TabsContent value="yearly">
            <ClickableImage
              src="/articles/research/high-yield/yearly_returns.png"
              alt="Yearly Returns Comparison"
              caption="Shaded regions indicate years where High Yield Debt outperformed Equities"
              className="w-full mb-4"
            />
            <p className="text-muted-foreground leading-relaxed">
              From the above, we can see there seems to be cyclicality in the
              performance of High Yield Debt relative to Equities, with
              alternating 2-4 year periods of outperformance followed by 1-3
              year periods of underperformance.
            </p>
          </TabsContent>
        </Tabs>
      </ArticleSection>

      {/* Key Takeaways */}
      <ArticleSection id="key-takeaways" title="Key Takeaways">
        <p className="text-muted-foreground leading-relaxed mb-4">
          In order to better understand the logical cause-and-effect
          relationships at play between our variables, let's re-visualize our
          yearly performance comparison, but this time we will add our other
          relevant variables into the mix and attempt to find helpful trends:
        </p>
        <Tabs defaultValue="actual">
          <TabsList>
            <TabsTrigger value="actual">Actual</TabsTrigger>
            <TabsTrigger value="smooth">Smooth</TabsTrigger>
          </TabsList>
          <TabsContent value="actual">
            <ClickableImage
              src="/articles/research/high-yield/hy_spread_actual.png"
              alt="Key Takeaways - Actual Values"
              caption="Regions shaded in purple indicate positive outperformance"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="smooth">
            <ClickableImage
              src="/articles/research/high-yield/hy_spread_smooth.png"
              alt="Key Takeaways - Smoothed Values"
              caption="Regions shaded in purple indicate positive outperformance"
              className="w-full"
            />
          </TabsContent>
        </Tabs>
        <div className="mt-4 text-muted-foreground leading-relaxed">
          <p className="mb-2">
            Here are some primary takeaways from the visuals:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Outperformance <em>generally</em> occurs when:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>'Interest Rates' are falling</li>
                <li>
                  Yield Spreads and the YTW are elevated, especially in
                  relation to the 2-5 years prior
                </li>
                <li>
                  Preceding periods are associated with economic bubbles (1990
                  Oil Shock, 2001 Dot Com, 2008 GFC, 2022 Covid/Tech)
                </li>
              </ul>
            </li>
            <li>
              <em>Positive</em> outperformance occurs later in the period
            </li>
          </ul>
        </div>
      </ArticleSection>

      {/* Building a Simple Narrative */}
      <ArticleSection id="narrative" title="Building a Simple Narrative">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Obviously, these broad points are interrelated; let's try to build an{" "}
          <em>extremely simple</em> narrative that captures these relationships:
        </p>
        <blockquote className="border-l-4 border-primary/40 pl-4 text-muted-foreground leading-relaxed italic space-y-4">
          <p>
            During prolonged periods of strong stock market upswings, especially
            those wherein current growth exceeds productive growth, market
            participants bet on good times continuing - typically levering up in
            the process. But, just like it's not a good idea to push yourself
            past physical capacity for extended periods of time, it is not good
            for a company to grow faster than its economic potential for extended
            periods of time; eventually something breaks.
          </p>
          <p>
            During this initial period of hurt, both equity holders and debt
            holders get whacked, valuations drop and the first bankruptcies
            occur. However, since debt holders get paid first, they get hurt
            slightly less than equity holders. Investors start to panic and
            conclude that at current rates, debt is no longer a profitable
            investment, so they demand higher yields.
          </p>
          <p>
            After the tough first year, the Fed steps in and stimulates the
            economy by lowering the cost of borrowing. Companies are now able to
            negotiate better deals on borrowing money, so they take on more debt
            at a lower rate and use it to service their older, more expensive
            debt. Notice the prolonged periods of High Yield's outperformance
            occur approximately a year after the initial crash (1990, 2001, 2008)
            for 2-4 years because investors were able to invest when yields were
            at their peak.
          </p>
        </blockquote>
      </ArticleSection>

      {/* Going Back Even Further */}
      <ArticleSection id="going-back" title="Going Back Even Further">
        <p className="text-muted-foreground leading-relaxed mb-4">
          While we don't have data on a High Yield Bond Index before 1984,
          Aswath Damadoran published a helpful dataset. Let's treat Baa Corporate
          Bonds as a proxy for 'High Yield' Debt and visualize its performance
          relative to the SP500 since 1928:
        </p>
        <ClickableImage
          src="/articles/research/high-yield/long_term_performance.png"
          alt="Historical Returns 1928-1984"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-2">
          The above chart provides us with some possible amendments to our key
          takeaways:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
          <li>
            Our observation that <em>positive</em> outperformance occurs later
            in the outperformance period does not seem to hold well during the
            1929-1934 & 1940-1943 time-frames.
          </li>
          <li>
            There appears to be marginally less cyclicality in outperformance.
          </li>
          <li>
            Most importantly, the above solidifies our claim that High Yield
            Outperforms during periods associated with financial bubbles (1929,
            1940, etc.).
          </li>
        </ol>
      </ArticleSection>

      {/* Applying the Key Takeaways */}
      <ArticleSection id="applying" title="Applying the Key Takeaways">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's attempt to codify our narrative and key takeaways, so that we can
          isolate periods of strong High Yield Debt returns. I will tell the
          computer to go through the data and highlight a region <em>if</em>:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
          <li>
            the current YTW is 30% greater than its 3 Year Moving Average w/ a
            2-year lag
          </li>
          <li>
            the current Yield Spread is 75% greater than its 3 Year Moving
            Average w/ a 2-year lag
          </li>
          <li>
            the current Federal Funds Rate is 33% lower than its 3 Year Moving
            Average w/ a 2-year lag
          </li>
        </ul>
        <ClickableImage
          src="/articles/research/high-yield/applied_performance.png"
          alt="Signal Analysis"
          caption="Plot 2 is the same as Plot 1, but Fed Funds Rate is removed. Plot 3 is being re-provided for ease of comparison."
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          As we can see, these 3 simple metrics, especially the YTW metric,
          provide a decent signal for periods of strong High Yield Debt returns.
          And while these metrics have been created with a knowledge of the past,
          they certainly corroborate the simple narrative we created above.
        </p>
      </ArticleSection>

      {/* The Future */}
      <ArticleSection id="future" title="The Future: Where are we Heading?">
        <p className="text-muted-foreground leading-relaxed mb-4">
          In our above research, one of our key takeaways involved the Federal
          Funds Rate. We noted that during periods of economic hurt the Fed would
          lower rates and kick the can down the road. However, we have now
          reached that special point in time wherein interest rates can no longer
          be lowered. Instead, the Fed has been forced to aggressively raise
          rates, subsequently popping the Tech bubble.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This makes for an interesting investment environment going forward. We
          have noted that High Yield Debt performs better during these
          reactionary, declining interest rate environments, and equities during
          the post-recovery 'rising' rate environment. However, my outlook for
          equities is still slightly more pessimistic. Instead, I think that High
          Yield Debt is likely to outperform over the next 2 years, followed by
          Equities picking back up...
        </p>
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
