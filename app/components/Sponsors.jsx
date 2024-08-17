import React from "react";
import React from 'react'
import Image from 'next/image'
// import heading from "/Previous Sponsors.png"
// import group from "../public/Group 176.png"

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-center items-center ">
    <div className="absolute top-0 flex items-center justify-center w-full mt-[5961px]">    
      <Image 
         src={"/Previous Sponsors.png"}
         className="w-[1006px] h-[128px] ml-[176px]"
         alt="previous sponsors" width={1006} height={128}
       />
    </div>

    <div className="flex items-center justify-center w-full mt-[6025px]">
      <Image
        src={"/Group 176.png"}
        className="w-[1184px] h-[429.07px] ml-[122px]"
        alt="Sponsors" width={1184} height={429.07}
        />
    </div>
  </div>
  )
}

export default Sponsors;
