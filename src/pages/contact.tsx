// pages/contact.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      
      <main className="p-6">
        <section className="py-12 bg-white rounded-lg shadow-md mt-8">
          <div className="max-w-2xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Tertarik untuk Mencoba?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hubungi kami sekarang untuk informasi lebih lanjut atau pesan langsung!
            </p>
            <Link href="/contact">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-red-600">Informasi Kontak</h2>
          <p className="mt-2 text-gray-700">Email: info@warungnasipadang.com</p>
          <p className="mt-2 text-gray-700">Telepon: (021) 123-4567</p>
          <p className="mt-2 text-gray-700">Alamat: Jl. Contoh No. 123, Jakarta</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
