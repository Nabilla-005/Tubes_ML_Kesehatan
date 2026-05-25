import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { PCOSDetection } from "./components/PCOSDetection";
import { DiabetesDetection } from "./components/DiabetesDetection";
import { StrokeDetection } from "./components/StrokeDetection";
import { StuntingDetection } from "./components/StuntingDetection";
import { HeartDetection } from "./components/HeartDetection";
import { PredictionHistory } from "./components/PredictionHistory";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "pcos", Component: PCOSDetection },
      { path: "diabetes", Component: DiabetesDetection },
      { path: "stroke", Component: StrokeDetection },
      { path: "stunting", Component: StuntingDetection },
      { path: "heart", Component: HeartDetection },
      { path: "history", Component: PredictionHistory },
      { path: "about", Component: About },
    ],
  },
]);
