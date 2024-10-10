// pages/contact.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      
      <main className="p-4">
        <h1 className="text-4xl font-bold text-center text-red-600 mt-8">Kontak Kami</h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Hubungi kami sekarang untuk informasi lebih lanjut atau pesan langsung!
        </p>

        <section className="py-12 bg-red-600 text-white text-center mt-8">
          <h2 className="text-4xl font-bold animate-bounce">Tertarik untuk Mencoba?</h2>
          <p className="mt-4 text-lg">
            Hubungi kami sekarang untuk informasi lebih lanjut atau pesan langsung!
          </p>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white px-6 py-2 mt-6 rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
              Hubungi Kami
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
