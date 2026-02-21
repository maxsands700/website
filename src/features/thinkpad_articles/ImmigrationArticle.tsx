import {
  ArticleLayout,
  ArticleSection,
  type ArticleMeta,
} from "@/components/ArticleLayout";
import { MermaidChart } from "@/components/MermaidChart";

const meta: ArticleMeta = {
  title: "U.S. Immigration & Border Control",
  author: "Max Sands",
  date: "February 28, 2024",
  description:
    "A deep dive into current U.S. immigration policy from first principles, and my thoughts for improvements.",
  tocItems: [
    { id: "first-principles", label: "First Principles" },
    { id: "thought-experiment", label: "Thought Experiment" },
    { id: "decision-map", label: "Basic Decision Map" },
    { id: "experiment-notes", label: "Experiment Notes" },
    { id: "scorecard", label: "The Scorecard" },
    { id: "assessing", label: "Assessing U.S. Policy" },
  ],
};

const decisionMapChart = `graph TD;
    A[Potential Inhabitant applies for entry] --> B(Applicant demonstrates Ethos alignment);
    B -->|Yes| C(Applicant provides a Net Benefit to society);
    C -->|Yes| D(The Household's Spatial Capacity allows for admittance);
    D -->|Yes| Y{Grant Entry};
    C -->|No| CA(Applicant is a refugee seeking asylum);
    CA -->|Yes| CB(Household's Financial Capacity allows for admittance);
    CA -->|No| Z;
    CB -->|Yes| D;
    CB -->|No| Z;
    D -->|No| Z;
    B -->|No| Z{Deny Entry};

    style B fill:#3da892,stroke:#2d8a7a,stroke-width:2px;
    style C fill:#7fc4b8,stroke:#2d8a7a,stroke-width:2px;
    style CB fill:#7fc4b8,stroke:#2d8a7a,stroke-width:2px;
    style D fill:#c8e8e2,stroke:#2d8a7a,stroke-width:2px;`;

export default function ImmigrationArticle() {
  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection>
        <p className="text-muted-foreground leading-relaxed">
          Prior to diving into the facts and statistics around U.S. immigration
          policy, I will take a first principles approach at outlining what I
          deem as an effective immigration policy. After this thought
          experiment, I will delve into the current state of U.S. immigration
          and immigration policy and compare them to those of other countries.
        </p>
      </ArticleSection>

      {/* First Principles */}
      <ArticleSection id="first-principles" title="First Principles">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Running a government is analogous to running a household, albeit on a
          much larger scale. As such, let's imagine how we would want
          immigration to play out in our household microcosm...
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Let's imagine we live on a large, gated property, and there is a line
          of people at the front gates, asking to live on our property. Here are
          the factors I would consider when deciding if these people can live on
          our property:
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">
          Admittance Criteria
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            {
              num: "1",
              title: "Ethos Alignment",
              desc: "Does the additional inhabitant's values and ethos align with those of the broader household?",
            },
            {
              num: "2",
              title: "Financial Capacity",
              desc: "Can the household financially support the additional inhabitant and what is the inhabitant's net benefit to our property?",
            },
            {
              num: "3",
              title: "Spatial Capacity",
              desc: "Is there enough room for the additional inhabitant?",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-lg border border-border bg-background/60 p-4"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-primary font-bold text-lg">
                  {item.num}.
                </span>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">
          Prerequisite Information
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Given our criteria, in order for us to make an informed admittance
          decision, we need to be informed of:
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1">
          <li>
            Our household's current spatial and financial situation, as well as
            our extant ethos.
          </li>
          <li>The potential inhabitant's "financial situation" and ethos.</li>
        </ol>
      </ArticleSection>

      {/* Thought Experiment */}
      <ArticleSection
        id="thought-experiment"
        title="Thought Experiment — Building out the Analogy"
      >
        {/* 1. Ethos Alignment */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          1. Ethos Alignment
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Out of self-interest and the well-being of my property and its current
          inhabitants, I would <strong>only</strong> want to{" "}
          <strong>admit immigrants that embody the household ethos</strong>.
          Therefore, applicants with a recent history of violence, crime, or any
          other conduct that violates the household ethos should always be
          rejected.
        </p>

        {/* 2. Financial Capacity */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          2. Financial Capacity
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the <em>majority</em> <strong>of cases, an applicant</strong>{" "}
          should{" "}
          <strong>
            only be admitted if they provide a net benefit to the household
          </strong>
          . Let's imagine that next in line at our front gates is a farmer. Our
          perceived value of the farmer depends on the mismatch of supply and
          demand for farming skills in our household. If our household is
          short-staffed for farmers, then the marginal benefit of an additional
          farmer is large. On the other hand, if there is no supply-demand
          mismatch for farming skills in our household, then the benefit of an
          additional farmer is negligible.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Moreover, let's imagine that, after assessing our current
          supply-demand gap, we agree that an additional farmer is beneficial
          for our household. If we then place our farmer in the{" "}
          <em>mechanic's</em> quarters with no mode of transportation to the
          crop fields, the value of the additional farmer is rendered null.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          While this is an overly simple analogy, it demonstrates that{" "}
          <strong>an entrant's benefit to society is dependent on:</strong>
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-1 mb-4">
          <li>
            <strong>
              The supply-demand mismatch for that entrant's skills
            </strong>
          </li>
          <li>
            <strong>The entrant's environment</strong>
          </li>
        </ol>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our analogy also crucially demonstrates that{" "}
          <strong>
            in order for any immigration policy to be effective, it must be able
            to allocate human capital efficiently
          </strong>
          . As such, the{" "}
          <strong>
            household must always be aware of the supply-demand mismatch in
            localized environments
          </strong>
          , and <strong>have the ability to transport the entrant</strong> to
          the environment.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          There are a <em>minority</em> <strong>of cases</strong> where an{" "}
          <strong>
            applicant should be admitted, even if they do not provide a net
            benefit
          </strong>{" "}
          to the household. Applicants seeking <strong>asylum or refuge</strong>{" "}
          from an abusive household should be allowed entry,{" "}
          <strong>granted that</strong> they{" "}
          <strong>adhere to the household's ethos</strong>, and the{" "}
          <strong>
            household has sufficient financial capacity to shelter them
          </strong>
          . However, it is unlikely that a household could harbor all refugees
          at any point in time. Therefore, it is likely that a quota would be
          necessary; the quota should be a function of current and projected
          profitability of the household.
        </p>

        {/* 3. Spatial Capacity */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          3. Spatial Capacity
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Lastly, an applicant can only be admitted if there is enough space for
          the applicant in his designated environment.
        </p>
      </ArticleSection>

      {/* Basic Decision Map */}
      <ArticleSection id="decision-map" title="Basic Decision Map">
        <MermaidChart chart={decisionMapChart} className="my-4" />
      </ArticleSection>

      {/* Thought Experiment Notes */}
      <ArticleSection id="experiment-notes" title="Thought Experiment Notes">
        {/* Purpose */}
        <h3 className="text-lg font-semibold text-foreground mb-2">Purpose</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The purpose of the Household thought experiment is to establish a
          basic, universal framework for assessing whether an immigrant should
          be granted admission into a country. It does not dive into the
          specifics of how these criteria should be calculated; it does not
          discuss the merits of possible tenants for a nation's ethos, nor does
          it explicitly provide a method for assessing an individual's benefit
          to society, etc. Obviously, these topics are more subjective and
          deserve their own research. However, the specifics of these criteria
          do not detract from the importance of the core framework.
        </p>

        {/* Assumptions */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Assumptions
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Our thought experiment and framework make two important implicit
          assumptions.
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            Our household has a <strong>controlled</strong> border.
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                Without a controlled border, the entire thought experiment and
                framework is rendered void.
              </li>
            </ul>
          </li>
          <li>
            Our household has the ability to transport admittees to their
            designated environment.
          </li>
        </ol>

        {/* Interesting Tangents */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Interesting Tangents
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          In thinking through our analogy, it is clear that the alignment
          between individual ethos and societal ethos is critical. Therefore,
          there should exist an institution specifically devoted to the reform
          of individuals with a misaligned ethos. After a proper and reasonable
          attempt, if this institution fails in its goal of individual reform,
          there should be a clear revocation and banishment process for current
          nationals who violate the societal ethos.
        </p>
      </ArticleSection>

      {/* The Scorecard */}
      <ArticleSection id="scorecard" title="The Scorecard">
        <p className="text-muted-foreground leading-relaxed mb-4">
          From our thought experiment, we can create a scorecard to determine
          how strong a country's immigration policy is, according to our
          framework:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">
                  Criteria
                </th>
                <th className="text-center py-3 px-4 text-foreground font-semibold w-24">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-3 px-4">
                  The Nation has a <strong>controlled</strong> border
                </td>
                <td className="py-3 px-4 text-center font-bold">---</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">
                  <p>The Nation:</p>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Includes ethos alignment in admittance process</li>
                    <li>
                      Has a clearly defined process for establishing ethos
                      alignment
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-center font-bold">---</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">
                  <p>The Nation:</p>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>
                      Is aware of localized supply-demand mismatches of human
                      capital
                    </li>
                    <li>
                      Has a clearly defined process for utilizing the above to
                      assess an applicant's potential benefit to society
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-center font-bold">---</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">
                  The Nation is aware of capacity constraints and incorporates
                  this in admittance process
                </td>
                <td className="py-3 px-4 text-center font-bold">---</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">
                  The Nation is able to transport the immigrant to a
                  utility-maximizing environment
                </td>
                <td className="py-3 px-4 text-center font-bold">---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      {/* Assessing U.S. Immigration Policy — WIP */}
      <ArticleSection id="assessing" title="Assessing U.S. Immigration Policy">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Now that we have a scorecard, we can assess the current state of U.S.
          immigration policy.
        </p>

        <div className="relative">
          {/* Blurred WIP content */}
          <div className="blur-sm select-none pointer-events-none">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              1. A Controlled Border
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Let's investigate the state of the U.S. border.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The United States's border has two key sections: the US-Canada &
              US-Mexico borders:
            </p>
            <img
              src="/articles/thinkpad/immigration/united_states_borders.png"
              alt="United States Borders"
              className="rounded-lg mb-4 max-w-full mx-auto"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              While the US-Canada border is longer, the majority of recorded
              border encounters by the U.S. Customs and Border Protection (CBP)
              occurs along the US-Mexico border:
            </p>
            <img
              src="/articles/thinkpad/immigration/historical_border_encounters.png"
              alt="Historical Border Encounters"
              className="rounded-lg max-w-full mx-auto"
            />
          </div>

          {/* WIP overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-semibold text-primary">
              Work in Progress
            </span>
          </div>
        </div>
      </ArticleSection>
    </ArticleLayout>
  );
}
