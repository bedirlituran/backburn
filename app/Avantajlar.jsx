// src/components/Avantajlar.jsx
import React from 'react';
import { ShieldCheck, Clock, Zap, Wifi } from 'lucide-react';
import './avantajlar.css';
const avantajlar = [
  {
    icon: <Zap className="w-18 h-18 text-white text-white-600" />,
    title: 'Yüksək sürət',
    desc: 'Backbone ilə 100 Mbps-ə qədər sabit və sürətli internet bağlantısı.',
  },
  {
    icon: <ShieldCheck className="w-18 h-18 text-white text-blue-600" />,
    title: 'Təhlükəsiz bağlantı',
    desc: 'Məlumatlarınız SSL ilə qorunur, təhlükəsiz şəbəkə təcrübəsi.',
  },
  {
    icon: <Clock className="w-18 h-18 text-white text-blue-600" />,
    title: '24/7 Dəstək',
    desc: 'İstənilən vaxt texniki dəstək komandamız xidmətinizdədir.',
  },
  {
    icon: <Wifi className="w-18 h-18 text-white text-blue-600" />,
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
            <div key={idx} style={{ cursor: 'pointer' }} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">


              <div className="card">
                <div className="card-inner">
                  <div className="card-front">{item.icon}</div>
                  <div className="card-back">{item.title} {item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Avantajlar;
