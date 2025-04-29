// src/components/Avantajlar.jsx
import React from 'react';
import { ShieldCheck, Clock, Zap, Wifi } from 'lucide-react';

const avantajlar = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Yüksək sürət',
    desc: 'Backbone ilə 100 Mbps-ə qədər sabit və sürətli internet bağlantısı.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Təhlükəsiz bağlantı',
    desc: 'Məlumatlarınız SSL ilə qorunur, təhlükəsiz şəbəkə təcrübəsi.',
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: '24/7 Dəstək',
    desc: 'İstənilən vaxt texniki dəstək komandamız xidmətinizdədir.',
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-600" />,
    title: 'Limitsiz istifadə',
    desc: 'Heç bir kvota və sürət düşməsi olmadan tam limitsiz internet.',
  },
];

const Avantajlar = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          Niyə Backbone Technology?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {avantajlar.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avantajlar;
