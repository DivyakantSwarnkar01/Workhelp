import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import './tailwind-import'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
   <div>
    <Header/>
   
    <Footer/>
   </div>
  
  )
}

export default App
