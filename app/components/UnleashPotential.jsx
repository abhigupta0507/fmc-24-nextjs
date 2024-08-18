import React from "react";
import Image from 'next/image'
// import heading from "/Previous Sponsors.png"
// import group from "../public/Group 176.png"

function ClubCards (props){
  return(
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={props.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Explore More
        </a>
    </div>
</div>
  )
}

const ClubData= [
  {
    id: '1',
    img: 'logo.jpeg',
    name: 'X Club'
  },
  {
    id: '2',
    img: 'logo.jpeg',
    name: 'X Club'
  },
  {
    id: '3',
    img: 'logo.jpeg',
    name: 'X Club'
  },
  {
    id: '4',
    img: 'logo.jpeg',
    name: 'X Club'
  },
  {
    id: '5',
    img: 'logo.jpeg',
    name: 'X Club'
  },
]

const UnleashPotential = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center ">
      <div>
        Unleash Your Potential Through Thrilling Competitive Events!
      </div>
      <div className="flex justify-center items-center overflow-scroll">
        {ClubData.map((i)=>(
          <ClubCards key={i.id} img={i.img} name={i.name} />
        ))}
      </div>
    </div>
  )
}

export default UnleashPotential;
