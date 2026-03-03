import React from "react";
import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/landing-page";
import { QuizPage } from "./pages/quiz-page";
import { LoadingPage } from "./pages/loading-page";
import { ResultsPage } from "./pages/results-page";
import { ItineraryPage } from "./pages/itinerary-page";
import { PricingPage } from "./pages/pricing-page";
import { DashboardPage } from "./pages/dashboard-page";
import { LoginPage } from "./pages/login-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/itinerary",
    element: <ItineraryPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);