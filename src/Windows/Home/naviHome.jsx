import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function naviHome (){

    return(<>
       <div className='flex'>
        <div className='text-2xl font-extrabold '>
            <span className='ml-0 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/World'}>World</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/India'}>India</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Polity'}>Polity</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Economy'}>Economy</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Countries'}>Countries</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Environment'}>Environment</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Society'}>Society</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Business'}>Business</Link>
            </span>
            <span className='m-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Science'}>Science</Link>
            </span>
            <span className='ml-2 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Sports'}>Sports</Link>
            </span>
            <span className='ml-2 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Health'}>Health</Link>
            </span>
            <span className='ml-1 m-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <Link to={'/Technology'}>Technology</Link>
            </span>
        </div>

        </div>
        </> 
    )
}



export default naviHome;