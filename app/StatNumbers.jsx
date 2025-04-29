// src/components/StatNumbers.jsx
import React from 'react';

const stats = [
  { label: 'Müştəri sayı', value: '12.000+' },
  { label: 'Şəhər üzrə əhatə', value: '25+' },
  { label: 'Texniki mütəxəssis', value: '100+' },
  { label: 'İllik təcrübə', value: '10+' },
];

const StatNumbers = () => {
  return (
    <section className="bg-blue-700 py-16 text-white">
      <div className="container mx-auto px-6 text-center grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatNumbers;
