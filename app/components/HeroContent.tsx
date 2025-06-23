import React from 'react';

const HeroContent = () => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
        Nikmati mudahnya
        <br />
        sewa kendaraan
      </h1>
      <p className="text-lg xl:text-xl text-white/90 max-w-lg leading-relaxed mx-auto">
        Dapatkan pengalaman sewa kendaraan yang aman, 
        menentramkan ketenangan transparan Anda. Dan 
        rasakan pilihan untuk investasi terbaik
      </p>
      <a
        href="/vehicles"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
      >
        Lihat Semua
      </a>
    </div>
  );
};

export default HeroContent;
