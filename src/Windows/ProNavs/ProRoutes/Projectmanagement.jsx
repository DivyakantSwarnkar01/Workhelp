import React from "react";
import { Navigate } from "react-router-dom";

const Projectmanagement = () => {


    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }



    return(
        <><p>This is Project Management Components!!!</p>
        </>
    )
} 

export default Projectmanagement;