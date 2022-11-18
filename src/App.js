
import './App.css';
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import BeersDetails from "./components/BeersDetails";
import NewBeers from "./components/NewBeers";
import RandomBeer from "./components/RandomBeer";
import {useEffect, useState} from "react";

function App() {
  const [beers, setBeers] = useState([]);
  const fetchBeers= async( ) => {
    try {
      const res = await fetch ("https://ih-beers-api2.herokuapp.com/beers");
      const beers = await res.json();
      setBeers (beers)

    } catch (error){console.log (error)}
  }

  useEffect (( )=> {
    fetchBeers(setBeers);
    
  }, [])

  return (
    <div className='App'>
      <Routes>

        <Route path= '/' element = {<Home />} />
        <Route path= '/beers/all-beers' element = {<AllBeers beers= {beers} />} />
        <Route path= '/beer/:id' element = {<BeersDetails/>} />
        <Route path= '/random-beer' element = {<RandomBeer/>} />
        <Route path= '/new' element = {<NewBeers/>} />
      </Routes>
  
  
    </div>
  );
}

export default App;
