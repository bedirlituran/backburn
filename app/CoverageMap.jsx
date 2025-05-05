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
        
        {/* Interaktiv Google Map */}
        <div className="flex justify-center mb-10">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12167.893094643705!2d49.848945!3d40.37252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716996438763!5m2!1sen!2s"
            width="900"
            height="400"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          >
          </iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Digər elementlər eyni qalır */}
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;