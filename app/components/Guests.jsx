import React from 'react';
import backgroundImage from '../Img/bg.png'; // Ensure this path is correct

const Guest = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="border rounded-full overflow-hidden w-[182.26px] h-[182.26px] flex items-center justify-center">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="mt-2 text-center h-[34px] flex items-center justify-center">
        <h2 className="text-lg text-white">{title}</h2>
      </div>
    </div>
  );
};

const guestData = [
  { title: 'Guest 1', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 2', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 3', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 4', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 5', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 6', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 7', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 1', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 2', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 3', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 4', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 5', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Guest 6', imageUrl: 'https://via.placeholder.com/300' },
];

const Guests = () => {
  return (
    <div className='bg-black'>
      <h1 className="text-6xl lg:text-7xl text-white font-extrabold  text-center mb-20" style={{ fontFamily: "'Clash Display', sans-serif" }}>
        Our Previous Guests
      </h1>
      <div 
        className="relative p-4" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-wrap justify-evenly gap-5 md:gap-8">
          {guestData.map((card, index) => (
            <Guest
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guests;
