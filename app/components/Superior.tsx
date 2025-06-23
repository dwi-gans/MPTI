import React from 'react';
import Image from 'next/image';

const Superior = () => {
  const features = [
    {
      number: "1",
      title: "Pilihan Armada Lengkap",
      description: "Kami menyediakan berbagai pilihan kendaraan, mulai dari mobil keluarga, sedan, SUV, hingga kendaraan mewah untuk kebutuhan Anda"
    },
    {
      number: "2", 
      title: "Kondisi Kendaraan Terawat",
      description: "Setiap kendaraan di Rino Rental Mobil menjalani perawatan rutin sehingga benjamn dan kendaraan kendaraan yang Anda sewa"
    },
    {
      number: "3",
      title: "Dukungan Teknis",
      description: "Tim kami selalu ada memberikan dukungan teknis jika terjadi masalah salama Anda menggunakan kendaraan dari kami 24/7"
    },
    {
      number: "4",
      title: "Paket Sewa Fleksibel",
      description: "Kami menyediakan berbagai paket sewa, mulai dari harian, mingguan, hingga bulanan, dengan harga yang bersaing dan fleksibitas sesuai kebutuhan Anda"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content - Full Image Box */}
          <div className="flex-1 flex justify-center order-1 lg:order-1 w-full">
            <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/display-home-2/display-2.png"
                alt="Car"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content - Features List */}
          <div className="flex-1 space-y-8 order-2 lg:order-2 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {feature.number}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Superior;