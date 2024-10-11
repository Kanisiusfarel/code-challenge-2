// pages/history.tsx
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Image from 'next/image';

const HistoryPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Pendiri dan CEO</h1>

        {/* Section Founder and CEO */}
        <div className="flex flex-col md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/Ceo.avif"
              alt="Pendiri"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-center md:text-left">Andi Suhendra</h3>
            <p className="mt-4 text-justify">
              Andi Suhendra adalah pendiri dan CEO dari Warung Nasi Padang Trio Sakato. Dengan latar belakang kuliner yang kuat dan kecintaannya terhadap masakan tradisional Minangkabau, Andi memulai perjalanan bisnisnya dari kios kecil dan membangun Trio Sakato menjadi salah satu tempat makan yang paling dikenal di kota. Di bawah kepemimpinannya, Trio Sakato terus berkembang, tetap mempertahankan cita rasa autentik dan pelayanan berkualitas.
            </p>
            <p className="mt-4 text-justify">
              Dengan dedikasi yang tinggi, Andi tidak hanya fokus pada pertumbuhan bisnis, tetapi juga pada pelestarian budaya kuliner Padang. Filosofi kepemimpinannya adalah menggabungkan inovasi dengan warisan tradisi untuk memberikan pengalaman makan yang luar biasa kepada semua pelanggan.
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mt-16">Sejarah Warung Nasi Padang Trio Sakato</h1>
        
        {/* Section Sejarah */}
        <div className="flex flex-col md:flex-row mt-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/history.jpeg"
              alt="Sejarah Warung Nasi Padang Trio Sakato"
              width={400}
              height={200}
              className="rounded-lg w-full h-auto" 
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
            <p className="text-justify">
              Warung Nasi Padang Trio Sakato didirikan pada tahun 2010 dengan tujuan untuk membawa cita rasa autentik masakan Padang ke tengah masyarakat. Berawal dari sebuah kios kecil di pinggir jalan, Trio Sakato cepat menjadi pilihan favorit bagi pecinta kuliner di daerah tersebut.
            </p>
            <p className="mt-4 text-justify">
              Seiring berjalannya waktu, popularitas warung ini semakin meningkat. Dalam waktu singkat, Trio Sakato dikenal sebagai tempat makan yang menyajikan hidangan Padang terbaik, mulai dari rendang, gulai, hingga sambal lado. Kami selalu berusaha menggunakan bahan-bahan segar dan berkualitas untuk setiap hidangan yang kami sajikan.
            </p>
            <p className="mt-4 text-justify">
              Kami berkomitmen untuk memberikan pengalaman kuliner yang tak terlupakan. Dengan resep-resep yang diturunkan dari generasi ke generasi, kami berharap dapat melestarikan tradisi masakan Padang dan menjadikan setiap kunjungan ke warung kami sebagai pengalaman yang menyenangkan.
            </p>
          </div>
        </div>

        {/* Section Nasi Padang */}
        <div className="flex flex-col md:flex-row mt-12 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/Pdng.jpg" 
              alt="Nasi Padang"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto" 
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold">Nasi Padang</h2>
            <p className="mt-4 text-justify">
              Nasi Padang adalah salah satu hidangan khas Sumatera Barat yang terkenal. Hidangan ini biasanya terdiri dari nasi putih dengan berbagai lauk, seperti rendang, gulai, dan sambal.
            </p>
          </div>
        </div>

        {/* Section Budaya Perusahaan */}
        <h2 className="text-3xl font-semibold mt-16 text-center">Budaya Perusahaan Kami</h2>
        <p className="mt-4 text-center">
          Di Warung Nasi Padang Trio Sakato, kami percaya bahwa budaya perusahaan yang positif adalah kunci untuk menciptakan lingkungan kerja yang harmonis dan produktif. Kami mengedepankan nilai-nilai berikut dalam setiap aspek operasional kami:
        </p>

        <ul className="list-disc ml-6 mt-6">
          <li><strong>Keluarga:</strong> Kami menganggap semua karyawan dan pelanggan sebagai bagian dari keluarga besar Trio Sakato.</li>
          <li><strong>Pelayanan Pelanggan:</strong> Kami berkomitmen untuk memberikan pelayanan terbaik kepada setiap pelanggan.</li>
          <li><strong>Kualitas dan Keaslian:</strong> Kami berpegang pada standar kualitas yang tinggi dalam setiap hidangan yang kami sajikan.</li>
          <li><strong>Pengembangan Karyawan:</strong> Kami menyediakan berbagai program pelatihan untuk meningkatkan keterampilan dan pengetahuan karyawan.</li>
          <li><strong>Inovasi dan Kreativitas:</strong> Kami mendorong setiap anggota tim untuk berkontribusi dengan ide-ide inovatif.</li>
          <li><strong>Kepedulian terhadap Lingkungan:</strong> Kami berkomitmen untuk menjaga lingkungan melalui praktik yang berkelanjutan.</li>
        </ul>

        <p className="mt-6 text-center">
          Budaya perusahaan kami adalah cerminan dari nilai-nilai ini, yang membantu kami menciptakan pengalaman kuliner yang tidak hanya lezat tetapi juga menyenangkan.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
