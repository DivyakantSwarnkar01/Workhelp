import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingImage from '../assets/Loading.gif'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ExtractText from './Home/ExtractText';

function EditorX (){
    return(<HelmetProvider>
        <Helmet><link rel="canonical" href="https://www.workhelper.shop/EditorX"/></Helmet>
<div className='box-border bg-lime-500 border-t-0 w-full h-36'>
</div>
<div>
<h1>Editor Page is For Editing Any Image, PDF or Text, Json or other Files</h1>this is 
    <img src={LoadingImage} className="h5 w-auto" alt="Coming Soon..."/>
</div>
</HelmetProvider>

)

}

export default EditorX;