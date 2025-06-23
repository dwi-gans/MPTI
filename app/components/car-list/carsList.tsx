'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cars as allCars } from 'app/data/cars';
import { FaCarSide, FaTruckPickup, FaShuttleVan, FaCaravan, FaCar } from 'react-icons/fa';

interface CarsListProps {
  limit?: number;
  hideFilter?: boolean;
  title?: string;
}

const typeIcons: Record<string, React.ReactNode> = {
  Semua: <FaCar className="inline-block mr-2" />,
  Sedan: <FaCarSide className="inline-block mr-2" />,
  Minivan: <FaShuttleVan className="inline-block mr-2" />,
  SUV: <FaCaravan className="inline-block mr-2" />,
  Pickup: <FaTruckPickup className="inline-block mr-2" />,
  Cabriolet: <FaCarSide className="inline-block mr-2" />,
};

const Cars: React.FC<CarsListProps> = ({ limit, hideFilter = false, title = "Pilih Unit" }) => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredCars =
    activeFilter === 'Semua'
      ? allCars
      : allCars.filter((car) => car.type === activeFilter);

  const displayedCars = limit ? filteredCars.slice(0, limit) : filteredCars;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h2>

          {!hideFilter && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {['Semua', 'Sedan', 'Minivan', 'SUV', 'Pickup', 'Cabriolet'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`flex items-center px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                    activeFilter === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 border-gray-300'
                  }`}
                >
                  {typeIcons[type]}{type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid Mobil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCars.map((car) => (
            <div
              key={car.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40 mb-4 bg-white rounded-lg overflow-hidden">
                <Image src={car.image} alt={car.name} fill className="object-contain p-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{car.price}</p>
                    <p className="text-xs text-gray-500">{car.period}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{car.features.matic ? 'Matic' : 'Manual'}</span>
                  <span>{car.features.ron92 ? 'RON 92' : 'Premium'}</span>
                  <span>Fuel</span>
                </div>
<button
  type="button"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
>
  View Details
</button>


              </div>
            </div>
          ))}
        </div>

        {/* Logo Mobil Section */}
        <section className="bg-white py-22 px-4 rounded-xl mb-8 mt-8">
          <div className="flex justify-center flex-wrap gap-20 items-center">
            {[
              'toyota.png', 'honda.png', 'mitsubishi.png',
              'daihatsu.png', 'wuling.png', 'hyundai.png', 'suzuki.png'
            ].map((logo, i) => (
              <Image
                key={i}
                src={`/images/logo-mobil/${logo}`}
                alt={`Brand ${i}`}
                width={60}
                height={60}
                className="object-contain"
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cars;
