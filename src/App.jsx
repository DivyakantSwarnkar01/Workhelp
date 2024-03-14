import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Windows/Home';
import jobs from './Windows/jobs';
import Downloader from './Windows/Downloader';
import Converter from './Windows/Converter';
import './App.css'
import './tailwind-import'
import logo from './assets/logo.png'

function App() {

  return (
    <> 
      
        
        <Router>
          <div>
        <nav className='flex flex-box justify-left space-x-4 text-black'>
          <a className="flex w-25 h-10" href="https://www.workhelper.shop"><img src={ logo } alt="logo"/></a>
         <Link to="/">   Home          </Link>      
         <Link to="/Downloader">   Downloader   </Link> 
        <Link to="/Converter">    Converter            </Link>
         <Link to="/jobs">    Jobs                 </Link>
        </nav>

          <Routes>
          <Route exact path="/" Component= {Home} ></Route>
          <Route exact path="/Downloader" Component= {Downloader}></Route>
          <Route exact path="/jobs" Component= {jobs} ></Route>
          <Route exact path="/Converter" Component= {Converter} ></Route>
          </Routes>
        </div>
        </Router>
       


      
      </> 
  )
}

export default App
