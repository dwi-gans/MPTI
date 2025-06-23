'use client';

import React, { useState, useEffect } from 'react';
import { Search, Car, Users, Calendar, Star } from 'lucide-react';

const FactSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Tambahkan logika pencarian sesuai kebutuhan
  };

  // Menghindari rendering mismatch (hydration error)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const stats = [
    { icon: <Car className="w-6 h-6" />, number: '50+', label: 'Mobil' },
    { icon: <Users className="w-6 h-6" />, number: '5K+', label: 'Pelanggan' },
    { icon: <Calendar className="w-6 h-6" />, number: '10+', label: 'Tahun' },
    { icon: <Star className="w-6 h-6" />, number: '5/5', label: 'Kepuasan' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Facts Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div
          className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 md:p-20 text-white relative overflow-hidden min-h-[500px]"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.7), rgba(67, 56, 202, 0.7)), url('/images/fact-display.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Fakta Kecil Tentang Kami</h1>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
                Ada sedikit fakta kecil nih tentang kami agar kamu makin yakin untuk memilih kami sebagai pilihanmu
              </p>
            </div>

            <section className="py-16 px-4 bg-cover bg-center">
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl px-6 py-5 flex items-center gap-4 shadow-md">
                    <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-md text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{item.number}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nikmati setiap perjalanan anda dengan mudah dan nyaman
        </h2>
        <p className="text-gray-600 mb-8 text-lg">Cari kami di kota tujuan anda</p>

        <div className="flex justify-center">
          <div className="flex items-center bg-white rounded-full shadow-xl border border-gray-200 overflow-hidden max-w-md w-full">
            <input
              type="text"
              placeholder="Cari ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">Search</span>
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSearch;
