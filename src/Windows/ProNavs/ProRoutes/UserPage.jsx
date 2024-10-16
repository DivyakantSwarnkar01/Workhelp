import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../LogSign/fbcon.js';
import Sdbrlft from '../UP_Components/Sdbrlft.jsx';
import Sdbrrgt from '../UP_Components/Sdbrrgt.jsx';
import AdPost from '../UP_Components/AdPost.jsx';
import Adit from '../UP_Components/Adit.jsx';
import eventBus from '../UP_Components/ButtonClicked.js';
import DetailsOption from '../UP_Components/DetailsPost.jsx';
import { FormDataProvider } from '../UP_Components/FormDataContext.jsx';
import Dialog from '../Dialog.jsx';

function UserPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState('option1');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/LogSign/Log_Sign");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost2 = () => {
    eventBus.emit('ButtonClicked');
  };

  // New reset handler function
  const handleReset = () => {
    setActiveOption('option1'); // Reset to default option
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Local Header */}
      <header className="bg-lime-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex space-x-6">
            <Link to="/ProNavs/Protected" className="flex items-center text-white hover:text-lime-200 transition duration-200">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
            <Link to="/ProNavs/ProRoutes/Analytics" className="flex items-center text-white hover:text-lime-200 transition duration-200">
              <i className="fas fa-chart-bar mr-2"></i> Analytics
            </Link>
            <Link to="/ProNavs/ProRoutes/Settings" className="flex items-center text-white hover:text-lime-200 transition duration-200">
              <i className="fas fa-cog mr-2"></i> Settings
            </Link>
            <Link to="/ProNavs/ProRoutes/Support" className="flex items-center text-white hover:text-lime-200 transition duration-200">
              <i className="fas fa-life-ring mr-2"></i> Support
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-1/4 h-full border-r border-gray-200 bg-white shadow-md">
          <Sdbrlft />
        </aside>

        <main className="flex-1 p-6 bg-white shadow-lg rounded-lg mx-4 my-6">
          <FormDataProvider>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {user?.email}</h1>

            <div className="grid grid-cols-5 gap-4 mb-6">
              {['Post', 'Details', 'Meta Data', 'Review', 'Extra'].map((option, index) => (
                <button
                  key={index}
                  className={`p-4 rounded-lg transition duration-300 font-semibold ${activeOption === `option${index + 1}` ? 'bg-lime-600 text-white' : 'bg-lime-300 text-gray-700 hover:bg-lime-400'}`}
                  onClick={() => setActiveOption(`option${index + 1}`)}
                >
                  {option}
                </button>
              ))}
            </div>

            <Dialog />

            {activeOption === 'option1' && (
              <div>
                <AdPost />
                <h3> Contents:</h3>
                <Adit placeholder="Start typing your content..." />
              </div>
            )}
            {activeOption === 'option2' && <DetailsOption option="option1" />}
            {activeOption === 'option3' && <div>This is 3rd Seat!</div>}
            {activeOption === 'option4' && <div>This is 4th Table</div>}
            {activeOption === 'option5' && <div>This is 5th Yard!</div>}
          </FormDataProvider>

          <div className="flex justify-between mt-6">
            <button 
              className="flex items-center bg-lime-600 text-white font-bold py-2 px-4 rounded hover:bg-lime-700 transition transform active:scale-95"
              onClick={handlePost2}
            >
              <i className="fas fa-paper-plane mr-2"></i> Post
            </button>
            <button 
              className="flex items-center bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition transform active:scale-95"
              onClick={handleReset} // Call reset handler
            >
              <i className="fas fa-redo-alt mr-2"></i> Reset
            </button>
            <button 
              className="flex items-center bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition transform active:scale-95"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Logout
            </button>
          </div>
        </main>

        <aside className="w-1/4 h-full border-l border-gray-200 bg-white shadow-md">
          <Sdbrrgt />
        </aside>
      </div>
    </div>
  );
}

export default UserPage;
