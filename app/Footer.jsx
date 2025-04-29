import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sol Tarafta Şirkət Haqqında */}
          <div>
            <h3 className="text-xl font-bold mb-4">Backbone Technology</h3>
            <p className="text-sm">İnternet və telekommunikasiya xidmətlərində ən etibarlı tərəfdaşınız.</p>
          </div>

          {/* Ortada Sosial Media Linkləri */}
          <div className="flex justify-center">
            <a href="#" className="mx-4 text-2xl hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mx-4 text-2xl hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mx-4 text-2xl hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="mx-4 text-2xl hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Sağ Tarafta İletişim Məlumatları */}
          <div>
            <h3 className="text-xl font-bold mb-4">Əlaqə</h3>
            <p className="text-sm">Əlavə məlumat üçün bizimlə əlaqə saxlaya bilərsiniz:</p>
            <p className="text-sm">Telefon: +994 12 345 67 89</p>
            <p className="text-sm">E-poçt: support@backbone.com</p>
          </div>
        </div>

        {/* Alt Bilgi (Copyright) */}
        <div className="text-center text-sm mt-8">
          <p>&copy; 2025 Backbone Technology. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
