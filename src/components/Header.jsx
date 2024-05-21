import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from "../routes/routes";
import logo from '../assets/logo.png';
import Cart from '../assets/Bags.svg';
import User from '../assets/UserProfile.svg';
import MenuOption from '../assets/Menu.svg';
import Modal from '../components/Additionals/Model'

function Header(){

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);


        return(

            <Router>
          <div>
          <nav className='flex flex-row justify-between bg-lime-500 space-x-4 text-white'>
          <div className="flex items-center">
            <a  className='bg-green-200' href="https://www.workhelper.shop"><img src={ logo } alt="logo" className="h-10 w-35" /></a>
            <a href="https://www.workhelper.shop/" className="mt-1 ml-4">Home</a>      
            <Link to="/Downloader" className="mt-1 ml-4">Downloader</Link> 
            <Link to="/Converter" className="mt-1 ml-4">Converter</Link>
            <Link to="/jobs" className="mt-1 ml-4">Jobs</Link>
            <Link to="/EditorX" className="mt-1 ml-4">EditorX</Link>
            <Link to="/LiveTV" className="mt-1 ml-4">LiveTV</Link>
          </div>
          <div className="flex border-b-green-950 items-center text-lime-900">
          <span className="flex ml-auto mr-6"><img src={ Cart } alt="Cart" className=" mr-1 h-5 w-auto"/>Cart (0) </span>
            <span className="flex mr-6"><img src={ User } alt="User" className=" mr-1 h-6 w-auto"/>(User)</span>
            <div className="flex mr-6"><img src={ MenuOption } alt="Menu" className="mt-1 mr-1 h-4 w-auto" onClick={openModal} />  {isOpen && <Modal closeModal={() => setIsOpen(false)} />} </div>
            
          </div>
        </nav>


          <Routes>
          
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          
          </Routes>
        </div>
        </Router>

        )








}
export default Header;