import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

const Banner: React.FC = () => {
  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px]">
      <Image
        src="/Dada.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className={PoppinsFont.className}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-70">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 animate-fadeInUp mb-4 drop-shadow-md">
            Nasi Padang Trio Sakato
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 animate-fadeInUp delay-200">
            Nikmati berbagai hidangan Padang yang lezat dan berkualitas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
