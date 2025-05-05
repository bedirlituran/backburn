import React from 'react';

const PaketListesi = () => {
  const services = [
    {
      name: "İnternet",
      price: "100 mbit/s – 15 AZN",
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
      image: "https://testteknoloji.com.tr/wp-content/uploads/2022/07/T58.png"
    },
    {
      name: "Hosting",
      price: "Qiymət üçün əlaqə saxlayın",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "IT Xidmətləri",
      price: "Qiymət üçün əlaqə saxlayın",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQPtrcfHloestqUfFF6nGS-CiKBLdjcAVWVcopjj0TPouhQeeR6Sk8jMtMSrEQHSvPj0&usqp=CAU"
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