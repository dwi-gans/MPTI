'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = loading
  const pathname = usePathname();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch('/api/session', { credentials: 'include' });
        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (err) {
        console.error('Gagal cek login:', err);
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Memuat sesi...
      </div>
    );
  }

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {pathname === '/' && <Hero isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      {children}
    </>
  );
}
