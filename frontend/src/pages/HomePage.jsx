import React from 'react';
import ListEvent from '../components/ListEvent.jsx'

const HomePage = () => {

  return (
    <>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <ListEvent/>
      </div>
    </div>
    </>
  );
};

export default HomePage;
