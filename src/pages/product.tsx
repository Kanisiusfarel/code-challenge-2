import Navbar from '@/component/navbar';
import Footer from '@/component/footer';

const ProductPage: React.FC = () => {
  const products = [
    { id: 1, title: 'Nasi Padang', description: 'Delicious Padang rice served with various side dishes.', image: '/nasi_padang.jpg' },
    { id: 2, title: 'Rendang', description: 'Spicy beef stew, slow-cooked to perfection.', image: '/rendang.jpg' },
    { id: 3, title: 'Sate Padang', description: 'Grilled skewered meat served with spicy sauce.', image: '/images/sate_padang.jpg' },
    { id: 4, title: 'Gulai Tambusu', description: 'Traditional Padang curry made with egg and spices.', image: '/images/gulai_tambusu.jpg' },
    { id: 5, title: 'Ikan Bakar', description: 'Grilled fish marinated with Padang spices.', image: '/images/ikan_bakar.jpg' },
    { id: 6, title: 'Ayam Pop', description: 'Fried chicken served with spicy sauce and rice.', image: '/images/ayam_pop.jpg' },
    { id: 7, title: 'Pisang Salai', description: 'Smoked banana served as a unique dessert.', image: '/images/pisang_salai.jpg' },
    { id: 8, title: 'Keripik Balado', description: 'Spicy crispy chips made from cassava.', image: '/images/keripik_balado.jpg' },
    { id: 9, title: 'Cendol', description: 'Traditional dessert made with rice flour, coconut milk, and palm sugar.', image: '/images/cendol.jpg' },
    // Tambahkan produk lain sesuai kebutuhan
  ];
  

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="mt-4 space-y-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded" // Atur ukuran dan styling
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
