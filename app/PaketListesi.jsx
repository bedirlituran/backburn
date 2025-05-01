import React from 'react';

const PaketListesi = () => {
  const services = [
    {
      name: "İnternet",
      price: "100 mbit/s – 15 AZN\n+ IPTV – 5 AZN",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "IPTV",
      price: "10 AZN",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwtZnIkMVLh1FT3Wof6VErlZ--ue8iS4hDoEcOguZTnGqR9A8CGD9VIMrH7UnP7i71dU&usqp=CAU"
    },
    {
      name: "Kabel Televiziyası",
      price: "10 AZN",
      image: "https://d1u6g1e1nisfhs.cloudfront.net/wp-content/uploads/articles-network-tv-cable-streaming-sq.jpg"
    },
    {
      name: "IP Telefoniya",
      price: "3.50 AZN",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBj_IZdJrHeHK05dv6-sMjHr7qLuH2Bfwjr4K5akUTo9F9qSsg_pADE164VAyNWUZmwc&usqp=CAU"
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
    <div className="bg-gradient-to-b from-slate-50 to-white pt-16" id='paketler'>
      <div className="container mx-auto px-4">
        {/* Başlık Stili Güncellendi */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 relative pb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            📡 Xidmətlərimiz
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </h2>

        {/* Servis Kartları Güncellendi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-blue-50"
            >
              <div className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
                <img 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  src={service.image} 
                  alt={service.name} 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">
                    {service.name === "İnternet" && "🌐"}
                    {service.name === "IPTV" && "📺"}
                    {service.name === "Kabel Televiziyası" && "📡"}
                    {service.name === "IP Telefoniya" && "📞"}
                    {service.name === "Hosting" && "🖥️"}
                    {service.name === "IT Xidmətləri" && "👨💻"}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                </div>
             {/* ... Diğer kodlar aynı kalacak ... */}

<div className="text-gray-600 mb-5 space-y-2">
  {service.price.split('\n').map((line, i) => {
    const isSpecialPrice = line.includes('Qiymət');
    return (
      <p 
        key={i} 
        className={`text-sm leading-relaxed tracking-wide ${
          isSpecialPrice ? 'italic text-gray-500' : 'font-medium'
        }`}
      >
        {line.split('–').map((part, index) => (
          <span key={index}>
            {index > 0 && (
              <span className="mx-2 text-blue-400">•</span>
            )}
            {part.trim().match(/[0-9]+/g) ? (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
                {part.trim()}
              </span>
            ) : (
              <span className={index === 0 ? "text-gray-700" : ""}>
                {part.trim()}
              </span>
            )}
          </span>
        ))}
      </p>
    );
  })}
</div>

{/* ... Kampanya kısmı aynı kalacak ... */}
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg">
                  🚀 Qoşul
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Kampanya Bölümü Güncellendi */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mt-24 mb-12 relative pb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            🎉 Xüsusi Təkliflər
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {campaigns.map((camp, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  src={camp.image} 
                  alt={camp.title} 
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{camp.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                  {camp.description}
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  Ətraflı →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaketListesi;