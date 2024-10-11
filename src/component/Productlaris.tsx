import React from 'react';
import Image from 'next/image';

const bestSellers = [
  { id: 1, title: 'Rendang', description: 'Daging sapi yang dimasak dengan rempah khas.', image: '/Rndng4k.jpg' },
  { id: 2, title: 'Gulai', description: 'Kari padang yang kaya rasa.', image: '/Ayamgulai.webp' },
  { id: 3, title: 'Nasi Padang', description: 'Nasi dengan berbagai pilihan lauk.', image: '/Pdng.jpg' },
];

const BestSellers: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-8">Produk Terlaris</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {bestSellers.map((product) => (
          <div 
            key={product.id} 
            className="group relative border rounded-xl shadow-xl bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-yellow-100 via-white to-white group-hover:from-yellow-200 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
              <p className="mt-2 text-gray-700">{product.description}</p>
            </div>
            <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
