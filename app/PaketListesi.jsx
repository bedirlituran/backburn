// src/components/PaketListesi.jsx
import React from 'react';

const PaketListesi = () => {
    // Ürün bilgilerini tutan bir dizi oluşturuyoruz
     const products = [
       {
         name: "TV",
         description: "Ailənin keyfiyyətli əyləncə üçün mükəmməl seçimi.300+ Müxtəlif kanallar və yüksək görüntü keyfiyyəti ilə evdə film gecələri üçün idealdır.",
         price: "10 AZN",
         image: "https://media.istockphoto.com/id/507832521/photo/family-watching-television-in-living-room.jpg?s=612x612&w=0&k=20&c=gZPo48PEXainiN3SaWHPe5zw3O7W_Nt3LaJMy7ikiSQ="
       },
       {
         name: "İnternet",
         description: "Yüksək sürətli internet bağlantısı ilə evdə, iş yerində rahatlıqla online olmağı təmin edin. Hər kəs üçün ideal seçimdir.",
         price: "25 AZN",
         image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600"
       },
       {
         name: "Korporativ",
         description: "Biznesiniz üçün mükəmməl həll. Yüksək sürət və etibarlı bağlantı ilə işinizin inkişafına dəstək olun.",
         price: "50 AZN",
         image: "https://images.pexels.com/photos/20044371/pexels-photo-20044371/free-photo-of-men-working-on-laptop-at-cafe.jpeg?auto=compress&cs=tinysrgb&w=600"
       },
   ];
   
   
     return (
       <div className="bg-slate-50  mt-10">
         <div className="bg-transparent py-10">
           <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">
               Aylıq Tarif Paketlərimiz
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {products.map((product, index) => (
                 <div key={index} className="bg-white rounded-lg shadow-md p-6">
                   <div className="relative overflow-hidden">
                     <img className="object-cover w-full h-48" src={product.image} alt={product.name} />
                   </div>
                   <h3 className="text-lg font-semibold text-gray-900 mt-4 font-roboto">{product.name}</h3>
                   <p className="text-gray-600 text-sm mt-2 font-roboto">
                     {product.description}
                   </p>
                   <div className="flex items-center justify-between mt-4">
                     <span className="text-gray-900 font-medium text-md font-roboto">{product.price}</span>
                     <button className="uppercase py-2 px-3 sm:px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-md mr-4 hover:bg-pink-400">
                       Qoşul
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     );
   };

export default PaketListesi;
