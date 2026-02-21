import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout } from "@/components/RootLayout";
import { BackgroundLayout } from "@/components/BackgroundLayout";
import Home from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Articles from "@/pages/Articles";

const ImmigrationArticle = lazy(
  () => import("@/features/thinkpad_articles/ImmigrationArticle"),
);
const HighYieldArticle = lazy(
  () => import("@/features/research_articles/HighYieldArticle"),
);
const ManagementTradingArticle = lazy(
  () => import("@/features/research_articles/ManagementTradingArticle"),
);
const WeatherMarketsArticle = lazy(
  () => import("@/features/research_articles/WeatherMarketsArticle"),
);
const EpsRevisionArticle = lazy(
  () => import("@/features/research_articles/EpsRevisionArticle"),
);
const FinancialBubblesArticle = lazy(
  () => import("@/features/research_articles/FinancialBubblesArticle"),
);
const PeadArticle = lazy(
  () => import("@/features/research_articles/PeadArticle"),
);
const BullVsBearArticle = lazy(
  () => import("@/features/research_articles/BullVsBearArticle"),
);

export function App() {
  return (
    <TooltipProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<BackgroundLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/articles" element={<Articles />} />
            <Route
              path="/articles/thinkpad/immigration"
              element={
                <Suspense>
                  <ImmigrationArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/high-yield"
              element={
                <Suspense>
                  <HighYieldArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/management-trading"
              element={
                <Suspense>
                  <ManagementTradingArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/weather-markets"
              element={
                <Suspense>
                  <WeatherMarketsArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/eps-revision"
              element={
                <Suspense>
                  <EpsRevisionArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/financial-bubbles"
              element={
                <Suspense>
                  <FinancialBubblesArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/pead"
              element={
                <Suspense>
                  <PeadArticle />
                </Suspense>
              }
            />
            <Route
              path="/articles/research/bull-vs-bear"
              element={
                <Suspense>
                  <BullVsBearArticle />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </TooltipProvider>
  );
}

export default App;
