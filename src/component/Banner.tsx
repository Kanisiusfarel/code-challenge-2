// components/Banner.tsx
import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="relative h-64">
      <Image
        src="/Bandot.jpg" // Ganti dengan path gambar banner Anda
        alt="Banner"
        layout="fill" // Mengisi seluruh kontainer
        objectFit="cover" // Memastikan gambar tidak terdistorsi
        className="rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Selamat Datang di Nasi Padang Trio Sakato</h2>
      </div>
    </div>
  );
};

export default Banner;
