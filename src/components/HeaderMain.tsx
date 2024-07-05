// components/HeaderMain.js
"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { auth } from '../firebase'; // Adjust the path if necessary
import { onAuthStateChanged, signOut } from 'firebase/auth';

const HeaderMain = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSearchAiClick = () => {
    if (user) {
      // User is logged in, navigate to SearchAi page
      window.location.href = '/search';
    } else {
      // User is not logged in, redirect to login page
      window.location.href = '/login';
      alert('You must be logged in to use this functionality.');

    }
  };

  return (
    <div className="header-main border-b border-gray-200 hidden sm:block">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <span className="flex font-bold text-3xl">
              <span className="text-gradient">Influencio</span>
              <img src="/logo.gif" alt="Logo" className="h-5" />
            </span>
          </div>
        </Link>
        <div className="flex-grow flex justify-center space-x-4">
          <a href="http://localhost:3000/#creators" className="hover:text-orange-500 link-item">Creators</a>
          <a href="http://localhost:3000/#features" className="hover:text-orange-500 link-item">Features</a>
          <a href="http://localhost:3000/#pricing" className="hover:text-orange-500 link-item">Pricing</a>
          <a href="http://localhost:3000/#contact" className="hover:text-orange-500 link-item">Contact</a>
          <a href="#" onClick={handleSearchAiClick} className="hover:text-orange-500 link-item">SearchAi</a>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href={`/profile`}>
                <span className="text-orange-500 cursor-pointer">{user.displayName || user.email}</span>
              </Link>
              <button onClick={handleLogout} className="custom-button">
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link href={`/login`}>
              <button className="custom-button">
                <span>Login</span>
              </button>
            </Link>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
