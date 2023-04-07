import { useEffect } from "react";

const API_URL ="http://www.omdbapi.com?apikey=80fe294a";
function App() {

  const searchMovies = async(title) => {
    const  response =  await fetch(`${API_URL}&s=${title}`);
    const data =  await response.json(); 
    console.log(data);
    }

 useEffect (() =>{
 searchMovies('Batman');
 },[]);
  return (
<h1>Application</h1>
  );
}

export default App;
