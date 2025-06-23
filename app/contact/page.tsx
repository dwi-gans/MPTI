'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black">Contact Us</h1>
          <p className="text-sm text-gray-500 mt-2">Home / Contact Us</p>
        </div>

        {/* Form dan Gambar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
          {/* Form */}
          <div className="bg-[#5F50FF] p-6 rounded-xl text-white w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center text-black bg-white py-2 rounded-lg">Sewa Mobil</h2>
            <form className="space-y-3">
              {[
                'Jenis Mobil',
                'Lokasi Pengambilan',
                'Tanggal Pengambilan',
                'Waktu Pengambilan',
                'Tanggal Pengembalian',
                'Waktu Pengembalian'
              ].map((label, idx) => (
                <select
                  key={idx}
                  className="w-full p-2 rounded-md bg-white text-black text-sm font-semibold"
                >
                  <option>{label}</option>
                </select>
              ))}
              <button
                type="submit"
                className="bg-yellow-400 text-sm text-black font-bold py-2 px-4 w-full rounded hover:bg-yellow-500 transition"
              >
                Pesan Sekarang
              </button>
            </form>
          </div>

          {/* Gambar */}
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md bg-white px-4 py-4 md:px-0 md:py-0 flex justify-center items-center mx-auto md:mx-0 mt-6 md:mt-0">
            <Image
              src="/images/contact-us/display-contactUs.png"
              alt="Sewa Mobil"
              width={900}
              height={900}
              className="w-full h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Info Kontak */}
        <div className="flex flex-wrap justify-center items-center text-sm gap-8 mb-20 text-black font-bold">
          <div className="flex items-start gap-3 max-w-xs">
            <MapPin className="text-yellow-500 mt-1" />
            <p>
              <span className="font-bold">Alamat</span><br />
              Jl. Malageda 1, Matalamagi, Kec. Sorong Utara, Kota Sorong, Papua Barat. 98412
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-yellow-500 mt-1" />
            <p>
              <span className="font-bold">Email</span><br />
              threerino@gmail.com
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-yellow-500 mt-1" />
            <p>
              <span className="font-bold">Telepon</span><br />
              085244129181
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-yellow-500 mt-1" />
            <p>
              <span className="font-bold">Opening Hours</span><br />
              Sen–Ming: 06.00 – 22.00
            </p>
          </div>
        </div>

        {/* Blog & Berita */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-center text-black">Blog & Berita Terbaru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
          img: '/images/contact-us/blog-mobil.png',
          title: 'Cara Memilih Mobil Yang Tepat',
          date: 'News / 14 April 2025'
              },
              {
          img: '/images/contact-us/blog-rajaEmpat.png',
          title: '7 Destinasi Pilihan Di Raja Ampat',
          date: 'News / 17 April 2025'
              },
              {
          img: '/images/contact-us/blog-human.png',
          title: 'Cara Berkendara Yang Aman Dan Nyaman',
          date: 'News / 13 April 2025'
              }
            ].map((blog, i) => (
              <div
          key={i}
          className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
              >
          <Image
            src={blog.img}
            alt={blog.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col flex-1 justify-between">
            <h3 className="font-bold text-base mb-2 text-black line-clamp-2 min-h-[48px]">
              {blog.title}
            </h3>
            <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
            <a
              href="#"
              className="mt-auto inline-block text-purple-600 hover:text-purple-800 font-semibold text-xs transition-colors"
            >
              Baca Selengkapnya
            </a>
          </div>
              </div>
            ))}
          </div>
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
