import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Details from './components/Details'
import Reset from './components/Reset'
import Notification from './components/Notification'
import axios from 'axios'
import './App.css'


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [namesFiltered, setNamesFiltered] = useState([]);
  const [notification, setNotification] = useState(null);
  const [nameTitle, setNameTitle] = useState('');
  const [capital, setCapital] = useState('');
  const [area, setArea] = useState('');
  const [languages, setLanguages] = useState([]);
 


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
      if (countries[i]['name']['common'].toLowerCase().includes(country.toLowerCase())) {
        namesFiltered.push(countries[i]);
      }
    }
    if (namesFiltered.length > 10) {
      setNotification('Too many results');
      setNamesFiltered([]);
    } 
    if (namesFiltered.length === 1) {
      //setNamesFiltered([]);
      let langObj = namesFiltered[0]['languages'];
      
      setNameTitle(namesFiltered[0]['name']['common']);
      setCapital(namesFiltered[0]['capital']);
      setArea(namesFiltered[0]['area']);
        for (let key in langObj) {
          let temp = {};
          temp['id'] = key;
          temp['language'] = langObj[key];
          languages.push(temp);
        }
        
      setLanguages(languages);
      console.log(languages);
    } 
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
        <Reset funcReset={reset} />
        <h2>details: </h2>
        <Details showDetails={namesFiltered.length > 1 ? namesFiltered : [] } showLangs={languages} title={nameTitle} capital={!capital ? null : `Capital: ${capital}`} area={!area ? null : `Area: ${area} km^2`} />
        <Notification text={notification} />

      </div>

      
      
    </>
  )
}

export default App
