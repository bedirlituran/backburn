import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" /> {/* Logo ölçüsünü artırdıq */}
        </div>

        {/* Menyu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:text-gray-300">Ana Səhifə</a></li>
          <li><a href="/tv" className="hover:text-gray-300">Tv kanallar</a></li>
          <li><Link href="/about" className="hover:text-gray-300">Haqqımızda</Link></li>
        </ul>


<div className='gap-10 flex items-center justify-center'>    {/* Əlaqə Butonu */}
        <a href="tel:+994558080801" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
          Əlaqə{/* Bu hissədə "Əlaqə" yazısı oldu */}
        </a>
        <a href="/" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
        Ödəniş et
        </a></div>
    

      </div>
    </nav>
  );
};

export default Navbar;
