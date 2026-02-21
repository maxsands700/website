import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { ClickableImage } from "@/components/ClickableImage";

const meta: ArticleMeta = {
  title: "A Case for Equities: Bull vs. Bear?",
  author: "Max Sands",
  date: "June 18, 2023",
  description:
    "The recent U.S. equity market environment has been a unique one - with a strong narrow rally in the face of macroeconomic uncertainty, and a market drawdown the previous year.",
  previewImageUrl: "/articles/research/bull-vs-bear/preview_image.jpeg",
  tocItems: [
    { id: "intro", label: "Intro" },
    { id: "bear-case", label: "The Bear Case" },
    { id: "valuations", label: "Valuations & ERP" },
    { id: "bull-case", label: "The Bull Case" },
  ],
};

export default function BullVsBearArticle() {
  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection id="intro" title="Intro">
        <p className="text-muted-foreground leading-relaxed mb-4">
          In 2022, the U.S. equity markets - inflated by exorbitant Quantitative
          Easing and financial stimulation due to the Covid-19 pandemic -
          suffered as the bubble eventually popped. As expected, the areas that
          had seen the most rapid increase in prices (in this case, the 'Growth'
          sectors like Tech) also saw the most severe draw-down:
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/2022_drawdown.png"
          alt="2022 Market Drawdown"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          However, the start of 2023 marks the beginning of an odd rally in U.S.
          Equity markets. The top 8 names in the SP500 have rallied{" "}
          <em>significantly</em> since the start of the year, whereas the
          remaining companies in the SP500 have flat-lined.
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/narrow_rally.png"
          alt="2023 Narrow Rally"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          This begs the question:{" "}
          <em>
            how long can the rally continue, and what does the medium-term
            future look like for U.S. Equities?
          </em>
        </p>
      </ArticleSection>

      {/* The Bear Case */}
      <ArticleSection id="bear-case" title="The Bear Case">
        <p className="text-muted-foreground leading-relaxed mb-4">
          While there are many reasons that may bolster the argument for a bear
          case, we will cover the following two in-depth:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
          <li>
            <strong>Relative Valuations & the Equity Risk Premium:</strong>{" "}
            <em>
              Valuations are still high and the risk-to-reward ratio for Equities
              is not attractive, especially when compared to other assets...
            </em>
          </li>
          <li>
            <strong>Macroeconomic Uncertainty:</strong>{" "}
            <em>
              The future macroeconomic landscape is hazy; consensus indicates a
              near-term recession, and relations between U.S. & China are
              becoming increasingly tenuous...
            </em>
          </li>
        </ol>
      </ArticleSection>

      {/* Relative Valuations & ERP */}
      <ArticleSection id="valuations" title="Relative Valuations & ERP">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Perhaps the most clear argument for a bear case is that valuations are
          still high. If we perform a simple breakdown of the valuations for the
          companies in the SP500, we notice that the implied yield is relatively
          low. Even if we exclude the top 8 companies, the implied yield of 6.5%
          is low in relation to the current 1-year TBill rate of approximately
          5.3%.
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/sp500_implied_yield.png"
          alt="SP500 Implied Yield"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Therefore, let's compare the implied yield on Equities to the yields
          on High Yield Debt and Investment Grade Debt across different
          hypothetical scenarios:
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/simple_scenarios.png"
          alt="Simple Scenarios - Yield Comparison"
          caption="IG Debt refers to 1-Year TBill"
          className="w-full mb-4"
        />
        <ClickableImage
          src="/articles/research/bull-vs-bear/sp500_ntm_pe_chart.png"
          alt="SP500 NTM P/E"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          When comparing nominal yields, we notice that High Yield Debt and
          1-year TBills appear much more attractive than Equities. Even after
          adjusting the Yield-to-Worst with hypothetical default rates, High
          Yield Debt seems to be a suitable alternative to Equities.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          However, many individuals would refute the above by claiming that,
          while, in the long-run, implied yield may equate to long-run equity
          returns, this one-to-one relationship has not held in recent history.
          In light of this rebuttal, let's adjust the implied yield with an
          artificial <code>Return Yield-Gap Factor</code>:
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/return_yield_gap.png"
          alt="Return Yield-Gap Factor"
          className="w-full mb-4"
        />
        <ClickableImage
          src="/articles/research/bull-vs-bear/adjusted_scenarios.png"
          alt="Adjusted Scenarios"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Even after adjusting for the artificial{" "}
          <code>Return Yield-Gap Factor</code> we notice that Equities only seem
          attractive in the most optimistic scenario where we use the Implied
          Yield <em>excluding the top 8 companies</em> and the most generous{" "}
          <code>Return Yield-Gap Factor</code> of 1.69x which implies that we
          expect a similar growth economy to that of the past 30 years.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The illustration below compares U.S. Equity performance to that of
          U.S. High Yield Debt - performance has been relatively similar, with
          less volatility occurring in debt markets:
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/historical_performance.png"
          alt="Historical Performance Comparison"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          Moreover, we note that, historically, value investing has consistently
          delivered strong returns; as we can see below, investors are typically
          rewarded for investing when implied earnings yields are high (i.e. at
          low valuations):
        </p>
        <ClickableImage
          src="/articles/research/bull-vs-bear/value_investing.png"
          alt="Basis of Value Investing"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          In addition to high valuations, the current earnings environment is
          not extremely favorable. From the chart below, we can see that while
          valuations have increased since the start of 2023, analyst consensus
          NTM earnings estimates (adjusted for inflation)...
        </p>
      </ArticleSection>

      {/* The Bull Case - WIP / Blurred */}
      <ArticleSection id="bull-case" title="The Bull Case">
        <div className="relative">
          <div className="blur-sm select-none pointer-events-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              ...have declined.
            </p>
            <ClickableImage
              src="/articles/research/bull-vs-bear/current_environment_snapshot.png"
              alt="Current Environment Snapshot"
              className="w-full mb-4"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              If we consider that there are 4 investing environments that can
              occur and investigate how the SP500 behaves in these environments,
              we can see that...
            </p>
            <ClickableImage
              src="/articles/research/bull-vs-bear/4_environments.png"
              alt="4 Investing Environments"
              className="w-full mb-4"
            />
            <ClickableImage
              src="/articles/research/bull-vs-bear/erp_chart.png"
              alt="Equity Risk Premium Analysis"
              className="w-full mb-4"
            />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Macroeconomic Uncertainty
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              The Bull Case
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
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
