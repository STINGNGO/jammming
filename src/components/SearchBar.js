import React, {useState, useEffect} from "react";
import App  from "../App";



function SearchBarComponent (){

    
    return(
        
        {token ?
            <form>       
            <input type="text" name="name" />
            <br></br>
            <input type="submit" value="Search" />
        </form>
        }
       
    );
};

export default SearchBarComponent;

