import React, {useState, useEffect} from "react";
import App  from "../App";



function SearchBarComponent (){
    let token = window.localStorage.getItem("token")
    
    return(
        
        {token
        }
       
    );
};

export default SearchBarComponent;

