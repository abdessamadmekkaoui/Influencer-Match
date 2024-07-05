// components/aboutus.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="mt-9 pt-9">   
       <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
    <div className="flex items-center justify-center h-screen mt-9 pt-9">
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-20 w-[90%] h-[500px] md:h-auto rounded-3xl ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Unlock the Power of Influencers Worldwide to Amplify Your Brand's Reach
            </h2>
            <p className="text-white text-lg mb-8">
              Find top influencers in any category or location effortlessly. Our powerful search and analytics tools
              simplify influencer marketing, ensuring effective campaign management and measurable results.
            </p>
            <p className="text-white mb-8">
              Join over 10k companies benefiting from our platform
            </p>
            <Link href={`/payment`}>  
            <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600">
              Start 14 Days Trial
            </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/phone1.png"
                  alt="App Screenshot 1"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Image
                  src="/phone2.jpg"
                  alt="App Screenshot 2"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">15k+</h3>
            <p className="text-white">Active influencers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">300k</h3>
            <p className="text-white">Total product sold</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">10k</h3>
            <p className="text-white">Companies</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;