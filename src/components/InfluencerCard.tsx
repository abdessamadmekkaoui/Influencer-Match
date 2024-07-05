import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { FaStar } from 'react-icons/fa';

interface PropsType {
  img: string;
  category: string;
  name: string;
  rating: string;
  id: number; // Add a prop for the influencer ID
}

const InfluencerCard: React.FC<PropsType> = ({ img, category, name, rating, id }) => {
  return (
    <Link href={`/influencer`}> {/* Add the Link component like this /influencer/${id}*/}
      <div className="card">
        <div className="card2">
        <div className="relative w-[220px] h-[320px]">
          <Image
            className="w-full h-full object-cover rounded-[19px]"
            src={img}
            alt={category}
            layout="fill"
          />
        </div>
        <div className="flex justify-between items-center py-3 px-2">
          <h2 className="text-orange font-medium uppercase">{name}</h2>
          <div className="flex items-center text-gray-500">
            <FaStar className="text-yellow-500 mr-0" /> {rating}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default InfluencerCard;
