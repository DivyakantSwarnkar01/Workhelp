import React from 'react';
import { Navigate } from 'react-router-dom';

const Tables = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/LogSign/Log_Sign' />;
  }

  return (
    <div>
      <div className="bg-red-500 w-44 h-40">
        <p className='text-white'>This is Tables Components!!!</p>
      </div>
    </div>
  );
};

export default Tables;
