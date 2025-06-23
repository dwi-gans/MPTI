'use client';

import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievement from "@/components/Achievement";
import Superior from "@/components/Superior";
import Car from "@/components/Car";
import Fact from "@/components/FactSearch";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main className="overflow-x-hidden">
        <Hero isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Achievement />
        <ScrollAnimation direction="up" delay={200}>
          <Superior />
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={100}>
          <Car />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={300}>
          <Fact />
        </ScrollAnimation>
      </main>
      <ScrollAnimation direction="up" delay={0}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
