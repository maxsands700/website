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
  title: "Assessing Financial Bubbles",
  author: "Max Sands",
  date: "March 6, 2023",
  description:
    "Extending Ray Dalio's framework for identifying financial bubbles to create a Grand Financial Bubble Metric across U.S. market sectors.",
  previewImageUrl: "/articles/research/financial-bubbles/preview_image.png",
  tocItems: [
    { id: "framework", label: "Framework" },
    { id: "methods", label: "Methods" },
    { id: "prices", label: "1) Prices" },
    { id: "leverage", label: "2) Leverage" },
    { id: "new-entrants", label: "3) New Entrants" },
    { id: "grand-metric", label: "Grand Metric" },
    { id: "timing", label: "Timing the Bubble" },
    { id: "additional-areas", label: "Possible Amendments" },
    { id: "takeaways", label: "Takeaways" },
  ],
};

const sectors = [
  { value: "1", label: "Communication Services" },
  { value: "2", label: "Consumer Discretionary" },
  { value: "3", label: "Consumer Staples" },
  { value: "4", label: "Energy" },
  { value: "5", label: "Financials" },
  { value: "6", label: "Health Care" },
  { value: "7", label: "Industrials" },
  { value: "8", label: "Information Technology" },
  { value: "9", label: "Materials" },
  { value: "10", label: "Real Estate" },
  { value: "11", label: "Utilities" },
];

const IMG = "/articles/research/financial-bubbles";

export default function FinancialBubblesArticle() {
  const [priceSector, setPriceSector] = useState("1");
  const [debtSector, setDebtSector] = useState("1");
  const [ipoSector, setIpoSector] = useState("1");
  const [fbmSector, setFbmSector] = useState("1");

  return (
    <ArticleLayout meta={meta}>
      {/* Framework */}
      <ArticleSection id="framework" title="A Framework for Identifying Bubbles">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Financial markets have experienced several notable financial bubbles in
          recent history. The Dot-Com bubble in 2001, the Great Financial Crisis
          in 2008, and the Tech bubble in 2022 are three examples. In each case,
          the period leading up to, during, and after the bubble's collapse
          brought varying degrees of market volatility and returns. Investors who
          exited before the crash were able to achieve impressive returns, while
          those who remained in the market experienced significant losses. As
          such, it is valuable for investors to be able to identify where
          financial bubbles are forming and their stage of development to avoid
          potential losses.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In his book{" "}
          <em>Principles for Navigating Big Debt Crises</em>, Ray Dalio posits
          that markets are cyclical and that financial bubbles form for the same
          underlying reasons - healthy growth turns to unhealthy growth as
          entities over-lever which eventually yields the bust of a financial
          bubble; he outlines the following rough framework for identifying
          financial bubbles with the associated message:
        </p>
        <ClickableImage
          src={`${IMG}/framework.png`}
          alt="Ray Dalio's Bubble Framework"
          className="w-full mb-4"
        />
        <blockquote className="border-l-4 border-primary/40 pl-4 text-muted-foreground leading-relaxed italic mb-4">
          "At this point I want to emphasize that it is a mistake to think that
          any one metric can serve as an indicator of an impending debt crisis.
          The ratio of debt to income for the economy as a whole, or even debt
          service payments to income for the economy as a whole, which is better,
          are useful but ultimately inadequate measures. To anticipate a debt
          crisis well, one has to look at the specific debt-service abilities of
          the individual entities, which are lost in these averages. More
          specifically, a high level of debt or debt service to income is less
          problematic if the average is well distributed across the economy than
          if it is concentrated — especially if it is concentrated in key
          entities." — Ray Dalio
        </blockquote>
        <p className="text-muted-foreground leading-relaxed">
          While the above framework is tailored for large-scale economic bubbles
          that drastically affected national economies, we will extend, adapt,
          and apply this framework to create a{" "}
          <code>Grand Financial Bubble Metric</code> and identify financial
          bubbles within various sectors of the U.S. economy and markets.
        </p>
      </ArticleSection>

      {/* Methods */}
      <ArticleSection id="methods" title="Methods for Quantifying the Framework">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Going forward, we will only consider the following framework
          components, as I believe they best encapsulate the main underpinnings
          of the framework and are simultaneously easy to quantify:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
          <li>Are prices high relative to traditional measures?</li>
          <li>Are purchases being financed w/ high leverage?</li>
          <li>Have new participants entered the market?</li>
          <li>Does monetary tightening risk popping the bubble?*</li>
        </ol>
        <p className="text-muted-foreground leading-relaxed text-sm italic mb-4">
          *We will qualitatively consider a variation of this section of the
          framework after building our <code>Grand Financial Bubble Metric</code>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In order to do this, I have collected: Key figures from the Income
          Statements, Balance Sheets, and Cash Flow Statements of all the
          companies in the Russell 3000 Index since 1996, including the sector
          classification of each company; Global IPO data since 1993; Economic
          Data (GDP, Federal Funds Rate, etc.).
        </p>
      </ArticleSection>

      {/* 1) Prices */}
      <ArticleSection
        id="prices"
        title="1) Prices High Relative to Traditional Measures"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's take a look at the historical P/S, P/B, and P/E ratios of each
          sector. To do this, we will plot the median value of these ratios since
          1995 for different sectors while also aggregating by company size
          according to the following schema:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="text-muted-foreground text-sm border-collapse w-full max-w-md">
            <thead>
              <tr>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Bucket</th>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Market Cap Percentile (within Sector)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-1.5">Small Cap</td><td className="border border-border px-3 py-1.5">0th–40th Percentile</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Mid Cap</td><td className="border border-border px-3 py-1.5">40th–80th Percentile</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Large Cap</td><td className="border border-border px-3 py-1.5">80th–95th Percentile</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Ultra-Large Cap</td><td className="border border-border px-3 py-1.5">95th–100th Percentile</td></tr>
            </tbody>
          </table>
        </div>
        <Tabs defaultValue="ps">
          <TabsList>
            <TabsTrigger value="ps">Price-to-Sales</TabsTrigger>
            <TabsTrigger value="pb">Price-to-Book</TabsTrigger>
            <TabsTrigger value="pe">Price-to-Earnings</TabsTrigger>
          </TabsList>
          <TabsContent value="ps">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-8-1.png`}
              alt="Median Price-to-Sales by Sector"
              caption="Dashed line represents median of medians for the Large Cap bucket. Color scale represents yearly sector ETF returns."
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="pb">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-9-1.png`}
              alt="Median Price-to-Book by Sector"
              caption="Dashed line represents median of medians for the Large Cap bucket."
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="pe">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-10-1.png`}
              alt="Median Price-to-Earnings by Sector"
              caption="Dashed line represents median of medians for the Large Cap bucket."
              className="w-full"
            />
          </TabsContent>
        </Tabs>

        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          The above is overwhelming, but it does paint the general picture that
          financial bubbles have formed when prices are high relative to
          traditional measures. For instance, the Dot-Com Bubble of '00/'01 is
          seen most uniformly in the above with high price ratios across the
          board.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          However, let's try to represent the data in a more concise and
          standardized fashion.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Creating a Price Metric
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Let's create a standard <code>Price Metric</code> by:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mb-2">
          <li>Calculating the distance of each of these ratios from a median line</li>
          <li>Dividing this distance by the average absolute distance from the median line</li>
          <li>Averaging the standardized distances for the P/S, P/B, & P/E ratios together to create a single <code>Price Metric</code></li>
        </ol>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By doing this we will have a rough estimation of how elevated prices
          are for each of these sectors and market cap buckets.
        </p>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-11-1.png`}
          alt="Price Metric by Sector"
          className="w-full mb-4"
        />

        <h4 className="text-base font-semibold text-foreground mb-2">Takeaways</h4>
        <p className="text-muted-foreground leading-relaxed mb-2">
          From eye-balling the above charts we can conclude that the following
          sectors were highly priced relative to traditional measures:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="text-muted-foreground text-sm border-collapse w-full max-w-md">
            <thead>
              <tr>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Sector</th>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Time Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-1.5">Communications</td><td className="border border-border px-3 py-1.5">'99 - '01, '20 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Consumer Discretionary</td><td className="border border-border px-3 py-1.5">'20 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Consumer Staples</td><td className="border border-border px-3 py-1.5">'97 - '02, '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Energy</td><td className="border border-border px-3 py-1.5">'00, '17 - '18</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Financials</td><td className="border border-border px-3 py-1.5">'98 - '02, '18</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Health Care</td><td className="border border-border px-3 py-1.5">'98-'02, '20 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Industrials</td><td className="border border-border px-3 py-1.5">'20 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Materials</td><td className="border border-border px-3 py-1.5">'20 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Real Estate</td><td className="border border-border px-3 py-1.5">'19 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Technology</td><td className="border border-border px-3 py-1.5">'99 - '02, '20 - '23</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Utilities</td><td className="border border-border px-3 py-1.5">'01, '07, '18 - '23</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As we continue through our framework, we will see if the same time
          periods resurface.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          Digging Deeper — Price Metric by Sub-Sector
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Now that we have time periods in which certain broad sectors were
          highly priced, we can repeat the above at a more granular level. This
          is important since large values can be washed away in averages when
          aggregating at broader hierarchical sector levels. For instance, we
          could have a high price metric of +3 for{" "}
          <em>Semiconductors</em> and a low metric of -3 for{" "}
          <em>Software</em>; if these were the only two sub-sectors in the{" "}
          <em>Technology</em> space, then the price metric for{" "}
          <em>Technology</em> would likely lie around 0. This scenario is much
          different from one wherein both <em>Semiconductors</em> and{" "}
          <em>Software</em> have price metrics of 0, which would also
          consequently yield a price metric of around 0 for{" "}
          <em>Technology</em>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the following, we consider only <em>Large Cap</em> and{" "}
          <em>Ultra-Large Cap</em> as there are fewer companies in each bucket
          when aggregating at a more granular sector level:
        </p>
        <div className="mb-4">
          <Select value={priceSector} onValueChange={setPriceSector}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-12-${priceSector}.png`}
          alt={`Price Metric - ${sectors.find((s) => s.value === priceSector)?.label}`}
          caption="Color scale represents average yearly nominal return of companies in each subsector with 80th+ percentile Market Cap."
          className="w-full"
        />
      </ArticleSection>

      {/* 2) Leverage */}
      <ArticleSection
        id="leverage"
        title="2) Purchases Financed by High Leverage"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's take a look at the historical debt levels of each sector since
          1995. Once again, we will aggregate by company size and plot the median
          value for different sectors. In this section we will consider two
          metrics to assess debt levels:
        </p>
        <p className="text-muted-foreground leading-relaxed mb-2 font-mono text-sm">
          Metric 1 = D/E = (LT Debt + ST Debt) / Equity
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 font-mono text-sm">
          Metric 2 = Avg Debt / GDP = (Σ(LT Debt + ST Debt) / No. of Companies) / GDP
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The first metric aims to represent leverage at the company level,
          whereas the second metric aims to represent the significance of that
          debt in relation to the size of the general economy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the second metric, we consider the <em>average</em> debt level as a
          ratio to GDP because the number of companies within each sector of the
          Russell 3000 varies each year. Therefore, simply calculating the sum
          for each year could overstate debt levels for years in which there are
          more companies than usual. Instead, we hope to measure this in
          isolation in the section{" "}
          <em>3) New entrants are entering the market</em>.
        </p>
        <Tabs defaultValue="de">
          <TabsList>
            <TabsTrigger value="de">Debt-to-Equity</TabsTrigger>
            <TabsTrigger value="dgdp">Avg Debt-to-GDP</TabsTrigger>
          </TabsList>
          <TabsContent value="de">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-13-1.png`}
              alt="Median Debt-to-Equity by Sector"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="dgdp">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-14-1.png`}
              alt="Average Debt-to-GDP by Sector"
              className="w-full"
            />
          </TabsContent>
        </Tabs>

        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          While the data is not crystal clear, the above generally corroborates
          the idea that financial bubbles have formed during times of increased
          leverage. Again, let's try to represent the data in a more concise and
          standard fashion.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Creating a Debt Metric
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Let's create a standard <code>Debt Metric</code> by:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mb-2">
          <li>Calculating the distance of each of these ratios from a median line</li>
          <li>Dividing this distance by the average absolute distance from the median line</li>
          <li>Averaging the standardized distances for Metric 1 & Metric 2 with the respective weights of 90% and 10%*</li>
        </ol>
        <p className="text-muted-foreground leading-relaxed text-sm italic mb-4">
          *Metric 1 is more stationary and cyclical; therefore, we are giving it
          a greater weight as it will be more reliable when measuring absolute
          debt levels.
        </p>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-15-1.png`}
          alt="Debt Metric by Sector"
          className="w-full mb-4"
        />

        <h4 className="text-base font-semibold text-foreground mb-2">Takeaways</h4>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Let's repeat our process and identify time periods where debt levels
          were high in each sector:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="text-muted-foreground text-sm border-collapse w-full max-w-md">
            <thead>
              <tr>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Sector</th>
                <th className="border border-border px-3 py-1.5 text-left font-semibold">Time Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-1.5">Communications</td><td className="border border-border px-3 py-1.5">'97 - '99, '02, '10, '18 - '21</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Consumer Discretionary</td><td className="border border-border px-3 py-1.5">'18, '20-'22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Consumer Staples</td><td className="border border-border px-3 py-1.5"></td></tr>
              <tr><td className="border border-border px-3 py-1.5">Energy</td><td className="border border-border px-3 py-1.5">'01, '03, '19 - '22</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Financials</td><td className="border border-border px-3 py-1.5">'01 - '09</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Health Care</td><td className="border border-border px-3 py-1.5">'18 - '23</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Industrials</td><td className="border border-border px-3 py-1.5">'09, '19-'23</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Materials</td><td className="border border-border px-3 py-1.5">'01 - '03, '15, '21</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Real Estate</td><td className="border border-border px-3 py-1.5">'08-'10</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Technology</td><td className="border border-border px-3 py-1.5">'18 - '23</td></tr>
              <tr><td className="border border-border px-3 py-1.5">Utilities</td><td className="border border-border px-3 py-1.5">'03 - '05, '18 - '23</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          Digging Deeper — Debt Metric by Sub-Sector
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Once again, we can take a more granular look at the data:
        </p>
        <div className="mb-4">
          <Select value={debtSector} onValueChange={setDebtSector}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-16-${debtSector}.png`}
          alt={`Debt Metric - ${sectors.find((s) => s.value === debtSector)?.label}`}
          className="w-full"
        />
      </ArticleSection>

      {/* 3) New Entrants */}
      <ArticleSection id="new-entrants" title="3) New Entrants to the Market">
        <p className="text-muted-foreground leading-relaxed mb-2">
          There are several ways that we can assess whether new players are
          entering markets. The most direct and simple method is to track when
          private companies become public (i.e. IPO data). Let's track IPO
          activity by:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mb-4">
          <li>Counting the # of IPOs each month</li>
          <li>Summing the IPO Offer Size each month</li>
        </ol>
        <Tabs defaultValue="count">
          <TabsList>
            <TabsTrigger value="count">IPO Count</TabsTrigger>
            <TabsTrigger value="sum">Sum Offer Size</TabsTrigger>
            <TabsTrigger value="avg">Avg Offer Size</TabsTrigger>
            <TabsTrigger value="median">Median Offer Size</TabsTrigger>
          </TabsList>
          <TabsContent value="count">
            <Tabs defaultValue="agg">
              <TabsList>
                <TabsTrigger value="agg">Aggregate</TabsTrigger>
                <TabsTrigger value="sector">Sector-Level</TabsTrigger>
              </TabsList>
              <TabsContent value="agg">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-17-1.png`}
                  alt="IPO Count - Aggregate"
                  className="w-full"
                />
              </TabsContent>
              <TabsContent value="sector">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-18-1.png`}
                  alt="IPO Count - Sector Level"
                  className="w-full"
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="sum">
            <Tabs defaultValue="agg">
              <TabsList>
                <TabsTrigger value="agg">Aggregate</TabsTrigger>
                <TabsTrigger value="sector">Sector-Level</TabsTrigger>
              </TabsList>
              <TabsContent value="agg">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-19-1.png`}
                  alt="Sum IPO Offer Size - Aggregate"
                  className="w-full"
                />
              </TabsContent>
              <TabsContent value="sector">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-20-1.png`}
                  alt="Sum IPO Offer Size - Sector Level"
                  className="w-full"
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="avg">
            <Tabs defaultValue="agg">
              <TabsList>
                <TabsTrigger value="agg">Aggregate</TabsTrigger>
                <TabsTrigger value="sector">Sector-Level</TabsTrigger>
              </TabsList>
              <TabsContent value="agg">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-21-1.png`}
                  alt="Avg IPO Offer Size - Aggregate"
                  className="w-full"
                />
              </TabsContent>
              <TabsContent value="sector">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-22-1.png`}
                  alt="Avg IPO Offer Size - Sector Level"
                  className="w-full"
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="median">
            <Tabs defaultValue="agg">
              <TabsList>
                <TabsTrigger value="agg">Aggregate</TabsTrigger>
                <TabsTrigger value="sector">Sector-Level</TabsTrigger>
              </TabsList>
              <TabsContent value="agg">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-23-1.png`}
                  alt="Median IPO Offer Size - Aggregate"
                  className="w-full"
                />
              </TabsContent>
              <TabsContent value="sector">
                <ClickableImage
                  src={`${IMG}/unnamed-chunk-24-1.png`}
                  alt="Median IPO Offer Size - Sector Level"
                  className="w-full"
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>

        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          From eye-balling the data, we notice that IPO data is a helpful
          indicator when assessing if markets are growing past capacity. We
          notice that the count of monthly IPOs is somewhat cyclical with peaks
          before time periods typically associated with financial bubbles ('01,
          '08, '22).
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Creating an IPO Metric
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Let's create a standard <code>IPO Metric</code> by:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mb-2">
          <li>Calculating the distance between a 3-month rolling average and a 4-year rolling average of IPO Count & Avg. Offer Size</li>
          <li>Calculating a standardized distance for both of these rolling averages</li>
          <li>Averaging the standardized distances together to create a single <code>IPO Metric</code></li>
        </ol>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By doing this we will have a rough estimation of how 'hot' markets are
          and if the number of entrants is high relative to historical averages:
        </p>
        <Tabs defaultValue="agg">
          <TabsList>
            <TabsTrigger value="agg">Aggregate</TabsTrigger>
            <TabsTrigger value="sector">Sector-Level</TabsTrigger>
          </TabsList>
          <TabsContent value="agg">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-25-1.png`}
              alt="IPO Metric - Aggregate"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="sector">
            <ClickableImage
              src={`${IMG}/unnamed-chunk-26-1.png`}
              alt="IPO Metric - Sector Level"
              className="w-full"
            />
          </TabsContent>
        </Tabs>

        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
          Digging Deeper — IPO Metric by Sub-Sector
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Once again, let's take a more granular look at the data:
        </p>
        <div className="mb-4">
          <Select value={ipoSector} onValueChange={setIpoSector}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-27-${ipoSector}.png`}
          alt={`IPO Metric - ${sectors.find((s) => s.value === ipoSector)?.label}`}
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          From observing the above at Sector Level 3, we notice that the IPO
          metric behaves oddly for several segments. This odd behavior is the
          result of limited IPO data for those segments and we will have to
          address this when creating our grand summary{" "}
          <code>Financial Bubble Metric</code>.
        </p>
      </ArticleSection>

      {/* Grand Financial Bubble Metric */}
      <ArticleSection id="grand-metric" title="Putting It All Together">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's take each of our metrics, scale them to values between 0 and 1,
          and average them together to create a{" "}
          <code>Grand Financial Bubble Metric</code>. We will then re-scale our
          resulting metric between 0 and 1.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          It is important to note that our IPO metric can take on extreme values
          at the sector level - <em>Health Care</em> in 2001 and{" "}
          <em>Financials</em> (w/ the SPAC surge) in 2021. Because these extreme
          points reduce the relative importance of other time periods, we will
          water them down and keep this in the back of our minds going forward.
        </p>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-30-1.png`}
          alt="Grand Financial Bubble Metric by Sector"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          At this point, I will caution the reader that any inferences taken from
          our <code>Grand Financial Bubble Metric</code> should be held with
          reservation. The metric allows for a good basic framing of where
          sectors are relative to history, but understanding the key dynamics at
          play within each sector, and the current macroeconomic and political
          environment is equally as important. In addition, when comparing across
          history, it is important to have a knowledge of context and qualitative
          factors that may affect inferential ability. For instance, the Covid-19
          Pandemic drastically affected the world economy and markets in
          2020-2022, so the reader may decide to skew metrics during those years
          according to their beliefs and theses.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With that said, we can see that our{" "}
          <code>Grand Financial Bubble Metric</code> may be helpful in
          determining sector performance. In general, we observe positive returns
          when the metric is relatively low and increasing. As the market
          frenzies and there are new competitors, higher valuations, and
          debt-financed growth, market returns are particularly strong.
          Eventually, our metric peaks, and subsequent returns are generally
          poor.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-2">
          There are a few things worth noting from our plot:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-4">
          <li>
            Our confidence in the metric varies for different market segments and
            understanding <em>why</em> is crucial. For instance, our metric is
            particularly informative for the <em>Energy</em>,{" "}
            <em>Technology</em>, and <em>Consumer</em> segments, but it is
            difficult to decipher for the <em>Real Estate</em> and{" "}
            <em>Financials</em> segment. This is likely due to the fact that the
            former segments are cyclical in nature, and therefore distance from a
            measure of central tendency is informative, but for{" "}
            <em>Real Estate</em>, this is not the case. <em>Financials</em>,
            however, is certainly cyclical in relative pricing, but due to the
            nature of the industry, is not cyclical in its leverage; instead
            banks tend to have uniformly high leverage throughout time.
          </li>
          <li>
            Our metric indicated potential bubbles in '00 and '22, but completely
            missed the mark in 2008. This is partly a result of the above
            explanation as well as the fact that our model does not capture any
            proxy for the <em>quality of a company's assets</em> (this is mainly
            applicable to banks only). In reality, the 2008 GFC was not the
            result of over leverage relative to historical averages (although the
            fact that banks are inherently extremely levered was certainly
            crucial), but instead was the result of poor investment decisions
            made by these financial institutions, which could only have been
            deciphered with logic and analysis from the balance sheet of banking
            institutions. It is likely that this will be the case for all
            traditional banking crises, due to the nature of the industry, and
            therefore it would be a good idea to try and built a robust,
            sector-specific <code>Banking Crisis Metric</code>.
          </li>
          <li>
            Our metric provides a framework for historical comparison, but it
            does not provide a time-based trading signal (and it should not be
            looked at <em>in isolation</em> when making investment decisions).
            For instance, if we were to look at our plot in 2018, it would have
            been very reasonable to conjecture that <em>Technology</em> was in a
            bubble and poised for poor investment returns in the coming years.
            Yet, '19 - '21 were extremely strong years for that industry, and
            the bubble did not pop until 2022.{" "}
            <em>
              Why is that & what are the main catalysts that cause the bubble to
              pop?
            </em>{" "}
            We will discuss this shortly...
          </li>
          <li>
            The effects of bubbles in a particular segment tend to affect other
            segments as well, even if they appear unrelated, with varying degrees
            of magnitude. In particular, we note that the <em>Financials</em>{" "}
            sector is often affected by bubbles in other segments. This is fairly
            intuitive, as the <em>Financials</em> sector implicitly interacts
            with all other sectors, and is inherently levered.
          </li>
        </ol>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          Grand Metric by Sub-Sector
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's create our <code>Grand Financial Bubble Metric</code> at a more
          granular level. We are only going to include the sectors that have
          sufficient data. For those with sufficient Price & Debt data, but
          insufficient IPO data, we will calculate our{" "}
          <code>Grand Financial Bubble Metric</code> as the average of{" "}
          <code>Price Metric</code> and <code>Debt Metric</code> and exclude
          the <code>IPO Metric</code>.
        </p>
        <div className="mb-4">
          <Select value={fbmSector} onValueChange={setFbmSector}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-32-${fbmSector}.png`}
          alt={`Grand FBM - ${sectors.find((s) => s.value === fbmSector)?.label}`}
          className="w-full"
        />
      </ArticleSection>

      {/* Timing the Bubble */}
      <ArticleSection id="timing" title="'Timing' the Bubble">
        <p className="text-muted-foreground leading-relaxed mb-4">
          The ability to time market bubbles is nearly impossible, but the main
          indicators that many people pay attention to are interest rates/measures
          of borrowing cost. Since a large part of bubbles are caused by debt, it
          is logical that the cost of borrowing money is highly relevant.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          One of the most observed interest rate metrics in the industry is the
          "10-2" Yield Spread which measures the difference in the yield of a
          10-year Treasury Bond and that of a 2-year Treasury bond. Before we
          plot this measure below, I think it is important to understand the
          significance of this metric and its implications. Let's consider two
          scenarios:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-4">
          <li>
            A 10-year TBond is yielding 7% per year, and a 2-year TBond is
            yielding 3% per year, thus netting out to a 4% spread. This scenario
            implies that the average person demands 4% more of a return on their
            investment to loan out their money for 10 years, rather than 2 years.
            At the most basic level, this is logical. The overarching rationale
            for this can be boiled down to{" "}
            <em>General Uncertainty about the Future:</em> the longer that
            maturity of the bond, the more time there is for unexpected events to
            occur that may affect the bond's value, or the buyer's perceived
            value of the bond, and therefore lenders demand higher rates of
            return for this increased uncertainty.
          </li>
          <li>
            A 10-year TBond is yielding 3% per year, and a 2-year TBond is
            yielding 2% per year, thus netting out to a -1% spread. When this
            spread is negative, it is called a yield curve inversion. This
            scenario implies that the average person is willing to{" "}
            <em>give up a 1%</em> return on their investment to loan out their
            money for an additional 8 years. In other words, lenders are{" "}
            <em>
              more uncertain about the near-term than the long-term
            </em>{" "}
            (for any of the aforementioned reasons)!
          </li>
        </ol>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If market consensus indicates greater uncertainty regarding the
          short-term, as it does in the second scenario, this does not bode well
          for the economy and markets. Therefore, it is likely that the "10-2"
          Yield Spread is an insightful metric for our purposes.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Many people, rightfully so, will push back and repeat the famous adage
          "yield-curve inversions predict 4 out of every 3 recessions," and they
          are right; it is impossible to predict markets with the use of solely
          one metric, and there are times when the yield-curve has inverted and
          markets rallied. This is normal, there are absolutely times when the
          short-term is uncertain, but the underlying foundation of markets are
          structurally sound, and therefore the future still holds prospect for
          healthy growth. However, I believe studying yield curve inversions{" "}
          <em>in conjunction</em> with our{" "}
          <code>Grand Financial Bubble Metric</code> allows for powerful
          insights - if markets are uncertain about the near-term{" "}
          <strong>and</strong> markets are structurally unsound, or have been
          growing beyond potential, then it is likely that future growth prospects
          are weak.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With that said, let's inspect interest rates and the "10-2" Yield
          spread:
        </p>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-35-1.png`}
          alt="Interest Rate Analysis"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          As we can see from our plots, real equity returns tend to be negative
          following yield curve inversions. We can also see that the Fed, when
          possible, drops interest rates to stimulate the economy. However, we
          notice that it cannot afford to do so when a) inflation is out of
          control and/or b) when rates are already at 0%. These scenarios are
          structurally different and are therefore worth investigating in depth,
          but we will not discuss that here.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's overlay the time periods when the yield curve was inverted to our{" "}
          <code>Grand Financial Bubble Metric</code>:
        </p>
        <ClickableImage
          src={`${IMG}/unnamed-chunk-36-1.png`}
          alt="Grand FBM with Yield Curve Inversions"
          caption="Dots at the bottom indicate Yield Curve Inversion periods."
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          As we can see, looking at yield curve inversions in conjunction with
          our <code>Grand Financial Bubble Metric</code> is somewhat helpful in
          informing the user on the formation of financial bubbles, sector equity
          performance, and possible asset allocation decisions. I would like to
          highlight that the above is a{" "}
          <em>rough framework (that can be greatly improved)</em> and that much
          more analysis should be conducted before making a possible investment
          decision. While our framework may aid in sector allocation decisions, a
          savvy investor will then pursue company-specific analysis that either
          supports or opposes their thesis.
        </p>
      </ArticleSection>

      {/* Additional Areas */}
      <ArticleSection id="additional-areas" title="Additional Areas of Explanation & Possible Amendments">
        <p className="text-muted-foreground leading-relaxed mb-4">
          This article scratches the surface of possible ways to identify
          financial bubbles and can be drastically improved. A few points worth
          noting include:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-4">
          <li>
            Calculating our <code>Price Metric</code> & <code>Debt Metric</code>{" "}
            with rolling averages (or medians) rather than using distance from
            the population median (similar to our <code>IPO Metric</code>). The
            above is <em>an examination of history, not an attempt at building a
            predictive model</em>. Because of this, I used all available data to
            calculate the <code>Price Metric</code> &{" "}
            <code>Debt Metric</code>, which involved calculating distance from
            the median of all years. In the long-run, this method is acceptable
            for predictability purposes if we assume that these metrics are
            stationary and cyclical in nature (which implies the assumption that
            market dynamics are the same through time), and that we have enough
            data. However, this would not have been the case in 2000, where we
            would only have had 6 years of data to assess, and metrics cannot yet
            be considered cyclical. The investigation of the rolling average (or
            median) growth rate of these metrics, rather than absolute level, is
            also worthwhile.
          </li>
          <li>
            Increasing the frequency of the data is likely to be extremely
            worthwhile. In the above, our <code>Price Metric</code> &{" "}
            <code>Debt Metric</code> were calculated at yearly intervals (unlike
            our <code>IPO Metric</code> which could be calculated monthly)
            because I gathered yearly figures from the financial statements of
            the constituents of the Russell 3000 Index. However, much can change
            in the span of a year, and repeating the above at a quarterly
            frequency is likely to paint a clearer picture in our illustrations.
          </li>
          <li>
            The logical, qualitative narrative we built around the formation of
            bubbles is extremely simplistic and can be improved. As such, there
            are many additional quantitative 'metrics' that could be created to
            measure and explain this narrative.
          </li>
          <li>
            For simplicity (and lack of data), we inspected the "10-2" Yield
            Spread on TBonds as a catalyst for the 'popping' of a financial
            bubble, but it is likely beneficial to inspect corporate yield
            spreads at the sector level. Again, it is also important to
            understand the first, second, and third order effects that monetary
            tightening may have on the key entities within each sector, which was
            not done here.
          </li>
          <li>
            Improving sector knowledge and building sector-specific models would
            be tremendously worthwhile, especially when used in conjunction with
            our broader <code>Grand Financial Bubble Metric</code>.
          </li>
        </ul>
      </ArticleSection>

      {/* Takeaways */}
      <ArticleSection id="takeaways" title="An Overarching Takeaway">
        <p className="text-muted-foreground leading-relaxed mb-4">
          I think the above examination of history hints at an over-arching
          principle that applies to every facet of life -{" "}
          <em>everything has an optimal growth rate</em>. Whether it's a single
          company, the global economy, or even an individual's ability to learn a
          topic - there is an optimal, healthy rate of progress that is
          predicated upon the underlying nature and quality of the system.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the case of a single company, that rate of progress is a function of
          the quality of the workers, their abilities, location, tools, team
          chemistry, and so on. In the short-run, it is possible to grow beyond
          optimal; perhaps a company mandates overtime work, which will boost
          growth in the near-term, but if continued, this will adversely affect
          long-term growth, as employees will find suitable work elsewhere. In
          the case of an individual's learning ability, optimal growth is a
          function of sleep quality, nutritional intake, time spent studying, and
          numerous other factors. Again, in the short-run, progress can be
          artificially inflated; perhaps the individual sacrifices sleep to study,
          which will boost learning-ability in the short-run, but this rate of
          learning is obviously unsustainable.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With that said, an entity's optimal growth rate can obviously change
          with time, as the nature and the quality of the underlying system
          change - and it is an analyst's job to identify when and why this
          occurs.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Again, it is my perspective that this idea of an 'optimal growth rate'
          is applicable to any subject, including investing. If we can understand
          an investment's optimal growth rate, its current deviation from this
          growth rate, and the reasons for this deviation - then we have the
          ability to capitalize on these deviations and inefficiencies with the
          correct strategies and tactics.
        </p>
        <p className="text-muted-foreground leading-relaxed italic">
          The above is intended as an exploration of historical data, and all
          statements and opinions are expressly my own; neither should be
          construed as investment advice.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
