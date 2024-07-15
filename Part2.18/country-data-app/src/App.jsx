import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Details from './components/Details'
import Reset from './components/Reset'
import axios from 'axios'
import './App.css'


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [namesFiltered, setNamesFiltered] = useState([]);
 


  useEffect(() => {
    if (countries) {
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
    }
  }, [countries])
  
  const handleCountryName = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
    
  }

  const handleSearchCountry = (event) => {
    event.preventDefault();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i]['name']['common'].toLowerCase().startsWith(country.toLowerCase())) {
        namesFiltered.push(countries[i]);
      }
    }
    setNamesFiltered(namesFiltered);
  }

  const reset = () =>{
    setCountry('');
    setNamesFiltered([]);
  }

  return (
    <>
    
      <div>
        <h1> Country Finder </h1>
      </div>
      <div>
        <h2>search country: </h2>
        <Form funcName={handleCountryName} varCountry={country} />
        <p>debug: {country}</p>
        <Filter funcSearch={handleSearchCountry} />
        <span><br></br></span>
        <Reset funcREset={reset} />
        <h2>details: </h2>
        <Details showDetails={namesFiltered} />
      </div>

      
      
    </>
  )
}

export default App