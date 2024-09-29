import logo from './logo.svg';
import React, { useState, useEffect } from'react';
import './App.css';

function App() {
  const [apiData, setapiData] = useState([]);
  const fetchFunc = async ()=>{
      const res = await fetch("https://dummyapi.online/api/movies");
      const data = await res.json();
      console.log(data);
      setapiData(data);
  }
  useEffect(()=>{
    fetchFunc();
  }, [])
  return (
    <div className="App">
      <h1>
        My Favorite Movies
      </h1>
      <div className="App-header">
         {
           apiData.map((item, index)=>(
             <div key={index} className='card'>
                <img src={item.image} alt={item.movie} />
               <h2>{item.movie}</h2>
               <p>{item.rating}</p>
             </div>
           )) || <h2>Loading...</h2>
         }
      </div>
    </div>
  );
}

export default App;
