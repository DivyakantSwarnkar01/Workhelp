import React, { createContext, useContext, useState } from 'react';
import Dialog from '../Dialog.jsx';
import { useNavigate, Navigate, Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from '../../LogSign/fbcon.js';
import { signOut } from 'firebase/auth';
import Sdbrlft from '../UP_Components/Sdbrlft.jsx';
import Sdbrrgt from '../UP_Components/Sdbrrgt.jsx';
import AdPost, { quillTitle } from '../UP_Components/AdPost.jsx';
import Adit from '../UP_Components/Adit.jsx';
import eventBus from '../UP_Components/ButtonClicked.js';
import DetailsOption from '../UP_Components/DetailsPost.jsx';
import { FormDataProvider } from '../UP_Components/FormDataContext.jsx';
import Tables from './Tables.jsx';
import Projectmanagement from './Projectmanagement.jsx';
import ProductCards from './ProductCards.jsx';
import ProductBlogs from "./ProductBlogs.jsx";
import Products from "./Product.jsx";
import HumanResources from "./HumanResources.jsx";
import AddFeatures from "./AddFeatures.jsx"


function UserPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState('option1');
  const token = localStorage.getItem('token');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/LogSign/Log_Sign");
    } catch (error) {
      console.error(error);
    }
  }

  const handlePost2 = () => {
      eventBus.emit('ButtonClicked');
  };



  return (
<div className='flex flex-col'>
<div className='flex bg-lime-500 w-full items-center h-10 mt-5 mb-10 ml-5 mr-5'>
        <div className='flex flex-row'>
          
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/Protected">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-1">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/Tables">Tables</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/ProductCards">Product-Cards</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/ProductBlogs">Product-Blogs</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/Products">Products</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/Projectmanagement">Project-management</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/HumanResources">Human Resource</Link>
          <Link className='text-white ml-3 mr-3  flex items-center' to="/ProNavs/ProRoutes/AddFeatures">
            Add Features
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-1">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </Link>
            
        </div>
      </div>
  <div className="flex mb-40">
      <div className="w-1/4 h-screen p-4 border-r border-gray-200 mt-5 ml-3">
      <Sdbrlft/>
      </div>
      
    <div className="flex-1 flex-col h-auto z-10 p-2 border-t-8 border-blue-950 ml-1 mr-5">
    <FormDataProvider>
    <div className="grid gap-5 grid-cols-5 bg-lime-100 items-center">
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => setActiveOption('option1')}> Post</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => setActiveOption('option2')}>Details</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => setActiveOption('option3')}> Meta Data</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => setActiveOption('option4')}> Review</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => setActiveOption('option5')}> Extra</button></div>
    </div>

      <div className="flex flex-col items-center py-10">
      <Dialog/>
      </div>
      <div>
      {activeOption === 'option1' && (
        <div>
          <div className='flex-col h-screen p-4'>
            <AdPost/>
            <Adit/>
          </div>        
        </div>
      )}
        {activeOption === 'option2' && <DetailsOption option="option1" />}



             {activeOption === 'option3' && (
                     <div>
                       <div className='flex-col h-screen p-4'>
                        This is 3rd Seat!
                       </div>        
                     </div>
                   )}



          {activeOption === 'option4' && (
                  <div>
                    <div className='flex-col h-screen p-4'>
                    This is 4th Table
                    </div>        
                  </div>
                )}

{activeOption === 'option5' && (
                  <div>
                    <div className='flex-col h-screen p-4'>
                    This is 5th Yard!
                    </div>        
                  </div>
                )}
      </div>
    </FormDataProvider>


      


      <div className='justify-end' style={{  justifyContent: 'flex-end',  position: 'relative', bottom: '0', right: '0', marginRight: '0px', marginTop: '300px' }}>
        <button className='text-white font-bold py-2 px-4 border rounded bg-gradient-to-r from-emerald-300 to-lime-500 hover:from-blue-700 hover:to-pink-500 mr-4 mt-2' onClick={handlePost2}>Post</button>
        <button className='bg-gradient-to-r from-red-300 to-red-900 hover:from-purple-400 hover:to-blue-800 mr-3 text-white font-bold py-2 px-4 border rounded'>Reset</button>
      <h2>Account: {user && user.email}</h2>
      <button className='bg-red-500 hover:bg-red-800 ml-3 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded' onClick={handleLogout}>Logout</button>
      </div>
    </div>

      <div className="w-1/4 h-screen p-4 border-l border-gray-200 mt-5">
        <Sdbrrgt/>
      </div>
  </div>
</div>
  );
}

export default UserPage;
