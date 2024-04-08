import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from "../routes/routes";
import logo from '../assets/logo.png';
import UserIcons from '../assets/UserIcons.png'
import CartIcon from '../assets/Cart_Icon.png'
import MenuIcon from '../assets/icons8-menu-94.png'

function Header(){


        return(

            <Router>
          <div>
          <nav className='flex flex-row justify-between bg-lime-500 space-x-4 text-white'>
          <div className="flex items-center">
            <a  className='bg-green-200' href="https://www.workhelper.shop"><img src={ logo } alt="logo" className="h-10 w-35" /></a>
            <Link to="/" className="mt-1 ml-4">Home</Link>      
            <Link to="/Downloader" className="mt-1 ml-4">Downloader</Link> 
            <Link to="/Converter" className="mt-1 ml-4">Converter</Link>
            <Link to="/jobs" className="mt-1 ml-4">Jobs</Link>
            <Link to="/EditorX" className="mt-1 ml-4">EditorX</Link>
            <Link to="/LiveTV" className="mt-1 ml-4">LiveTV</Link>
            <Link to="/Api" className="mt-1 ml-4">API's</Link>
          </div>
          <div className="flex border-b-green-950 items-center text-lime-900">
            <span className="flex ml-auto mr-6"><img src={ CartIcon } alt="Cart" className="mt-0.5 h-5 w-8"/>Cart (0) </span>
            <span className="flex mr-6"><img src={ UserIcons } alt="User" className="mt-0.5 h-5 w-5"/>(User)</span>
            <span className="flex mr-6">Profile<img src={ MenuIcon } alt="Menu" className="mt-0.5 ml-1 h-6 w-6"/></span>
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