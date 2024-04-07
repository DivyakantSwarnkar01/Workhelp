import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function SubHeader(){


    return(
        <div className='box-border relative bg-lime-500 w-full h-36'>   
        <ul className='flex flex-row absolute bottom-0 '>
         <li className='flex row-auto'><Link className= ' font-mono justify-center box-border h-12 w-36 pl-3 pt-3 z-10 bg-lime-700 font-bold text-violet-950' to='/Home/'> Hello !!!</Link></li>
         <li className='flex row-auto'><Link className= ' font-mono justify-center box-border h-12 w-36 pl-3 pt-3 z-10 bg-lime-700 font-bold text-violet-950' to='/Home/Recent'> Recent </Link></li>
         <li className='flex row-auto'><Link className= ' font-mono justify-center box-border h-12 w-36 pl-3 pt-3 z-10 bg-lime-700 font-bold text-violet-950' to='/Home/NewBlogs'> New blogs</Link></li>
         <li className='flex row-auto'><Link className= ' font-mono justify-center box-border h-12 w-36 pl-3 pt-3 z-10 bg-lime-700 font-bold text-violet-950' to='/Home/Quaries?'> Quaries?</Link></li>
         <li className='flex row-auto'><Link className= ' font-mono justify-center box-border h-12 w-36 pl-3 pt-3 z-10 bg-lime-700 font-bold text-violet-950' to='/Home/Search'> Search </Link></li>
         <li className='flex row-auto'><Link className= " font-mono justify-center box-border pl-3 pt-3 h-12 w-36 z-10 bg-lime-700 font-bold" to="/LogSign/Log_Sign">   Authenticate </Link> </li>
         </ul> 
       </div>
    )
}
export default SubHeader;