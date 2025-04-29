// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Sol taraf: metin */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sürətli və Etibarlı <br /> <span className="text-yellow-300">İnternet Xidməti</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
          Backbone Technology ilə evinizə və iş yerinizə 100 Mbps-ə qədər fiber-optik bağlantı. Həm sürətli, həm sərfəli!
          </p>
          <a
            href="/paketler"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            Paketlərə Bax
          </a>
        </div>

        {/* Sağ taraf: görsel */}
        <div className="flex-1 text-center">
          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
            alt="Modem ve bağlantı"
            className="w-full max-w-md rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
