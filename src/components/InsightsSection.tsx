
import React from "react";
import ArticleCarousel from "./cards/ArticleCarousel";

const InsightsSection: React.FC = () => (
  <div>
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Latest Insights & Research</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Stay ahead with our latest thinking on business strategy, innovation, and industry trends.
      </p>
    </div>
    <ArticleCarousel />
  </div>
);

export default InsightsSection;
