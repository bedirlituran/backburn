// src/components/PaketCard.jsx
import React from 'react';

const PaketCard = ({ speed, price, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{speed} Mbps</h2>
      <p className="text-gray-600 text-lg font-semibold mb-4">{price} AZN / ay</p>
      
      <ul className="text-gray-700 mb-6 space-y-2">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            ✅ <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold">
        İndi Başvur
      </button>
    </div>
  );
};

export default PaketCard;
