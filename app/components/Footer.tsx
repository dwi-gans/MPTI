import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <a className="flex items-center space-x-2">
                  <Image src="/logo-rino.svg" alt="Logo Rino" width={40} height={40} />
                </a>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p>Jl. Septa Taruna KM 10 Lereng</p>
                  <p>matagebong 1, Matamonge, Sorong</p>
                  <p>Utara, Sorong, Papua Barat, 98410</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">rinorentalmobil@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">085244229181</p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links + Vehicles always in 1 row on mobile */}
          <div className="lg:col-span-2 w-full">
            <div className="flex flex-row gap-8 w-full max-sm:gap-4 max-sm:px-2">
              {/* Useful Links */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Useful links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">About us</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Contact us</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Gallery</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">F.A.Q</a></li>
                </ul>
              </div>
              {/* Vehicles */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicles</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Sedan</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Cabriolet</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Pickup</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Minivan</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">SUV</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            Copyright © 2025 Rino Rental Mobil. All Rights Reserved.
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
              <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
              <Youtube className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;