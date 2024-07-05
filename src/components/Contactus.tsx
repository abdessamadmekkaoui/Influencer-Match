// components/Contactus.tsx
"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_a9s0vr8', 'template_8ybqovp', templateParams, 'xUsWHHESePAQlUCRW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="pb-16">
        <h1 className="text-4xl font-bold mb-9 pb-9 text-center">Contact Us</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you have a question, need assistance, or want to explore partnership opportunities, our team is here to help.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-600">ENSAM Casablanca, Mabrouka, 52250</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+212 07 08 55 19 65</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@influencio.com</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-400 p-2 rounded"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-400 p-2 rounded"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-400 p-2 rounded"
                    rows={5}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
