
import React from "react";

const FULL_TEXT = (
  <>
    <p className="mb-4">
      We are a team of passionate consultants, strategists, and technologists dedicated to helping MSMEs grow and thrive in today's competitive landscape. Our tailored approach ensures that every client gets actionable, measurable results.
    </p>
    <ul className="list-disc pl-6 text-gray-300 mb-4">
      <li>10+ years of consulting experience across multiple sectors</li>
      <li>Data-driven, proven methodologies</li>
      <li>100+ clients empowered for growth</li>
      <li>Focus on partnership and real results</li>
    </ul>
    <p>
      From operational excellence to market expansion, we take pride in seeing our clients succeed. Let's write your next success story together.
    </p>
  </>
);

const SHORT_TEXT = (
  <p>
    Tailored consulting for MSMEs, focusing on measurable growth, efficiency, and long-term impact.
  </p>
);

const AboutSection: React.FC<{ short?: boolean }> = ({ short }) => {
  return (
    <div>
      {short ? SHORT_TEXT : FULL_TEXT}
    </div>
  );
};

export default AboutSection;
