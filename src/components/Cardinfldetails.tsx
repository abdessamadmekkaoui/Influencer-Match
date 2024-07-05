import React from 'react';
import Image from 'next/image';
import { FaHeart, FaShareAlt, FaRegCommentDots } from 'react-icons/fa';

interface InfluencerCardDetails {
  img: string;
  category: string;
  name: string;
  rating: string;
  content: {
    img: string;
    likes: number;
    comments: number;
  }[];
}

const Cardinfldetails: React.FC<{ data: InfluencerCardDetails }> = ({ data }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={data.img}
            alt={data.name}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p className="text-gray-600">{data.category}</p>
          <p>Rating: {data.rating}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.content.map((content, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={content.img}
              alt={`Content ${index}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <FaHeart className="text-red-500 mr-1" />
                  <span>{content.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <FaRegCommentDots className="text-gray-500 mr-1" />
                  <span>{content.comments.toLocaleString()}</span>
                </div>
                <FaShareAlt className="text-gray-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardinfldetails;