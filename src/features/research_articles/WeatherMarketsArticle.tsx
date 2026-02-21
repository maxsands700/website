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
  title: "Weather & the Stock Market",
  author: "Max Sands",
  date: "December 22, 2022",
  description:
    "An investigation into whether weather conditions in New York have any noticeable impact on daily stock market returns.",
  previewImageUrl: "/articles/research/weather-markets/preview_image.webp",
  tocItems: [
    { id: "intro", label: "Intro" },
    { id: "data", label: "Data" },
    { id: "exploring", label: "Exploring the Data" },
    { id: "weather-impact", label: "Weather Impact" },
    { id: "temp-impact", label: "Temperature Impact" },
    { id: "modelling", label: "Simple Modelling" },
    { id: "final-remarks", label: "Final Remarks" },
  ],
};

const months = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
  { value: "may", label: "May" },
  { value: "jun", label: "June" },
  { value: "jul", label: "July" },
  { value: "aug", label: "August" },
  { value: "sep", label: "September" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "dec", label: "December" },
];

const variableDefinitions = [
  { name: "Tod", def: "The time of day (Morning, Midday, Afternoon)." },
  { name: "Temp", def: "The temperature in degrees Fahrenheit." },
  {
    name: "Visibility",
    def: "The maximum distance at which an object can clearly be discerned.",
  },
  {
    name: "Dew Point",
    def: "The minimum threshold temperature that results in a relative humidity level of 100%.",
  },
  {
    name: "Feels Like",
    def: "A measure of how hot/cold it feels like outside when accounting for other variables like wind chill, humidity, etc.",
  },
  {
    name: "Temp Min / Max",
    def: "The minimum/maximum temperature during the associated time stamp.",
  },
  {
    name: "Pressure",
    def: "The weight of the air. High air pressure is associated with calm weather; low air pressure with active weather conditions.",
  },
  { name: "Humidity", def: "The amount of water vapor in the air." },
  { name: "Wind Speed", def: "The speed of the wind in miles per hour." },
  {
    name: "Wind Deg",
    def: "The direction of the wind in circular degrees.",
  },
  { name: "Clouds All", def: "Cloudiness of the sky in percent." },
  {
    name: "Weather Main",
    def: "The Primary Weather Category (Snow, Rain, Clouds, Clear, etc.).",
  },
];

export default function WeatherMarketsArticle() {
  const [weatherMonth, setWeatherMonth] = useState("jan");
  const [tempMonth, setTempMonth] = useState("jan");

  return (
    <ArticleLayout meta={meta}>
      {/* Intro */}
      <ArticleSection id="intro">
        <p className="text-muted-foreground leading-relaxed">
          In recent years, behavioral finance - the field of study that combines
          psychology and economics to better understand financial decision making
          - has grown in popularity. There have been many studies that prove the
          irrationality of human decision-making processes due to psychological
          and emotional factors. With this in mind, we will investigate if
          weather conditions in New York have any noticeable impact on daily
          stock market returns.
        </p>
      </ArticleSection>

      {/* Data */}
      <ArticleSection id="data" title="Data">
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

      {/* Exploring the Data */}
      <ArticleSection id="exploring" title="Exploring the Data">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          SP500 Returns
        </h3>
        <ClickableImage
          src="/articles/research/weather-markets/sp500_returns.png"
          alt="SP500 Daily Returns"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed mb-4">
          There are several days with extreme returns; on October 19, 1987
          ('Black Monday') the market declined by approximately 22%, and in
          March of 2020 the stock market dipped from Covid-19. While these events
          are extremely important historically, it is unlikely that the weather
          contributed significantly to these extreme returns. Therefore, we will
          consider days like these to be outliers:
        </p>
        <ClickableImage
          src="/articles/research/weather-markets/sp500_returns_outliers.png"
          alt="SP500 Returns with Outlier Detection"
          className="w-full mb-4"
        />
        <p className="text-muted-foreground leading-relaxed">
          Going forward, we will solely use the non-outlier data points.
        </p>
      </ArticleSection>

      {/* Weather Impact */}
      <ArticleSection id="weather-impact" title="The Impact of the Weather">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's examine the returns on days with different morning weather
          conditions for each month:
        </p>
        <div className="mb-4">
          <Select value={weatherMonth} onValueChange={setWeatherMonth}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`/articles/research/weather-markets/weather_impact_${weatherMonth}.png`}
          alt={`Weather Impact - ${months.find((m) => m.value === weatherMonth)?.label}`}
          caption="Black lines represent the average of the group; the red line represents the average across all groups"
          className="w-full"
        />
        <p className="text-muted-foreground leading-relaxed mt-4">
          As we can see from the plots, each of the distributions are relatively
          similar for different morning weather conditions. Therefore, morning
          weather seems to have little effect on the distribution of daily stock
          market returns.
        </p>
      </ArticleSection>

      {/* Temperature Impact */}
      <ArticleSection
        id="temp-impact"
        title="The Impact of Temperature Differences"
      >
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's hypothesize that on days where it is colder than usual, returns
          are worse than days where it is warmer than usual. Let's see if the
          difference of "Feels Like" from that month's average yields any
          interesting results:
        </p>
        <div className="mb-4">
          <Select value={tempMonth} onValueChange={setTempMonth}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ClickableImage
          src={`/articles/research/weather-markets/temp_diff_${tempMonth}.png`}
          alt={`Temperature Difference Impact - ${months.find((m) => m.value === tempMonth)?.label}`}
          className="w-full"
        />
        <p className="text-muted-foreground leading-relaxed mt-4">
          Likewise, there is no evidence that variations in temperature can help
          explain daily stock returns.
        </p>
      </ArticleSection>

      {/* Simple Modelling */}
      <ArticleSection id="modelling" title="Simple Modelling - Linear Regression">
        <p className="text-muted-foreground leading-relaxed mb-4">
          From our brief analysis above, it seems unlikely that we will be able
          to use weather data to model stock market returns accurately, but let's
          run through a quick linear regression and examine the results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Once again, we confirm that the weather cannot help explain variation
          in daily stock returns (with our model only explaining 0.7%). In fact,
          the month of the year seems to be more significant than the weather
          when explaining daily stock return variation.
        </p>
      </ArticleSection>

      {/* Final Remarks */}
      <ArticleSection id="final-remarks" title="Final Remarks">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Evidently, there is no clear relationship between the weather and
          daily stock returns...
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
