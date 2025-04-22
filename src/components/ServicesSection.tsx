
import React from "react";

const SERVICES = [
  {
    title: "Operational Excellence",
    desc: "Streamline operations and reduce costly inefficiencies.",
  },
  {
    title: "Revenue Growth",
    desc: "Boost your profits with strategies proven to work.",
  },
  {
    title: "Market Expansion",
    desc: "Reach new customers, markets, and territories.",
  },
  {
    title: "Innovation & Technology",
    desc: "Adopt the best-fit tech to leap ahead of competitors.",
  },
  {
    title: "Business Transformation",
    desc: "Pivot and position your business for the future.",
  },
];

const ServicesSection: React.FC<{ short?: boolean }> = ({ short }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {(short ? SERVICES.slice(0, 2) : SERVICES).map(service => (
      <div key={service.title} className="bg-white/90 rounded-lg shadow p-6 border border-primary/10">
        <h3 className="font-bold text-lg mb-2 text-primary">{service.title}</h3>
        <p className="text-gray-700">{service.desc}</p>
      </div>
    ))}
  </div>
);

export default ServicesSection;
