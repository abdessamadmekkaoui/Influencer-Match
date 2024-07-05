// components/HeaderTop.tsx
"use client";

import React, { useState } from 'react';
import { BsInstagram, BsTwitterX, BsWhatsapp, BsLinkedin, BsFacebook, BsSearch } from 'react-icons/bs';

const HeaderTop = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearch = () => {
    // Implement search logic here using description and image
    console.log("Searching by description:", description);
    console.log("Searching by image:", image);
  };

  return (
    <div className="border-b border-gray-200 hidden sm:block items-center mt-9 pt-9">
      <div className="container py-4">
        <div className="flex justify-between items-center mx-9">
          <div className="w-full sm:w-[300px] md:w-[70%] relative mx-9">
            <input
              className="dark-mode border-gray-200 border p-2 px-4 rounded-lg w-full"
              type="text"
              placeholder="Enter any influencer name..."
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex gap-4 mx-9">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="category"
              id="category"
            >
              <option value="all">all</option>
              <option value="sport">Sport</option>
              <option value="education">Education</option>
              <option value="food">Food</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
