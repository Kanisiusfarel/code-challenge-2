// pages/index.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Banner from '@/component/Banner';
import Testimonials from '@/component/Testi';
import BestSellers from '@/component/Productlaris';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner />
      
      <main className="p-4">
        <h3 className="text-4xl font-semibold text-center mt-8 text-red-600 animate-fadeIn">
          Masakan Khas Padang yang 100% Autentik
        </h3>
        <p className="mt-2 text-center text-gray-700 animate-fadeIn">
          Nikmati berbagai hidangan Padang yang lezat dan berkualitas.
        </p>

        {/* Best Sellers Section */}
        <div className="animate-fadeInSlow">
          <BestSellers />
        </div>

        {/* Testimonials Section */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-center text-yellow-600">
            Testimoni Pelanggan
          </h2>
          <div>
            <Testimonials />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
