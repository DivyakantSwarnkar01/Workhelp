import { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from "../routes/routes";
import logo from '../assets/logo.png';
import Cart from '../assets/Bags.svg';
import User from '../assets/UserProfile.svg';
import MenuOption from '../assets/Menu.svg';
import Modal from '../components/Additionals/Model';
import SearchDialog from './Additionals/SearchDialogue'; // Import the SearchDialog component

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  const openModal = () => {
    if (menuRef.current) {
      const { offsetTop, offsetLeft, offsetHeight } = menuRef.current;
      // Adjust left position to move modal more to the left
      setModalPosition({
        top: offsetTop + offsetHeight,
        left: offsetLeft + menuRef.current.offsetWidth / 2 - 100 // Adjust this value to move modal left
      });
    }
    setIsOpen(true);
  };

  // Placeholder search function
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement your search logic here
  };

  return (
    <Router>
      <div>
        <nav className='flex flex-row justify-between bg-lime-500 space-x-4 text-white'>
          <div className="flex items-center">
            <a className='bg-green-200' href="https://www.workhelper.shop">
              <img src={logo} alt="logo" className="h-10 w-35" />
            </a>
            <a href="https://www.workhelper.shop/" className="mt-1 ml-4">Home</a>
            <Link to="/Downloader" className="mt-1 ml-4">Downloader</Link>
            <Link to="/Converter" className="mt-1 ml-4">Converter</Link>
            <Link to="/jobs" className="mt-1 ml-4">Jobs</Link>
            <Link to="/EditorX" className="mt-1 ml-4">EditorX</Link>
            <Link to="/LiveTV" className="mt-1 ml-4">LiveTV</Link>
          </div>
          
          <SearchDialog onSearch={handleSearch} /> {/* Add the search dialog */}

          <div className="flex border-b-green-950 items-center text-lime-900">
            <span className="flex ml-auto mr-6">
              <img src={Cart} alt="Cart" className="mr-1 h-5 w-auto" />Cart (0)
            </span>
            <span className="flex mr-6">
              <img src={User} alt="User" className="mr-1 h-6 w-auto" />(User)
            </span>
            <div className="flex mr-6">
              <img
                src={MenuOption}
                alt="Menu"
                className="mt-1 mr-1 h-4 w-auto cursor-pointer"
                onClick={openModal}
                ref={menuRef}
              />
              {isOpen && (
                <Modal
                  closeModal={() => setIsOpen(false)}
                  position={modalPosition}
                />
              )}
            </div>
          </div>
        </nav>

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
