import React from 'react';

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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Müştəri Rəyləri</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
              <img src={r.image} alt={r.name} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500" />
              <p className="italic text-gray-700 mb-4">“{r.comment}”</p>
              <h4 className="font-semibold text-blue-800">{r.name}</h4>
              <span className="text-sm text-gray-500">{r.job}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
