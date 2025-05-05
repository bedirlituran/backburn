"use client";
import React, { useState } from 'react';

const Revievs = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    surname: '',
    mobile: '',
    comment: '',
    job: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mobil nömrə validasiyası
    const mobileRegex = /^(\+994|0)(50|51|55|70|77|99)\d{7}$/;
    if (!mobileRegex.test(newReview.mobile)) {
      alert('Zəhmət olmasa düzgün Azərbaycan mobil nömrəsi daxil edin (+994XXXXXXXXX və ya 0XXXXXXXXX)');
      return;
    }

    // Email göndərmə
    const mailtoLink = `mailto:support@backbone.az?subject=Yeni Rəy&body=
      Ad: ${newReview.name} ${newReview.surname}%0D%0A
      Nömrə: ${newReview.mobile}%0D%0A
      Peşə: ${newReview.job}%0D%0A
      Mesaj: ${newReview.comment}%0D%0A
      Şəkil: ${newReview.image ? newReview.image.name : 'Yoxdur'}
    `;

    window.location.href = mailtoLink;
    setNewReview({ 
      name: '', 
      surname: '', 
      mobile: '',
      comment: '', 
      job: '', 
      image: null 
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview({...newReview, image: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Öz Rəyinizi Yazın
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ad"
                  className="p-3 border rounded-lg focus:ring-2 ring-blue-300 outline-none"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Soyad"
                  className="p-3 border rounded-lg focus:ring-2 ring-blue-300 outline-none"
                  value={newReview.surname}
                  onChange={(e) => setNewReview({...newReview, surname: e.target.value})}
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Mobil nömrə (+994 XXX XXX XXX)"
                className="w-full p-3 border rounded-lg focus:ring-2 ring-blue-300 outline-none"
                pattern="^(\+994|0)(50|51|55|70|77|99)\d{7}$"
                value={newReview.mobile}
                onChange={(e) => setNewReview({...newReview, mobile: e.target.value})}
                required
              />

              <input
                type="text"
                placeholder="Peşə"
                className="w-full p-3 border rounded-lg focus:ring-2 ring-blue-300 outline-none"
                value={newReview.job}
                onChange={(e) => setNewReview({...newReview, job: e.target.value})}
                required
              />

              <textarea
                placeholder="Rəyiniz..."
                className="w-full p-3 border rounded-lg focus:ring-2 ring-blue-300 outline-none h-32"
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                required
              />

              <div className="flex items-center gap-4">
                <label className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  📷 Şəkil Yüklə
                </label>
                {newReview.image && (
                  <span className="text-sm text-green-600">✓ Şəkil seçildi</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Göndər ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revievs;