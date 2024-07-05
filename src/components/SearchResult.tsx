"use client";

import React from 'react';

const SearchResult = () => {
  // In a real application, you'd probably pass the search results as props
  // or fetch them here based on the search query
  const dummyResults = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Search Results</div>
        {dummyResults.map((result) => (
          <div key={result.id} className="mb-4 p-4 border border-gray-200 rounded">
            <h3 className="font-bold">{result.name}</h3>
            <p className="text-gray-600">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;