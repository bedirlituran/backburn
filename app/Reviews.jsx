import React from 'react';
import Revievs from './Revievs';
const reviews = [
  {
    name: 'Elvin Məmmədov',
    comment: 'Backbone ilə keçdiyim gündən etibarən internet problemi yaşamadım. Komandaya təşəkkür edirəm!',
    image: 'https://i.pinimg.com/474x/cf/ba/1f/cfba1f03ead2a24f2687c8f9bfea3dd6.jpg',
    job: 'Müəllim',
  },
  {
    name: 'Ayşən Quliyeva',
    comment: 'İş yerim üçün sürətli və dayanıqlı internet lazım idi. Backbone bu ehtiyacımı tam qarşılayır.',
    image: 'https://i.pinimg.com/736x/46/88/3a/46883a7228cc79764fcc9290713aa043.jpg',
    job: 'Ofis Meneceri',
  },
  {
    name: 'Murad Əliyev',
    comment: 'Ən yaxşısı texniki dəstəyidir. Gecə saatlarında belə cavab verirlər. Çox razıyam!',
    image: 'https://i.pinimg.com/236x/01/0f/c2/010fc287a49b38da622de16a8aa115bd.jpg',
    job: 'Həkim',
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
          Müştəri Rəyləri
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
                />
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <p className="italic text-gray-700 mt-6 mb-4 leading-relaxed">“{r.comment}”</p>
              <h4 className="font-semibold text-blue-800 text-lg">{r.name}</h4>
              <span className="text-sm text-gray-500">{r.job}</span>
            </div>
          ))}
        </div>
      </div>
<Revievs/>
      
    </section>
  );
};

export default Reviews;
