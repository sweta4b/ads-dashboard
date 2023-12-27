import React from 'react';

const AdsSubmitted = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center  backdrop-blur-sm justify-center ">
      <div className="bg-white p-8 rounded-md text-center">
      <i className='fa fa-check-circle text-2xl font-bold text-blue-600'></i>
        <h2 className="text-2xl font-bold mb-4"> Ads Submitted!</h2>
        <p className="text-gray-600">Your ads have been successfully submitted.</p>
      </div>
    </div>
  );
};

export default AdsSubmitted;
