'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  isLoggedIn?: boolean;
  setIsLoggedIn?: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });

      // Optional: hapus token manual
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

      alert('✅ Logout berhasil');
      setIsLoggedIn?.(false);

      router.push('/');
      setTimeout(() => router.refresh(), 100);
    } catch (error) {
      console.error('Logout gagal:', error);
      alert('❌ Gagal logout');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-rino.svg" alt="Logo Rino" width={40} height={40} />
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/vehicles" className="text-sm text-gray-700 hover:text-blue-600">Vehicles</Link>
            <Link href="/detail" className="text-sm text-gray-700 hover:text-blue-600">Details</Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">About Us</Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600">Contact Us</Link>

            {isLoggedIn === true && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
