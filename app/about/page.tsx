'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quote, User, ChevronDown, ChevronUp, MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />
      {/* Spacer */}
      <div className="h-8" />
      {/* Hero Section */}
      <section className="bg-white px-4 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10">
        {/* Kolom Kiri (Judul besar) */}
        <div>
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          Teman terbaikmu di <br /> setiap perjalananmu
        </h2>
        </div>

    {/* Kolom Kanan (Fitur) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
      <div>
        <h3 className="font-bold text-base mb-1">Brand Beragam</h3>
        <p className="text-gray-600">
          Di Rino Rental Mobil kami menyediakan berbagai mobil dan tipe dari berbagai jenis brand yang ada.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">Layanan 24/7</h3>
        <p className="text-gray-600">
          Kami siap melayani Anda kapan saja, dengan layanan pelanggan yang tersedia 24 jam sehari, 7 hari seminggu untuk memenuhi kebutuhan anda.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">Dukungan Teknis</h3>
        <p className="text-gray-600">
          Tim kami selalu siap memberikan dukungan teknis jika terjadi masalah selama Anda menggunakan kendaraan dari kami, demi kenyamanan maksimal.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">Asuransi Kendaraan</h3>
        <p className="text-gray-600">
          Semua kendaraan kami dilengkapi dengan asuransi, memberikan Anda rasa tenang selama berkendara.
        </p>
      </div>
    </div>
  </div>

  {/* Google Maps Gambar */}
  <div className="rounded-xl overflow-hidden shadow-md">
    <Image
      src="/images/google-maps.png"
      alt="Lokasi Rino Rental Mobil"
      width={1200}
      height={600}
      className="w-full h-auto object-cover"
    />
  </div>
</section>


      {/* Statistik Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600">5k+</h2>
          <p className="text-sm text-gray-600">Pelanggan Puas</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600">50+</h2>
          <p className="text-sm text-gray-600">Pilihan Unit</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600">10+</h2>
          <p className="text-sm text-gray-600">Tahun Pengalaman</p>
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Review Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: 'Kucing Abu',
            review: 'Sangat puas! Proses cepat, respons admin sigap, dan mobil bersih, kondisi prima. AC dingin, mesin halus, bikin perjalanan nyaman. Pasti jadi langganan!',
          }, {
            name: 'Anak Kucing Abu',
            review: 'Harga bersaing tapi kualitas pelayanan jempolan! Penjemputan on-time, karyawan ramah. Mobil irit dan nyaman. Sangat direkomendasikan!',
          }, {
            name: 'Kucing Putih',
            review: 'Meongg Meonggg',
          }].map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow-md flex flex-col justify-between">
              <div className="p-6 flex-1">
                <Quote className="text-violet-600 w-6 h-6 mb-4" />
                <p className="text-gray-800 text-sm">{item.review}</p>
              </div>
              <div className="bg-violet-600 text-white text-center py-4 rounded-b-xl">
                <User className="w-6 h-6 mx-auto mb-1" />
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Pertanyaan Umum Pelanggan</h2>
        {[
          {
            question: "Apa saja persyaratan untuk menyewa mobil?",
            answer:
              "Anda memerlukan KTP/SIM A yang masih berlaku, dan beberapa syarat tambahan seperti NPWP atau bukti alamat. Usia minimum penyewa umumnya 21 tahun.",
          },
          {
            question: "Berapa lama minimal dan maksimal durasi penyewaan mobil?",
            answer:
              "Durasi penyewaan minimal adalah 6 jam dan maksimal bisa sampai 30 hari, tergantung jenis mobil dan paket yang dipilih.",
          },
          {
            question: "Apakah ada batasan jarak tempuh (kilometer) selama masa sewa?",
            answer:
              "Beberapa paket memiliki batasan kilometer harian. Namun, kami juga menyediakan paket tanpa batasan km dengan tarif berbeda.",
          },
          {
            question: "Bagaimana prosedur jika terjadi kerusakan atau kecelakaan pada mobil selama masa sewa?",
            answer:
              "Silakan hubungi layanan darurat kami. Kami akan segera membantu proses evakuasi dan asuransi jika berlaku.",
          },
          {
            question: "Apakah saya bisa mengembalikan mobil di lokasi yang berbeda (drop-off)?",
            answer:
              "Bisa. Kami menyediakan layanan drop-off di lokasi yang berbeda dengan biaya tambahan sesuai jarak lokasi pengembalian.",
          },
        ].map((item, idx) => (
          <FAQItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-12 px-4 rounded-xl mb-12">
        <div className="relative max-w-5xl mx-auto bg-violet-600 text-white rounded-2xl overflow-hidden flex items-center justify-between p-8 shadow-lg">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Butuh Mobil?</h2>
            <p className="text-lg font-semibold mb-1">085244129181</p>
            <p className="text-sm mb-4">Hubungi kami sekarang!</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition">
              Pesan Sekarang
            </button>
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/images/mobil-display.png"
              alt="Mobil"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Komponen FAQ Accordion
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-300 rounded-xl p-4 mb-4 transition duration-200"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold text-md">{question}</h3>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>
      {open && <p className="text-sm text-gray-600 mt-2">{answer}</p>}
    </div>
  );
}
