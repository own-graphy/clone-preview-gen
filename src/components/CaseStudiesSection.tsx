
import React from "react";

const CASES = [
  {
    company: "TechGrowth Inc.",
    result: "Expanded to three new regions, increasing revenue by 150%.",
    bg: "bg-gradient-to-r from-blue-100 to-blue-300",
  },
  {
    company: "Precision Manufacturing",
    result: "Reduced operational costs by 18% in 4 months.",
    bg: "bg-gradient-to-r from-green-100 to-green-300",
  },
  {
    company: "GreenLife Solutions",
    result: "Doubled client base through market repositioning.",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-300",
  },
  {
    company: "Urban Eats",
    result: "Optimized supply chain, increasing margins by 25%.",
    bg: "bg-gradient-to-r from-pink-100 to-pink-300",
  },
];

const CaseStudiesSection: React.FC<{ short?: boolean }> = ({ short }) => (
  <div className="grid md:grid-cols-2 gap-8">
    {(short ? CASES.slice(0, 2) : CASES).map(cs => (
      <div key={cs.company} className={`rounded-xl shadow p-6 ${cs.bg}`}>
        <h4 className="font-bold text-lg mb-2">{cs.company}</h4>
        <p className="text-gray-700">{cs.result}</p>
      </div>
    ))}
  </div>
);

export default CaseStudiesSection;
