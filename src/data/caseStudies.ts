
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "revenue",
    title: "3X Revenue",
    description: "How we helped a retail client triple their revenue in just 18 months.",
    fullDescription: "Our strategic approach involved a complete overhaul of the client's sales funnel, implementation of data-driven marketing campaigns, and optimization of their pricing strategy. By focusing on high-value customer segments and improving conversion rates at each stage of the customer journey, we were able to achieve a 300% increase in revenue within 18 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cost-reduction",
    title: "10%-20% Sales Cost Reduction",
    description: "Optimizing sales processes for a manufacturing firm.",
    fullDescription: "Through a detailed analysis of the sales process, we identified inefficiencies in resource allocation, redundant steps, and opportunities for automation. By streamlining the sales workflow and implementing targeted technology solutions, we reduced sales operational costs by 17.5% while simultaneously increasing sales team productivity by 22%.",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "market-penetration",
    title: "Increased Market Penetration",
    description: "Expanding into new markets with targeted strategies.",
    fullDescription: "Our client needed to expand beyond their existing market but lacked the data and strategy to do so effectively. We conducted comprehensive market analysis, identified high-potential segments, and developed a tailored entry strategy. Within one year, the client successfully established presence in three new regional markets, capturing an average of 12% market share in each.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "brand-awareness",
    title: "Brand Awareness",
    description: "Building recognition and trust in competitive markets.",
    fullDescription: "For this emerging tech startup, we developed a comprehensive brand strategy focusing on their unique value proposition. Through strategic content marketing, industry partnerships, and targeted PR campaigns, we increased brand recognition by 155% and improved positive sentiment scores by 43% within 12 months, positioning them as thought leaders in their niche.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "multichannel",
    title: "Multichannel Presence",
    description: "Creating an integrated omnichannel customer experience.",
    fullDescription: "Our client struggled with disconnected customer experiences across different channels. We implemented an integrated omnichannel strategy, unifying customer data and creating seamless transitions between online, mobile, and physical touchpoints. The result was a 78% increase in cross-channel customer engagement and a 45% improvement in customer retention rates.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "ebitda",
    title: "2X EBITDA",
    description: "Doubling earnings before interest, taxes, depreciation & amortization.",
    fullDescription: "This mid-sized manufacturing business was struggling with profitability despite strong revenue. We conducted a comprehensive operational and financial analysis, identifying key inefficiencies in production processes, supply chain management, and financial controls. Our implementation plan resulted in doubling EBITDA within 24 months while creating sustainable systems for continued profitability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  }
];
