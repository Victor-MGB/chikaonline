import React from 'react';

function Preloader() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='loader ease-linear rounded-full border-8 border-t-8 border-yellow-500 h-24 w-24'></div>
    </div>
  );
}

export default Preloader;
