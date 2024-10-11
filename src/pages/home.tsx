// pages/index.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Banner from '@/component/Banner';
import Testimonials from '@/component/Testi';
import BestSellers from '@/component/Productlaris';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Banner />

      <main className="p-6">
        {/* Best Sellers Section */}
        <section className="mt-12">
          <div className="animate-fadeInSlow">
            <BestSellers />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <Testimonials />
        </section>

        {/* Contact Information Section */}
        <section className="py-12 bg-white rounded-lg shadow-md mt-12">
          <div className="max-w-2xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Tertarik untuk Mencoba?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hubungi kami sekarang untuk informasi lebih lanjut!
            </p>

            <div className="mb-6">
              <p className="mt-2 text-gray-700">Email: <span className="font-semibold">info@warungnasipadangtriosakato.com</span></p>
              <p className="mt-2 text-gray-700">Telepon: <span className="font-semibold">(021) 82122331743</span></p>
              <p className="mt-2 text-gray-700">Alamat: <span className="font-semibold">Jl. Benda tajam, Jakarta</span></p>
            </div>

            <h2 className="text-2xl font-semibold text-red-600 mb-4">Atau Chat Kami di WhatsApp!</h2>
            <Link href="https://wa.me/62082122331743" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
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

export default HomePage;
