import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect ke halaman /home
    router.push('/home');
  }, [router]);

  return (
    <div>
      {/* Optional: Jika ingin menampilkan loading atau pesan sementara */}
      <p>Redirecting to home page...</p>
    </div>
  );
}
