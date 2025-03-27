
import React from 'react';

interface MetricCardProps {
  number: string;
  label: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ number, label, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MetricCard;
