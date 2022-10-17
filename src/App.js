import {useEffect} from "react";

//b169e854

const API_URL = "/?apikey=b169e854";
//const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=b169e854'

const App = ()=> {
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        console.log(data.search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);
    return(
        <h1>App</h1>
    );
}

export default App;