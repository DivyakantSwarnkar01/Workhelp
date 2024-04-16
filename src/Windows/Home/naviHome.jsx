import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function naviHome (){

    return(<>
       <div className='flex '>
        <div className='text-2xl font-extrabold'>
            <span className='ml-0 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/World'}>World</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/India'}>India</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Polity'}>Polity</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Economy'}>Economy</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Countries'}>Countries</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Environment'}>Environment</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Society'}>Society</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Business'}>Business</Link>
            </span>
            <span className='m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Science'}>Science</Link>
            </span>
            <span className='ml-1 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Sports'}>Sports</Link>
            </span>
            <span className='ml-1 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Health'}>Health</Link>
            </span>
            <span className='ml-0 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Home/Technology'}>Technology</Link>
            </span>
        </div>

        </div>
        </> 
    )
}



export default naviHome;