'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cars from '@/components/car-list/carsList';  

const VehiclesPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '4rem' }}>
      <Cars />
      </div>
      <Footer />
    </>
  );
};

export default VehiclesPage;
