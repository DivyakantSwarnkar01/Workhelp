import React from "react";
import { Link } from 'react-router-dom';



const footerstyle = {
    position: 'relative',
    bottom: "0",
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px'
    
};

function Footer(){


        return(

            <footer className='font-mono' style={footerstyle}> 
                Hello is Footer <br/>
                
                ------------©copyright of workhelper company since 2023 ce---------------
            </footer>
            
                
           
        )








}
export default Footer;