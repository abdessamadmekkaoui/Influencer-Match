"use client";
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
const Hero = () => {
      var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const slideData = [
            {
                id:0,
                category:"Sport",
                img:"/sport1.jpg",
                title:"come to train",
                prix:"20.00 $",
            },
            {
                id:1,
                category:"Education",
                img:"/educ1.jpg",
                title:"Education will be easyer",
                prix:"20.00 $",
            },
            {
                id:2,
                category:"Food",
                img:"/food1.jpg",
                title:"one pas on the day",
                prix:"20.00 $",
            },
        ];



    return <div>
        <div className="countainer mt-9 pt-9 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide key = {item.id}
                    img = {item.img}
                    title = {item.title}
                    category={item.category}
                    prix={item.prix}
                    />
                ))}
            </Slider>
        </div>
    </div> ;
};

export default Hero;