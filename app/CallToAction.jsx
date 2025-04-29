import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-700 py-24 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Gələcəyin interneti ilə tanış olun</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Yüksək sürət, dayanıqlılıq və tam təhlükəsizlik. Backbone ilə artıq internetdə vaxt itirməyin!
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-bold px-8 py-4 rounded-full text-lg transition"
        >
          İndi Qeydiyyatdan Keç
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
