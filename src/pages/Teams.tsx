// pages/teams.tsx
import { useEffect, useState } from 'react';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Image from 'next/image';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const TeamsPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6'); // Fetch 6 users
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-8">Meet Our Team</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div 
              key={index} 
              className="border p-4 rounded-xl shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">{user.name.first} {user.name.last}</h2>
                <p className="text-gray-600 mt-2">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamsPage;
