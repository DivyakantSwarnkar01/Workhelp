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
        <nav className='flex flex-box justify-left bg-lime-500 space-x-4 text-white'>
          <a className="flex box-border h-10 w-35 bg-green-200 " href="https://www.workhelper.shop"><img src={ logo } alt="logo"/></a>
         <Link className="mt-2" to="/">   Home          </Link>      
         <Link className="mt-2" to="/Downloader">   Downloader   </Link> 
        <Link  className="mt-2" to="/Converter">    Converter            </Link>
         <Link className="mt-2" to="/jobs">    Jobs                 </Link>
         <Link className="mt-2" to="/EditorX">   EditorX              </Link>
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