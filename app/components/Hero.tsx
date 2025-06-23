'use client';

import React from 'react';
import HeroContent from './HeroContent';
import LoginForm from './LoginForm';

interface HeroProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <section className="relative py-30 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mobil-display.png')" }}
        >
          <div className="relative z-10">
            <div className="px-8 xl:px-16 py-16">
              <div
                className={`grid items-center min-h-[500px] ${
                  !isLoggedIn
                    ? 'grid-cols-1 lg:grid-cols-2 gap-12'
                    : 'grid-cols-1 justify-items-center text-center'
                }`}
              >
                <HeroContent />
                {!isLoggedIn && (
                  <div className="flex justify-end">
                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
