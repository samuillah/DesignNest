import React from 'react'
import Header from './components/header'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Header></Header>
      <div className='w-[496px] h-[189px] flex flex-col justify-center items-start m-12'>
      <h1 className='text-black font-bold text-[40px] leading-[65.8px] tracking-[2.5%] w-[496px] h-[189px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className='w-[902px] h-[147px] font-medium text-3xl leadin-[49.35px] text-[#A29875] tracking-[2.5%]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
      <button className='bg-[#A29875] font-medium text-3xl leading-37px.5px w-72px h-[58px] rounded-[10px] p-[10px] gap-2.5'>Explore Now</button>

    </div>
    <div className=" flex justify-end  w-screen  ">
        <Image src={"/images/figma.svg"}
            alt="image"
            width={490}
            height={667}></Image>
        
      </div>
    </div>
  )
}

export default Homepage