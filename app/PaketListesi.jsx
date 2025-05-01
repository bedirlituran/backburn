import React from 'react';

const PaketListesi = () => {
  const services = [
    {
      name: "İnternet",
      price: "100 mbit/s – 15 AZN\n200 mbit/s – 25 AZN\n300 mbit/s – 30 AZN\n+ IPTV – 5 AZN",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "IPTV",
      price: "10 AZN",
      image: "https://images.pexels.com/photos/15458676/pexels-photo-15458676/free-photo-of-smart-tv-with-app-icons.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Kabel Televiziyası",
      price: "10 AZN",
      image: "https://images.pexels.com/photos/276523/pexels-photo-276523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "IP Telefoniya",
      price: "3.50 AZN",
      image: "https://images.pexels.com/photos/886743/pexels-photo-886743.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Hosting",
      price: "Qiymət üçün əlaqə saxlayın",
      image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "IT Xidmətləri",
      price: "Qiymət üçün əlaqə saxlayın",
      image: "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const campaigns = [
    {
      title: "Dostluq Kampaniyası",
      description: "Dostunu dəvət et, 1 ay xidmətdən pulsuz istifadə et.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "5+1 Kampaniyası",
      description: "5 aylıq xidmət ödənişini et, 1 ay bizdən hədiyyə olsun.",
      image: "https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Mövsüm Kampaniyası",
      description: "İndi qoşul, ilk ay sadəcə 1 AZN ödə.",
      image: "https://images.pexels.com/photos/2959191/pexels-photo-2959191.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">🌐 Xidmətlərimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img className="w-full h-48 object-cover" src={service.image} alt={service.name} />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                <pre className="text-gray-600 text-sm mt-2 whitespace-pre-line">{service.price}</pre>
                <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition">
                  Qoşul
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Kampaniyalar */}
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mt-24 mb-10">🎁 Kampaniyalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((camp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img className="w-full h-48 object-cover" src={camp.image} alt={camp.title} />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{camp.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{camp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaketListesi;
