import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { ClickableImage } from "@/components/ClickableImage";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const meta: ArticleMeta = {
  title: "Management Trading",
  author: "Max Sands",
  date: "December 11, 2022",
  description:
    "An investigation into whether following management trading can provide superior investment returns.",
  previewImageUrl: "/articles/research/management-trading/preview_image.jpeg",
  tocItems: [
    { id: "intro", label: "Intro" },
    { id: "examining", label: "Examining the Data" },
    { id: "performance", label: "Performance Comparison" },
    { id: "final-remarks", label: "Final Remarks" },
  ],
};

const variableDefinitions = [
  {
    name: "screen_date",
    def: "The date where the computer filtered all companies that had management buy volume account for .01% (or more) of all trading volume in the week prior. Always a Saturday.",
  },
  {
    name: "date",
    def: "The date associated with the company's stock price (all other variables are constant).",
  },
  { name: "symbol", def: "The company's stock ticker." },
  { name: "short_name", def: "The company's name." },
  {
    name: "mgmt_buy_volume",
    def: "Management's proportion of trade volume.",
  },
  {
    name: "market_cap",
    def: "The company's current market value (number of shares × share price).",
  },
  {
    name: "p_e",
    def: "The company's Price-to-Earnings ratio (the amount of money paid for $1 of the company's earnings).",
  },
  {
    name: "total_return_ytd",
    def: "The Year-to-Date return on the company's stock.",
  },
  { name: "price", def: "The company's closing stock price." },
];

export default function ManagementTradingArticle() {
  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection id="intro">
        <p className="text-muted-foreground leading-relaxed mb-4">
          In this article we will investigate if following management trading can
          provide superior investment returns. To do this, I've gathered a list
          of all the U.S. companies wherein management accounted for .01% (or
          more) of all volume traded for that company's stock in the week prior.
          Other constraints, like a minimum company market capitalization, were
          also applied. I then retrieved each company's stock prices for the
          following 3 months.
        </p>
        <Tabs defaultValue="variables">
          <TabsList>
            <TabsTrigger value="variables">Variable Definitions</TabsTrigger>
          </TabsList>
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
                      <td className="py-3 px-4 font-mono text-xs whitespace-nowrap">
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

      {/* Examining the Data */}
      <ArticleSection id="examining" title="Examining the Data">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's dig into the data and get a feel for what we are looking at:
        </p>
        <ClickableImage
          src="/articles/research/management-trading/company_count_weekly.png"
          alt="Count of Companies - Weekly"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          As we can see, the weekly number of companies that adhere to our
          conditions gradually increase over time and rapidly increase after
          2020. Since we don't have many companies during 2000-2004, let's only
          use data from 2005 onwards:
        </p>
        <ClickableImage
          src="/articles/research/management-trading/company_count_yearly.png"
          alt="Count of Companies - Yearly"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          Let's continue forward and assess the performance of our filtered
          stocks relative to traditional index funds.
        </p>
      </ArticleSection>

      {/* Performance Comparison */}
      <ArticleSection id="performance" title="Performance Comparison">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's use the Russell 2000 Index and the SP500 Index as our
          benchmarks. We'll use ETFs as these are a better representation of
          actual investment performance:
        </p>
        <ClickableImage
          src="/articles/research/management-trading/benchmark_performance.png"
          alt="Benchmark ETF Performance"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Now we need to establish an investment horizon. Let's investigate the
          optimal holding period:
        </p>
        <ClickableImage
          src="/articles/research/management-trading/return_vs_horizon.png"
          alt="Average Return vs. Investment Horizon"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          We can already tell from the data that management clearly has some
          inside information; the average return for each of these companies
          after just 5 days is approximately 0.5%. If you invest $1 at this rate
          and compound at a weekly frequency over 52 weeks, you will have
          approximately $1.3 at the end of the year - a 30% yearly return while
          the SP500 averages 10%.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's pretend that we invest equally in these companies each week and
          compare our performance to the benchmarks:
        </p>
        <Tabs defaultValue="aggregate">
          <TabsList>
            <TabsTrigger value="aggregate">Aggregate</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="aggregate">
            <ClickableImage
              src="/articles/research/management-trading/aggregate_performance.png"
              alt="Aggregate Portfolio Performance"
              className="w-full"
            />
          </TabsContent>
          <TabsContent value="yearly">
            <ClickableImage
              src="/articles/research/management-trading/yearly_returns.png"
              alt="Yearly Portfolio Returns"
              className="w-full"
            />
          </TabsContent>
        </Tabs>
        <p className="text-muted-foreground leading-relaxed mt-4">
          It is obviously apparent, from the above, that following management
          trading can provide superior investment returns.
        </p>
      </ArticleSection>

      {/* Final Remarks */}
      <ArticleSection id="final-remarks">
        <p className="text-muted-foreground leading-relaxed italic">
          The above is intended as an exploration of historical data, and all
          statements and opinions are expressly my own; neither should be
          construed as investment advice.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
