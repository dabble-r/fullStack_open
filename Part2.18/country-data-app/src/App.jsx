import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Details from './components/Details'
import Reset from './components/Reset'
import Notification from './components/Notification'
import Flag from './components/Flag'
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
  const [flag, setFlag] = useState(null);
 


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
    setLanguages([]);
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
        
        let langObj = namesFiltered[0]['languages'];
        for (let key in langObj) {
              let temp = {};
              temp['id'] = key;
              temp['language'] = langObj[key];
              languages.push(temp);
          }
        setLanguages(languages);
        setFlag(namesFiltered[0]['flags']['png'])
        setNameTitle(namesFiltered[0]['name']['common']);
        setCapital(namesFiltered[0]['capital']);
        setArea(namesFiltered[0]['area']);
      } 
      setNamesFiltered([]);
  }

  //helper
  /*
  const handleLangs = () => {
    let langObj = namesFiltered[0]['languages'];
    for (let key in langObj) {
          let temp = {};
          temp['id'] = key;
          temp['language'] = langObj[key];
          languages.push(temp);
      }
    }
  setLanguages(languages);
  }
  */
  /*
  //helper
  const handleFlags = () => {
    let flagObj = namesFiltered[0]['flags'];
    for (let key in flagObj) {
      if (key === 'png') {
        setFlag(flagObj[key]);
      }
    }
  }
  */

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
        <Details showDetails={namesFiltered.length > 1 ? namesFiltered : [] } showLangs={!languages ? null : languages} title={nameTitle} capital={!capital ? null : `Capital: ${capital}`} area={!area ? null : `Area: ${area} km^2`} />
        <Flag url={!flag ? null : `${flag}`}/>
        <Notification text={notification} />

      </div>

      
      
    </>
  )
}

export default App
