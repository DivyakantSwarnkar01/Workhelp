import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingImage from '../assets/Loading.gif'


function EditorX (){
    return(
<div className='box-border bg-lime-500 border-t-0 w-full h-36'>
    <h1>Editor Page is For Editing Any Image, PDF or Text, Json or other Files</h1>this is 
    <img src={LoadingImage} className="h5 w-auto" alt="Coming Soon..."/>
</div>

)

}

export default EditorX;