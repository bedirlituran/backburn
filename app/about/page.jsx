'use client';
import React from 'react';
import { FaUsers, FaEye, FaBullseye } from 'react-icons/fa';

const page = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Haqqımızda</h1>
          <p className="text-lg md:text-xl">
            Backbone Technology – Azərbaycanın sürətlə inkişaf edən, müştəri mərkəzli internet provayderlərindən biri.
          </p>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Şirkətimiz</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Yüksək keyfiyyətli internet infrastrukturuna sahib olan Backbone Technology, müştərilərinə yüksək sürətli və etibarlı xidmət təqdim edir.
            Məqsədimiz hər bir istifadəçimizin ehtiyaclarını qarşılayaraq, maksimal məmnuniyyət təmin etməkdir.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 text-blue-700 mb-4">
              <FaBullseye size={28} />
              <h3 className="text-2xl font-semibold">Missiyamız</h3>
            </div>
            <p className="text-gray-700">
              Müştərilərimizə daim yenilənən texnologiyalarla təhlükəsiz, dayanıqlı və yüksək sürətli internet xidməti təqdim etmək.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 text-blue-700 mb-4">
              <FaEye size={28} />
              <h3 className="text-2xl font-semibold">Vizyonumuz</h3>
            </div>
            <p className="text-gray-700">
              Regionda və dünyada innovativ xidmətləri ilə seçilən bir lider provayderə çevrilmək.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6 text-blue-700">
            <FaUsers size={36} />
            <h2 className="text-3xl font-semibold mt-2">Komandamız</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Bizim komanda — texnologiyanı sevən, yeniliyə açıq və daim öyrənməyə meyilli peşəkarlardan ibarətdir. Sizin rahatlığınız üçün çalışırıq.
          </p>
          <p className="text-blue-600 font-semibold">
            Qoşulmaq üçün <a href="tel:+994558080801" className="underline">bizimlə əlaqə saxlayın</a>.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Siz də Backbone ailəsinə qoşulmaq istəyirsiniz?</h3>
        <p className="text-lg">Ən yaxşı internet təcrübəsi üçün bizimlə əlaqə saxlayın.</p>
      </section>
    </div>
  );
};
export default page;
