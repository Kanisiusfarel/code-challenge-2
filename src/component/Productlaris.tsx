// components/BestSellers.tsx
import React from 'react';
import Image from 'next/image';

const bestSellers = [
  { id: 1, title: 'Rendang', description: 'Daging sapi yang dimasak dengan rempah khas.', image: '/renda.jpg' },
  { id: 2, title: 'Gulai', description: 'Kari padang yang kaya rasa.', image: '/Ayamgulai.webp' },
  { id: 3, title: 'Nasi Padang', description: 'Nasi dengan berbagai pilihan lauk.', image: '/images.jpeg' },
];

const BestSellers: React.FC = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center text-yellow-600">Produk Terlaris</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {bestSellers.map((product) => (
          <div 
            key={product.id} 
            className="border p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
