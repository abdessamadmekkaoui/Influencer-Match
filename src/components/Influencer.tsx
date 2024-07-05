import React from 'react';
import Infldetails from './Infldetails';
import Cardinfldetails from './Cardinfldetails';

const influencerData = {
  name: 'mekkaoui abdessamad',
  location: 'goulmima, maroc',
  followers: 99999999,
  engagement: 5.5,
  content: [
    { img: '/inffood6.jpg', likes: 648723, comments: 678 },
    { img: '/inffood5.jpg', likes: 78293, comments: 987 },
    { img: '/inffood1.jpg', likes: 9876, comments: 543 },
    { img: '/inffood2.jpg', likes: 6789, comments: 210 },
  ],
};

const Influencer = () => {
  return (
    <div>
      <Infldetails data={influencerData} />
    </div>
  );
};

export default Influencer;