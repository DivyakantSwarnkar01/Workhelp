import React, { useState, useRef  } from 'react';
import Dialog from './Dialog';
import Protected from './Protected';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../LogSign/fbcon';
import { signOut } from 'firebase/auth';
import Sdbrlft from './UP_Components/Sdbrlft';
import Sdbrrgt from './UP_Components/Sdbrrgt';
import AdPost from './UP_Components/AdPost';
import PostFire from './UP_Components/PostFire';
import Plus3D from '../../assets/Plus3D.png';
import Adit from './UP_Components/Adti';



function UserPage() {
  const [dialogs, setDialogs] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleAddDialog = () => {
    const newDialog = {
      id: Date.now(),
      type: 'text', // Default type is text
      content: '',
    };
    setDialogs((prevDialogs) => [...prevDialogs, newDialog]);
  };

  const handleDialogChange = (id, content) => {
    setDialogs((prevDialogs) =>
      prevDialogs.map((dialog) =>
        dialog.id === id ? { ...dialog, content } : dialog
      )
    );
  };

  const handleDialogTypeChange = (id, type) => {
    setDialogs((prevDialogs) =>
      prevDialogs.map((dialog) =>
        dialog.id === id ? { ...dialog, type } : dialog
      )
    );
  };

  const handlePost = () => {
    // Send dialogs data to Firestore
    console.log(dialogs);
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

  return (
<div className='flex flex-col'>
      <div className='flex bg-lime-500 w-4/4 item-centre h-10 mt-5 mb-10 ml-5 mr-5'>
      <ul className='flex flex-row absolute align-left'>
        <li className='text-white ml-3 mr-3 mt-2'>General</li>
        <li className='text-white ml-3 mr-3 mt-2'>Database Tables</li>
        <li className='text-white ml-3 mr-3 mt-2'>H.C.M. Console</li>
        <li className='text-white ml-3 mr-3 mt-2'>C.R.M. Console</li>
        <li className='text-white ml-3 mr-3 mt-2'>C.P.C.</li>
        <li className='text-white ml-3 mr-3 mt-2'>Project Management</li>
      </ul>
     </div>
  <div className="flex mb-40">
      <div className="w-1/4 h-screen p-4 border-r border-gray-200 mt-5 ml-3">
      <Sdbrlft/>
      </div>
    
    <div className="flex-1 flex-col h-full z-10 p-2 border-t-8 border-blue-950 ml-1 mr-5">
      <div className="flex flex-col items-center py-10">
         <button
           className="bg-black text-white px-4 py-2 rounded-full shadow-md mb-4"
           onClick={handleAddDialog}
         >
            <img src= { Plus3D } alt="Add Posts" className='h-5 w-5'></img>
          </button>
            {dialogs.map((dialog) => (
              <Dialog
                key={dialog.id}
                id={dialog.id}
                type={dialog.type}
                content={dialog.content}
                onChange={handleDialogChange}
                onTypeChange={handleDialogTypeChange}
              />
               ))}
               <button
                 className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md mt-4"
                 onClick={handlePost}
               >
                 Post
               </button>
               <button
                 className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md mt-4"
                 onClick={handlePost}
               >
                 Reset
               </button>
      </div>
      <div className='flex-col h-screen p-4'>
        <AdPost/>
        <Adit/>
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
