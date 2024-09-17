import { useEffect, useState } from "react";

const BASE_URL = "https://api.spotify.com/v1/";
const CLIENT_ID = "d2ce700396d44e3d93b3f3b1079064b5";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT ="https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"



function TrackListComponent (){



      return (

        <>
        <h1>Fetch Songs</h1>
        <ul>
            
        </ul>
        </>
      );
    
};

export default TrackListComponent; 
