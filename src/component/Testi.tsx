import React from 'react';

const testimonials = [
  { id: 1, name: 'Ahmad', message: 'Makanan di sini sangat enak dan otentik. Saya suka rendangnya!' },
  { id: 2, name: 'Siti', message: 'Pelayanan yang sangat baik dan suasana yang nyaman.' },
  { id: 3, name: 'Budi', message: 'Saya sering datang ke sini. Porsi besar dan harganya terjangkau!' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">Testimoni Pelanggan</h2>
      <div className="mt-4 space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 bg-gray-500 rounded-lg">
            <p className="italic text-white">&quot;{testimonial.message}&quot;</p> 
            <p className="font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
