// pages/product.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Image from 'next/image';

const ProductPage: React.FC = () => {
  const products = [
    { id: 1, title: 'Nasi Padang', description: 'Nasi putih yang disajikan dengan berbagai lauk khas Padang.', image: '/Br.jpg', bestSeller: true },
    { id: 2, title: 'Rendang Daging Sapi', description: 'Daging Sapi yang dimasak dengan rempah khas, memberikan rasa yang kaya dan lezat.', image: '/Rendang4k.jpg', bestSeller: true },
    { id: 3, title: 'Sate Padang', description: 'Sate daging yang disajikan dengan saus kacang kental dan pedas.', image: '/Sate.jpg', bestSeller: false },
    { id: 4, title: 'Gulai Ayam', description: 'Ayam yang dimasak dalam kuah santan kental yang kaya rempah.', image: '/GUL.jpg', bestSeller: true },
    { id: 5, title: 'Ikan Bakar', description: 'Ikan yang dibakar dengan bumbu khas Padang, disajikan dengan sambal.', image: '/BKR.jpg', bestSeller: false },
    { id: 6, title: 'Ayam Pop', description: 'Ayam goreng khas Padang yang direbus dengan bumbu dan disajikan dengan nasi.', image: '/POP.webp', bestSeller: false },
    { id: 7, title: 'Kerupuk Udang', description: 'Kerupuk renyah yang terbuat dari udang, cocok untuk teman makan.', image: '/Kudang.jpg', bestSeller: false },
    { id: 8, title: 'Keripik Balado', description: 'Keripik pedas yang terbuat dari singkong, renyah dan gurih.', image: '/Kpedas.jpg', bestSeller: false },
    { id: 9, title: 'Telur Dadar', description: 'Telur yang digoreng hingga matang dengan campuran daun bawang dan bumbu khas.', image: '/Dada.jpg', bestSeller: false },
    { id: 10, title: 'Paru Goreng', description: 'Paru yang digoreng renyah dengan bumbu khas, menawarkan rasa yang unik dan gurih.', image: '/PURA.jpg', bestSeller: false },
];




  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen">
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl font-extrabold text-center text-red-700 mb-12">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
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
  style={{ objectFit: 'cover' }} // Menambah object-fit cover
/>

              </div>
              <div className="p-6 bg-gradient-to-t from-yellow-100 via-white to-white group-hover:from-yellow-200 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
                <p className="mt-2 text-gray-700">{product.description}</p>
              </div>
              {product.bestSeller && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Best Seller
                </span>
              )}
              <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
