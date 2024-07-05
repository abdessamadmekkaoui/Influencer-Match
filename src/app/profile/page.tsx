// src/app/profile/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase'; // Adjust the path if necessary
import { User } from 'firebase/auth';
import Image from 'next/image';

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
                src={user.photoURL || '/default-avatar.png'}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                onError={(e) => {
                e.currentTarget.src = '/default-avatar.png'
                }}
            />
            </div>
            <h1 className="text-3xl font-bold mb-2">{user.displayName || 'User'}</h1>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Edit Profile
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">User Information</h2>
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 shadow-2xl p-4 rounded-xl border-2 mb-4">
              <p><strong>User ID:</strong> {user.uid}</p>
              <p><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</p>
              <p><strong>Account Created:</strong> {user.metadata.creationTime}</p>
              <p><strong>Last Sign In:</strong> {user.metadata.lastSignInTime}</p>
            </div>
            <h3 className="text-xl font-bold mb-2">Connected Accounts</h3>
            <div className="flex space-x-2">
              {user.providerData.map((provider) => (
                <span key={provider.providerId} className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                  {provider.providerId}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;