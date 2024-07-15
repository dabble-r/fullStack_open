import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'
import './App.css'


function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('');



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
    setCountry(event.target.value);
    console.log(country)
  }

  const handleSearchCountry = (event) => {
    event.preventDefault();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i]['name']['common'].toLowerCase() == country.toLowerCase()) {
        console.log(countries[i])
      }
    }
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
        <h2>details: </h2>
       
      </div>
      
      
    </>
  )
}

export default App
