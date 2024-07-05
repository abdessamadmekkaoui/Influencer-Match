import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


interface propsType{
                category: String;
                img: String;
                title: String;
                prix: String;
            }
const Slide:React.FC<propsType> = ({category, img, title, prix}) => {
  return (
<div className='outline-none mt-9 border-none relative flex justify-center items-center'>
    <div className="absolute left-[30px] md:left-[10%] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className='text-white text-[24px] lg:text-[28px]'>{category}</h3>
        <h2 className='text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading [1.2]'>{title}</h2>
        <h3 className="text-[24px] text-gray-100">
            starting at{" "}
            <b className="text-[20px] text-white md:text-[24px] lg:text-[30px]">{prix}</b>
        </h3>
        <Link href={`/payment`}>  
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
            Shop Now
        </div>
        </Link>
    </div>
    <Image className="w-[90%] h-[500px] md:h-auto rounded-3xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={4000}
        height={4000}
    />
</div>

  )
}

export default Slide