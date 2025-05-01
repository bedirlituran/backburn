import React from 'react';
import { MapPin, Signal, Globe2 } from 'lucide-react';

const CoverageMap = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Xidmət Əhatə Sahəmiz
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Backbone Technology artıq Azərbaycanın bir çox bölgəsində fəaliyyət göstərir. Geniş şəbəkə əhatəmizlə sizi internetlə təmin edirik.
        </p>
        <div className="flex justify-center mb-10">
          <img
            src="https://via.placeholder.com/900x400?text=Backbone+Xidmət+Xəritəsi"
            alt="Coverage Map"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-semibold text-lg">8+ Şəhər</h4>
            <p className="text-sm text-gray-600">Bakı, Gəncə, Sumqayıt və digər iri şəhərlərdə xidmət.</p>
          </div>
          <div>
            <Signal className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-semibold text-lg">Fiber Optik İnfrastruktur</h4>
            <p className="text-sm text-gray-600">Yüksək sürətli, dayanıqlı bağlantı texnologiyası.</p>
          </div>
          <div>
            <Globe2 className="mx-auto mb-3 text-blue-600" size={32} />
            <h4 className="font-semibold text-lg">Genişlənən Şəbəkə</h4>
            <p className="text-sm text-gray-600">Yeni bölgələrə ekspansiya davam edir.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
