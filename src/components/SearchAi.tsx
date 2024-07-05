"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import axios from 'axios';

const SearchAi = () => {
  const [image, setImage] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [hasPaid, setHasPaid] = useState(true); // Replace with actual payment check
  const [analysisResults, setAnalysisResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatProductInfo = (description: string, objects: any[]): string => {
    let result = `Description: ${description}\n\nDetected Objects:\n`;
    objects.forEach((obj, index) => {
      result += `${index + 1}. ${obj.label} (Confidence: ${(obj.score * 100).toFixed(2)}%)\n`;
    });
    return result;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = async (event: React.ClipboardEvent) => {
    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        if (file) {
          setImage(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setUploadedImage(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasPaid && image) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', image);
        
        const response = await axios.post('/api/cloudflare', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        setAnalysisResults(response.data);
        setShowResult(true);
        
        // Format and set the combined product info
        const formattedInfo = formatProductInfo(description, response.data);
        setProductInfo(formattedInfo);
        
        // Log the formatted info to console
        console.log("Product Info:\n", formattedInfo);
        alert(formattedInfo);
        
        // Save results
        saveResults(formattedInfo);
      } catch (error) {
        console.error('Error analyzing image:', error);
        // Handle error (e.g., show error message to user)
      } finally {
        setIsLoading(false);
      }
    }
  };

  const saveResults = async (formattedInfo: string) => {
    try {
      await axios.post('/api/save-results', { productInfo: formattedInfo });
      console.log('Results saved successfully');
    } catch (error) {
      console.error('Error saving results:', error);
    }
  };


  const styles = {
    input: {
      maxWidth: '190px',
      display: 'none',
    },
    labelFile: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '250px',
      height: '190px',
      border: '2px dashed #ccc',
      alignItems: 'center',
      textAlign: 'center',
      padding: '5px',
      color: '#404040',
      cursor: 'pointer',
    },
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-solid border-black mr-9">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">AI-POWERED SEARCH</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Find Correspond Influencer</p>
          </div>
          
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="flex flex-col items-center">
              <label htmlFor="file" className="w-64 h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300">
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <>
                    <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop or click to select</p>
                  </>
                )}
              </label>
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
  
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onPaste={handlePaste}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300"
                rows={4}
                placeholder="Describe the product you're looking for..."
              ></textarea>
            </div>
  
            <div>
              {hasPaid ? (
                <button
                  type="submit"
                  disabled={isLoading || !image}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  {isLoading ? 'Analyzing...' : 'Search'}
                </button>
              ) : (
                <Link href="/payment" passHref>
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    Go to Payment
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
      
      {showResult && (
        <div className="mt-8 ml-9 max-w-md w-full bg-gradient-to-br from-orange-100 to-pink-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-solid border-black">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Analysis Results</h2>
            {analysisResults.length > 0 ? (
              <ul className="space-y-2">
                {analysisResults.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-indigo-500 rounded-full dark:bg-indigo-600">
                      {Math.round(item.score * 100)}%
                    </span>
                    <span className="font-medium dark:text-gray-300">{item.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
  
};
export default SearchAi;