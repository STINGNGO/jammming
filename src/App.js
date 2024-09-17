import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';

function App() {
    const CLIENT_ID = "d2ce700396d44e3d93b3f3b1079064b5"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [albums, setAlbums] = useState([])

    

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchAlbums = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "album"
            }
        })

        console.log(data.albums);

        setAlbums(data.albums.items)
    }

    const renderAlbums = () => {
        return albums.map(album => (
          <div key={album.id} >
                
                <div style={{width: '100%', height:'10vh', display:'flex', justifyContent:'space-between', alignItems:'center',borderBottom:'1px solid white'}}>
                    <div style={{  height:'100%',lineHeight:'0px' }}>
                    
                        <h6 style={{textAlign: 'left', }}>
                        {album.name}
                    </h6>
                    <p style={{fontSize:'11px', }}>
                    {album.artists[0].name}
                    </p>
                    </div>
                    <span>
                        +
                    </span>
                   
                
                                
                </div>
                {/* {album.artists[0].name} */}
                
            </div>
        ))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Jammming</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ?
                    <form onSubmit={searchAlbums}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login</h2>
                }
                <div style={{height:'80vh',
                    width:'100%', display: 'flex', justifyContent:'space-around', alignItems: 'center'
                 }}>
                    

                    <div className = 'left-card' style={{backgroundColor:'green', height: '90%', width:'45%',  overflowY: 'auto' }}>
                        <p style={{textAlign:'left', marginLeft:'0.5rem'}}>Results</p>
                        {renderAlbums()}
                    </div>
                    <div className = 'right-card' style={{backgroundColor:'blue', height: '90%', width:'45%',overflowY: 'auto'}}>
                        
                    </div>
                </div>

                <div> </div>

               

            </header>
        </div>
    );
}

export default App;