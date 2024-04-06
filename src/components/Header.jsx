import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../Windows/Home';
import jobs from '../Windows/jobs';
import Downloader from '../Windows/Downloader';
import Converter from '../Windows/Converter';
import EditorX from "../Windows/EditorX";
import LogSign from "../Windows/LogSign/Log_Sign";  
import logo from '../assets/logo.png';
import Protected from "../Windows/ProNavs/Protected";



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
          </div>
          <div className="flex items-center">
            <span className="ml-auto mr-6">Cart</span>
            <span className="mr-6">User</span>
            <span className="mr-6">Login Icon</span>
          </div>
        </nav>


          <Routes>
          <Route exact path="/*" Component= {Home} ></Route>
          <Route exact path="/Downloader" Component= {Downloader}></Route>
          <Route exact path="/jobs" Component= {jobs} ></Route>
          <Route exact path="/Converter" Component= {Converter} ></Route>
          <Route exact path="/EditorX" Component= {EditorX} ></Route>
          <Route exact path="/LogSign/Log_Sign" Component= {LogSign} ></Route>
          <Route exact path="/ProNavs/Protected" Component= {Protected} ></Route>
          
          </Routes>
        </div>
        </Router>

        )








}
export default Header;