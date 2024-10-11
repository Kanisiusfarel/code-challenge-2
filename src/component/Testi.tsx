import React from 'react';

const testimonials = [
    { id: 1, name: 'Ahmad', message: 'Makanan di sini sangat enak dan otentik. Saya suka rendangnya, sampai lupa kalau lagi diet!', rating: 5 },
    { id: 2, name: 'Adit', message: 'Enak, harga murah. Kaget banget waktu bayar, ga kayak sebelah', rating: 4 },
    { id: 3, name: 'Rizky', message: 'Kirain kena scam ternyata ngga loh, udah siap-siap lapor polisi!', rating: 4 },
    { id: 4, name: 'Budi', message: 'Pelayanan cepat, sampe aku belum siapin uang, abang udah sampai!', rating: 5 },
    { id: 5, name: 'Sari', message: 'Porsi makanannya besar banget, kayak mau kasih makan satu RT!', rating: 5 }
  ];
  

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-600">Testimoni Pelanggan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <StarRating rating={testimonial.rating} />
            <p className="italic text-gray-700 text-center mb-4">&quot;{testimonial.message}&quot;</p>
            <p className="font-bold text-right text-yellow-600">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
