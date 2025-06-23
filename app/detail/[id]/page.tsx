'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DetailCar = () => {
  const params = useParams();
  const id = params.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [car, setCar] = useState(null);

  // Data mobil lengkap
  const carsData = [
    {
      id: 1,
      name: "Avanza",
      type: "Minivan",
      price: "Rp.350.000",
      period: "per day",
      mainImage: "/images/car-list/avanza-gray.png",
      images: [
        "/images/car-list/avanza-gray.png",
        "/images/detail-avanza-gray/detail-avanza-gray.png",
        "/images/detail-avanza-gray/detail-avanza-gray-2.png",
        "/images/detail-avanza-gray/detail-avanza-gray-3.png"
      ],
      specifications: {
        transmisi: "Matic",
        bahanBakar: "Gasoline",
        pintu: "5",
        airConditioner: "Yes",
        seats: "7",
        konsumsBBM: "13 Km/Liter"
      },
      features: {
        primary: ["ABS", "Air Bags", "Cruise Control"],
        secondary: ["Air Bags", "Air Conditioner"]
      },
      description: "Toyota Avanza adalah kendaraan keluarga yang sempurna dengan kapasitas 7 penumpang. Dilengkapi dengan fitur keselamatan terdepan dan kenyamanan berkendara yang optimal untuk perjalanan jauh maupun dalam kota."
    },
    {
      id: 2,
      name: "Vios",
      type: "Sedan",
      price: "Rp.400.000",
      period: "per day",
      mainImage: "/images/car-list/vios-silver.png",
      images: [
        "/images/car-list/vios-silver.png",
        "/images/vios-interior1.jpg",
        "/images/vios-interior2.jpg",
        "/images/vios-dashboard.jpg"
      ],
      specifications: {
        transmisi: "Matic",
        bahanBakar: "Gasoline",
        pintu: "4",
        airConditioner: "Yes",
        seats: "5",
        konsumsBBM: "15 Km/Liter"
      },
      features: {
        primary: ["ABS", "Air Bags", "Cruise Control"],
        secondary: ["Air Bags", "Air Conditioner"]
      },
      description: "Toyota Vios menawarkan kenyamanan berkendara dengan desain sedan yang elegan. Cocok untuk perjalanan bisnis maupun keluarga dengan efisiensi bahan bakar yang baik."
    },
    {
      id: 3,
      name: "Civic",
      type: "Sedan",
      price: "Rp.550.000",
      period: "per day",
      mainImage: "/images/car-list/civic-white.png",
      images: [
        "/images/car-list/civic-white.png",
        "/images/civic-interior1.jpg",
        "/images/civic-interior2.jpg",
        "/images/civic-dashboard.jpg"
      ],
      specifications: {
        transmisi: "Matic",
        bahanBakar: "Gasoline",
        pintu: "4",
        airConditioner: "Yes",
        seats: "5",
        konsumsBBM: "14 Km/Liter"
      },
      features: {
        primary: ["ABS", "Air Bags", "Cruise Control"],
        secondary: ["Air Bags", "Air Conditioner"]
      },
      description: "Honda Civic menghadirkan performa dan gaya yang memukau. Dengan teknologi terdepan dan desain sporty, cocok untuk Anda yang menginginkan pengalaman berkendara yang dinamis."
    }
  ];

  // Ambil data mobil berdasarkan ID
  useEffect(() => {
    if (id) {
      const foundCar = carsData.find(car => car.id === parseInt(id as string));
      setCar(foundCar || null);
    }
  }, [id]);

  // Data mobil serupa (4 mobil)
  const similarCars = carsData.filter(item => item.id !== car?.id).slice(0, 4);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
<div className="space-y-4">
  {/* Main Image with smooth transition */}
  <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
    <Image
      key={car.images[selectedImage]} // key agar fade saat gambar berganti
      src={car.images[selectedImage]}
      alt={car.name}
      fill
      className="object-cover transition-opacity duration-500 ease-in-out opacity-100"
    />
  </div>

  {/* 3 Thumbnail Images – Row Layout */}
  <div className="flex gap-4">
    {car.images.slice(1, 4).map((image, index) => {
      const actualIndex = index + 1;
      return (
        <div
          key={index}
          className={`relative w-24 h-24 sm:w-28 sm:h-28 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
            selectedImage === actualIndex ? 'ring-2 ring-blue-600 ring-offset-2' : 'hover:opacity-80'
          }`}
          onClick={() => setSelectedImage(actualIndex)}
        >
          <Image
            src={image}
            alt={`${car.name} ${actualIndex}`}
            fill
            className="object-cover"
          />
        </div>
      );
    })}
  </div>
</div>


          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Car Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-blue-600">{car.price}</span>
                <span className="text-gray-500">/ {car.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spesifikasi Unit</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transmisi</p>
                    <p className="font-medium text-gray-900">{car.specifications.transmisi}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bahan Bakar</p>
                    <p className="font-medium text-gray-900">{car.specifications.bahanBakar}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pintu</p>
                    <p className="font-medium text-gray-900">{car.specifications.pintu}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Seats</p>
                    <p className="font-medium text-gray-900">{car.specifications.seats}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Air Conditioner</p>
                    <p className="font-medium text-gray-900">{car.specifications.airConditioner}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Konsumsi BBM</p>
                    <p className="font-medium text-gray-900">{car.specifications.konsumsBBM}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kelengkapan Unit</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  {car.features.primary.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {car.features.secondary.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Pilih Unit
            </button>
          </div>
        </div>
      </div>

      {/* Similar Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobil Serupa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarCars.map((similarCar) => (
              <Link key={similarCar.id} href={`/details/${similarCar.id}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-40 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={similarCar.mainImage}
                      alt={similarCar.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{similarCar.name}</h3>
                        <p className="text-sm text-gray-500">{similarCar.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">{similarCar.price}</p>
                        <p className="text-xs text-gray-500">{similarCar.period}</p>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-96 md:h-[600px] w-full bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={car.images[selectedImage]}
                alt={car.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {car.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCar;