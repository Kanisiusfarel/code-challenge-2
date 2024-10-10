import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State untuk mengatur loading

  useEffect(() => {
    // Set delay 100 ms sebelum redirect ke /home
    const timer = setTimeout(() => {
      setLoading(false); // Matikan loading setelah 100 ms
      router.push('/home'); // Redirect ke /home
    }, 100); // Delay 100 ms

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <div>
          {/* Gambar loading atau GIF */}
          <Image
            src="/Loading.gif" // Path ke gambar atau GIF loading
            alt="Loading"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div>
          {/* Pesan jika redirect selesai */}
          <p>Redirecting to home...</p>
        </div>
      )}
    </div>
  );
}
