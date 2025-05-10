
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Operational Excellence",
    desc: "Streamline operations and reduce costly inefficiencies with our proven methodologies.",
    icon: "🔄",
  },
  {
    title: "Revenue Growth",
    desc: "Boost your profits with strategies proven to work across various industry segments.",
    icon: "📈",
  },
  {
    title: "Market Expansion",
    desc: "Reach new customers, markets, and territories with data-driven expansion plans.",
    icon: "🌐",
  },
  {
    title: "Innovation & Technology",
    desc: "Adopt the best-fit tech to leap ahead of competitors and transform your business.",
    icon: "💡",
  },
  {
    title: "Business Transformation",
    desc: "Pivot and position your business for the future with comprehensive transformation.",
    icon: "🚀",
  },
];

const ServicesSection: React.FC<{ short?: boolean }> = ({ short }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {(short ? SERVICES.slice(0, 2) : SERVICES).map(service => (
      <Card 
        key={service.title} 
        className="bg-white hover:shadow-md transition-all duration-300 cursor-pointer group border border-primary/10 h-full"
      >
        <CardHeader className="pb-2">
          <div className="text-3xl mb-2">{service.icon}</div>
          <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{service.desc}</p>
          <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            Learn more <ArrowRight size={16} className="ml-1" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ServicesSection;
