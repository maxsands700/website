import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { ClickableImage } from "@/components/ClickableImage";
import { MermaidChart } from "@/components/MermaidChart";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const meta: ArticleMeta = {
  title: "EPS Revision Breadth Analysis",
  author: "Max Sands",
  date: "February 5, 2023",
  description:
    "Identifying tops and bottoms in EPS Revision Breadth to distinguish periods of strong vs. weak equity returns.",
  previewImageUrl: "/articles/research/eps-revision/preview_image.jpeg",
  tocItems: [
    { id: "what-is", label: "What is EPS RB?" },
    { id: "thesis", label: "Thesis" },
    { id: "identifying", label: "Identifying Tops & Bottoms" },
    { id: "return-analysis", label: "Return Analysis" },
    { id: "active-portfolio", label: "Active Portfolio" },
    { id: "key-takeaways", label: "Key Takeaways" },
  ],
};

const decisionTreeChart = `graph TD
A("EPS RB < 10th Percentile?")-- No --> B["Not a Trough"]
B --> Z("Act accordingly...")
A -- Yes --> C("Does separate model indicate a Major Trough?")
C -- No --> D["Minor Trough"]
C -- Yes --> E["Major Trough"]
D --> F("Act accordingly...")
E --> G("Act accordingly...")`;

export default function EpsRevisionArticle() {
  return (
    <ArticleLayout meta={meta}>
      {/* What is EPS Revision Breadth? */}
      <ArticleSection id="what-is" title="What is EPS Revision Breadth?">
        <p className="text-muted-foreground leading-relaxed mb-4">
          EPS Revision Breadth is a financial metric that measures the number of
          upward (positive) and downward (negative) revisions to earnings per
          share (EPS) estimates by analysts. It is calculated as the difference
          between the number of positive and negative revisions divided by the
          total number of revisions made.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          So, if we consider 30 analysts, 20 of whom revised their earnings
          estimates upwards, and 10 of whom revised their earnings downwards,
          this would yield an EPS Revision Breadth of 33%.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This metric is important because it provides insight into the market's
          confidence in a company's earnings. A high breadth of positive
          revisions indicates that analysts are becoming more optimistic, which
          can be a sign of increased investor confidence. Conversely, a high
          breadth of negative revisions can indicate declining investor
          confidence. In the following, we will investigate EPS Revision Breadth
          for the SP500 as a whole.
        </p>
      </ArticleSection>

      {/* Thesis */}
      <ArticleSection id="thesis" title="Thesis">
        <p className="text-muted-foreground leading-relaxed font-medium">
          Identifying tops and bottoms in EPS Revision Breadth can aid in
          distinguishing periods of strong vs. weak equity returns.
        </p>
      </ArticleSection>

      {/* Identifying Tops & Bottoms */}
      <ArticleSection
        id="identifying"
        title="EPS Revisions: Identifying Tops & Bottoms"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Since this data is cyclical and stationary, we can attempt to identify
          tops and bottoms by partitioning the data into buckets based on its EPS
          Revision Breadth Value. The following chart highlights the top 10% in
          orange, and the bottom 10% in blue:
        </p>
        <ClickableImage
          src="/articles/research/eps-revision/eps_rb_time_series.png"
          alt="EPS Revision Breadth Time Series"
          caption="Major Troughs are shaded in red"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          We clearly need to address the fact that the troughs in 2008 and 2020
          (shaded in red) are systematically different from minor troughs like
          those in 2015. We categorize troughs into two groups:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
          <li>
            <strong>Minor Troughs</strong> that arise as a natural artifact of
            the business cycle
          </li>
          <li>
            <strong>Major Troughs</strong> that arise due to periods of extreme
            economic turbulence, typically after the popping of a financial
            bubble
          </li>
        </ol>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A basic decision tree could look as follows:
        </p>
        <MermaidChart chart={decisionTreeChart} className="my-4" />
      </ArticleSection>

      {/* Return Analysis */}
      <ArticleSection id="return-analysis" title="Return Analysis">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's identify average 1M, 3M, 6M, and 1YR returns, had you invested
          at points during a peak or trough in EPS RB:
        </p>
        <Tabs defaultValue="visual">
          <TabsList>
            <TabsTrigger value="visual">Visual</TabsTrigger>
            <TabsTrigger value="table-excl">
              Excl. Major Troughs
            </TabsTrigger>
            <TabsTrigger value="table-incl">
              Incl. Major Troughs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="visual">
            <ClickableImage
              src="/articles/research/eps-revision/returns_by_quantile.png"
              alt="Returns by Quantile"
              caption="Bar = Excluding Major Troughs, Point = Including Major Troughs"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="table-excl">
            <p className="text-muted-foreground leading-relaxed">
              Excluding Major Troughs: During times of lower EPS RB, returns are
              much lower than those during times when EPS RB is higher (for Time
              Horizons greater than 1 month).
            </p>
          </TabsContent>
          <TabsContent value="table-incl">
            <p className="text-muted-foreground leading-relaxed">
              Including Major Troughs: The pattern is similar but the extreme
              quantile returns are amplified, especially for the bottom quantiles
              during the 2008 GFC and 2020 Covid periods.
            </p>
          </TabsContent>
        </Tabs>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Main Takeaway
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          From what we have seen, we can establish these basic rules of thumb:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
          <li>
            When EPS Revision Breadth is below its 10th Percentile (~-28%), we
            should consider <strong>underweighting Equities</strong>
          </li>
          <li>
            When EPS Revision Breadth is above its 90th Percentile (~27%), we
            should consider <strong>overweighting Equities</strong>
          </li>
          <li>
            When EPS Revision Breadth is between these two values, weight
            Equities according to personal judgement
          </li>
        </ol>
      </ArticleSection>

      {/* Building an Active Portfolio */}
      <ArticleSection id="active-portfolio" title="Building an Active Portfolio">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's utilize our basic heuristics to build an active, long-only
          portfolio with asset class weights that vary according to EPS Revision
          Breadth. A sample allocation function could look as follows:
        </p>
        <ClickableImage
          src="/articles/research/eps-revision/prototype_allocation.png"
          alt="Prototype Allocation Function"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our function should be bounded between 0 and 1 on the y-axis. This is
          a characteristic of the sigmoid function:
        </p>
        <div className="bg-background/60 rounded-lg border border-border p-4 mb-4 text-center">
          <p className="text-foreground font-mono">
            f(x) = (1-c₃) / (1 + e^(-c₁(x - c₂))) + c₃
          </p>
        </div>
        <ClickableImage
          src="/articles/research/eps-revision/allocation_function.png"
          alt="Allocation Function (C1=20, C2=-7.5%, C3=0)"
          className="w-full mb-4"
        />

        <h3 className="text-lg font-semibold text-foreground mb-2">
          Portfolio Comparison
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's compare our active portfolio to a traditional 60/40 Portfolio, an
          SP500-only Portfolio, and a Fixed-Income-only portfolio:
        </p>
        <ClickableImage
          src="/articles/research/eps-revision/portfolio_comparison.png"
          alt="Portfolio Comparison"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our portfolio outperforms the traditional 60/40 Portfolio but
          under-performs the SP500 on a nominal basis. However, on a{" "}
          <em>risk-adjusted</em> basis, our Active Portfolio fares very well,
          yielding the most return per unit of risk.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          Course Correcting w/ Human Judgement
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          After course correcting during the Covid-19 period (increasing equity
          allocation to 75% since the market was acting irrationally), here is
          how our portfolio would have performed:
        </p>
        <ClickableImage
          src="/articles/research/eps-revision/modified_portfolio_comparison.png"
          alt="Modified Portfolio Comparison"
          className="w-full mb-4"
        />
        <Tabs defaultValue="return-summary">
          <TabsList>
            <TabsTrigger value="return-summary">Return Summary</TabsTrigger>
            <TabsTrigger value="allocation">Equity Allocation</TabsTrigger>
          </TabsList>
          <TabsContent value="return-summary">
            <p className="text-muted-foreground leading-relaxed">
              Now, our active portfolio barely under-performs the market while
              still mitigating risk, with the best risk-adjusted returns (highest
              Sharpe and Sortino ratios) among all four portfolios.
            </p>
          </TabsContent>
          <TabsContent value="allocation">
            <ClickableImage
              src="/articles/research/eps-revision/modified_equity_allocation.png"
              alt="Modified Equity Allocation over Time"
              className="w-full"
            />
          </TabsContent>
        </Tabs>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Modifying C1 & C2
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We can adjust the parameters depending on the risk appetite of the
          investor. C1 represents sensitivity to changes in EPS Revision
          Breadth, C2 represents the EPS RB value that corresponds to a 50%
          equity allocation, and C3 represents a minimum equity allocation:
        </p>
        <ClickableImage
          src="/articles/research/eps-revision/sigmoid.png"
          alt="Sigmoid Function Parameters"
          className="w-full mb-4"
        />
        <ClickableImage
          src="/articles/research/eps-revision/modified_allocation_function.png"
          alt="Modified Allocation Function (C1=10, C2=-7.5%, C3=40%)"
          className="w-full"
        />
      </ArticleSection>

      {/* Key Takeaways */}
      <ArticleSection id="key-takeaways" title="Key Takeaways">
        <p className="text-muted-foreground leading-relaxed mb-4">
          EPS Revision Breadth is a useful financial metric that reflects general
          market sentiment, which can help an investor position their portfolio
          accordingly. The above can be extended to each sector within the SP500,
          allowing for dynamic sector allocation over time.
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
