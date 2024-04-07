import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from "../routes/routes";
import logo from '../assets/logo.png';




function Header(){


        return(

            <Router>
          <div>
          <nav className='flex flex-row justify-between bg-lime-500 space-x-4 text-white'>
          <div className="flex items-center">
            <a  className='bg-green-200' href="https://www.workhelper.shop"><img src={ logo } alt="logo" className="h-10 w-35" /></a>
            <Link to="/" className="mt-2 ml-4">Home</Link>      
            <Link to="/Downloader" className="mt-2 ml-4">Downloader</Link> 
            <Link to="/Converter" className="mt-2 ml-4">Converter</Link>
            <Link to="/jobs" className="mt-2 ml-4">Jobs</Link>
            <Link to="/EditorX" className="mt-2 ml-4">EditorX</Link>
            <Link to="/LiveTV" className="mt-2 ml-4">LiveTV</Link>
            <Link to="/Api" className="mt-2 ml-4">API's</Link>
          </div>
          <div className="flex items-center">
            <span className="ml-auto mr-6">Cart</span>
            <span className="mr-6">User</span>
            <span className="mr-6">Login Icon</span>
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