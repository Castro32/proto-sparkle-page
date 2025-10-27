// const BookNowButton = () => {
//   const phoneNumber = "254116444433";
//   const message = "Hello, I would like to book an appointment at Avya Beauty.";

//   const handleBookNowClick = () => {
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
//   };

//   return (
//     <button
//       onClick={handleBookNowClick}
//       className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 bg-black text-white px-3 py-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 group"
//       aria-label="Book an appointment"
//       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
//     >
//       <span className="text-sm font-bold tracking-wider">BOOK NOW</span>
//       <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
//         Book your appointment
//       </div>
//     </button>
//   );
// };

// export default BookNowButton;


import React, { useState } from 'react';

const BookNowButton = () => {
  const phoneNumber = "254116444433";
  const message = "Hello, I would like to book an appointment at Avya Beauty.";
  const [isHovered, setIsHovered] = useState(false);

  const handleBookNowClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={handleBookNowClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#262626] hover:bg-white text-white hover:text-[#262626] w-[52px] h-[180px] flex items-center justify-center text-sm tracking-wider rounded-l transition-colors"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        BOOK NOW
      </button>
      {/* {isHovered && (
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Book your appointment
        </div>
      )} */}
    </div>
  );
};

export default BookNowButton;
