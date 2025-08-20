
import React from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Top header */}
      {/* <Header /> */}

      {/* Main visualizer area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <SortingVisualizer />
      </main>
    </div>
  );
}
