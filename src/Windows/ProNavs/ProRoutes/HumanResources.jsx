import React from "react";
import { Navigate } from "react-router-dom";

const HumanResources = () => {

    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }





    return(
        <><p>This is Human Resources Components!!!</p>
        </>
    )
} 

export default HumanResources;