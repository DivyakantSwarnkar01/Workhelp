import React, { createContext, useContext, useState } from 'react';
import Dialog from './Dialog';
import { useNavigate } from 'react-router-dom';
import { auth } from '../LogSign/fbcon';
import { signOut } from 'firebase/auth';
import Sdbrlft from './UP_Components/Sdbrlft';
import Sdbrrgt from './UP_Components/Sdbrrgt';
import AdPost, { quillTitle } from './UP_Components/AdPost';
import Adit from './UP_Components/Adit.jsx';
import eventBus from './UP_Components/ButtonClicked.js';
import MetaOption from './UP_Components/MetaPost.jsx';






function UserPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState('option1');


  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

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
      <div className='flex bg-lime-500 w-4/4 item-centre h-10 mt-5 mb-10 ml-5 mr-5'>
      <ul className='flex flex-row absolute align-left'>
        <li className='text-white ml-3 mr-3 mt-2'>General</li>
        <li className='text-white ml-3 mr-3 mt-2'>Tables</li>
        <li className='text-white ml-3 mr-3 mt-2'>H.C.M. </li>
        <li className='text-white ml-3 mr-3 mt-2'>C.R.M. </li>
        <li className='text-white ml-3 mr-3 mt-2'>C.P.C.</li>
        <li className='text-white ml-3 mr-3 mt-2'>Project Management</li>
        <li className='text-white ml-3 mr-3 mt-2'>Advertising</li>
        <li className='text-white ml-3 mr-3 mt-2'>Add Features</li>
      </ul>
     </div>
  <div className="flex mb-40">
      <div className="w-1/4 h-screen p-4 border-r border-gray-200 mt-5 ml-3">
      <Sdbrlft/>
      </div>
    
    <div className="flex-1 flex-col h-full z-10 p-2 border-t-8 border-blue-950 ml-1 mr-5">
    <div className="grid gap-4 grid-cols-4 bg-lime-100 items-center">
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => handleOptionClick('option1')}> Details</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => handleOptionClick('option2')}>Meta Data</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => handleOptionClick('option3')}> Review</button></div>
      <div className='border-box bg-lime-300 border-green-400'><button className='box-decoration-slice bg-gradient-to-r from-emerald-600 to-yellow-500 text-white px-2 text-center w-full' onClick={() => handleOptionClick('option4')}> Extra</button></div>
    </div>

      <div className="flex flex-col items-center py-10">
      <Dialog/>
      </div>

      {activeOption === 'option1' && (
        <div>
          <div className='flex-col h-screen p-4'>
            <AdPost/>
            <Adit/>
          </div>        
        </div>
      )}

      
              {activeOption === 'option2' && (
                      <div>
                        <div className='flex-col h-screen p-4'>
                         <MetaOption/>
                        </div>        
                      </div>
                    )}



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


      


      <div>
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
