import InfluencerCard from '@/components/InfluencerCard'
import React from 'react'
import AllInfluencerLayout from './AllInfluencerLayout'

const infData = [
    {
        id: 1,
        img: "/inffood4.jpg",
        name: "yassine",
        category: "sports",
        rating: "4",
      },
      {
        id: 2,
        img: "/infeduc2.jpg",
        name: "oussama",
        category: "sports",
        rating: "4",
      },
      {
        id: 3,
        img: "/infsport3.jpg",
        name: "abdessamad",
        category: "sports",
        rating: "4",
      },
      {
        id: 4,
        img: "/inffood2.jpg",
        name: "abdellah",
        category: "sports",
        rating: "4",
      },
      {
        id: 1,
        img: "/infsport1.jpg",
        name: "yassine",
        category: "sports",
        rating: "4",
      },
      {
        id: 2,
        img: "/infeduc1.jpg",
        name: "oussama",
        category: "sports",
        rating: "4",
      },
      {
        id: 3,
        img: "/inffood3.jpg",
        name: "abdessamad",
        category: "sports",
        rating: "4",
      },
      {
        id: 4,
        img: "/infsport2.jpg",
        name: "abdellah",
        category: "sports",
        rating: "4",
      },
  {
    id: 1,
    img: "/inffood1.jpg",
    name: "yassine",
    category: "sports",
    rating: "4",
  },
  {
    id: 2,
    img: "/infeduc.jpg",
    name: "oussama",
    category: "sports",
    rating: "4",
  },
  {
    id: 3,
    img: "/infsport3.jpg",
    name: "abdessamad",
    category: "sports",
    rating: "4",
  },
  {
    id: 4,
    img: "/inffood5.jpg",
    name: "abdellah",
    category: "sports",
    rating: "4",
  },
  {
    id: 1,
    img: "/infsport1.jpg",
    name: "yassine",
    category: "sports",
    rating: "4",
  },
  {
    id: 2,
    img: "/infeduc2.jpg",
    name: "oussama",
    category: "sports",
    rating: "4",
  },
  {
    id: 3,
    img: "/inffood6.jpg",
    name: "abdessamad",
    category: "sports",
    rating: "4",
  },
  {
    id: 4,
    img: "/infsport2.jpg",
    name: "abdellah",
    category: "sports",
    rating: "4",
  },
];
const Page = () => {
  return (
    <AllInfluencerLayout>
      <div className="min-h-screen flex flex-col items-center mt-5">
        <div className="container pt-16 mt-5 max-w-6xl">
          <div className="flex justify-between items-center mb-9 pb-9">
            <h1 className="text-4xl font-bold text-center flex-grow">Influencers</h1>
          </div>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 text-center">
            {infData.map((item) => (
              <InfluencerCard
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                rating={item.rating}
                id={0}
              />
            ))}
          </div>
        </div>
      </div>
    </AllInfluencerLayout>
  )
}

export default Page