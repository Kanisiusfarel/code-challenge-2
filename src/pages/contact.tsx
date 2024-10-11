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
            <h2 className="text-4xl font-bold text-red-600 mb-4">Tertarik untuk Mencoba?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Hubungi kami sekarang untuk informasi lebih lanjut atau pesan langsung!
            </p>

            <div className="mb-8 space-y-2">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Email:</span> info@warungnasipadangTrioSakato.com
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Telepon:</span> (021) 13245768
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Alamat:</span> Jl. , Jakarta
              </p>
            </div>

            <h2 className="text-3xl font-semibold text-red-600 mb-4">Atau Chat Kami di WhatsApp!</h2>
            <Link href="https://wa.me/62082122331743" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105">
                Chat di WhatsApp
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
