import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Image from 'next/image'; // Import Image dari next/image

const ProductPage: React.FC = () => {
  const products = [
    { id: 1, title: 'Nasi Padang', description: 'Nasi putih yang disajikan dengan berbagai lauk khas Padang.', image: '/images.jpeg' },
    { id: 2, title: 'Rendang', description: 'Daging sapi yang dimasak dengan rempah khas, memberikan rasa yang kaya dan lezat.', image: '/Rendang4k.jpg' },
    { id: 3, title: 'Sate Padang', description: 'Sate daging yang disajikan dengan saus kacang kental dan pedas.', image: '/Sate.jpg' },
    { id: 4, title: 'Gulai Ayam', description: 'Ayam yang dimasak dalam kuah santan kental yang kaya rempah.', image: '/images/gulai_tambusu.jpg' },
    { id: 5, title: 'Ikan Bakar', description: 'Ikan yang dibakar dengan bumbu khas Padang, disajikan dengan sambal.', image: '/ikan.jpeg' },
    { id: 6, title: 'Ayam Pop', description: 'Ayam goreng yang disajikan dengan sambal dan nasi.', image: '/ayamapop.jpg' },
    { id: 7, title: 'Kerupuk Udang', description: 'Kerupuk renyah yang terbuat dari udang, cocok untuk teman makan.', image: '/Kudang.jpg' },
    { id: 8, title: 'Keripik Balado', description: 'Keripik pedas yang terbuat dari singkong, renyah dan gurih.', image: '/Kpedas.jpg' },
  ];

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="mt-4 space-y-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg flex items-center space-x-4">
              <Image
                src={product.image}
                alt={product.title}
                width={96} // Lebar gambar, disesuaikan
                height={96} // Tinggi gambar, disesuaikan
                className="rounded object-cover" // Gaya gambar
              />
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
