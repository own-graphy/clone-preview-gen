
import React, { useState } from "react";

type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  shortContent?: React.ReactNode;
};
const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, shortContent }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {(showMore || !shortContent) ? (
          <>
            {children}
            {shortContent && (
              <button
                className="mt-6 bg-primary text-white px-6 py-2 rounded-full"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            )}
          </>
        ) : (
          <>
            {shortContent}
            <button
              className="mt-6 bg-primary text-white px-6 py-2 rounded-full"
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper;
