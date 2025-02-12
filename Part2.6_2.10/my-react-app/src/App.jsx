import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'
import Button from './components/Button'
import Input from './components/Input'
import Notification from './components/Notification'
import axios from 'axios'
import personService from './services/persons'


function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filterName, setFilter] = useState('')
  const [foundName, setFoundName] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [random, setRandom] = useState(null)
  const [randName, setRandName] = useState('')
  const [randNumber, setRandNumber] = useState(null)
  const baseURL = 'http://localhost:3001/persons/';

// inital state fetch axios
// numbers saved to backend server

useEffect(() => {
  if (persons) {
    axios
    .get('http://localhost:3001/persons/')
    .then(response => {
      setPersons(response.data)
    })
  }
}, [persons])




const handleRemovePerson = (event) => {
  const id = event.target.id;
  const name = event.target.name;
 
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService
      .remove(id) 
      setErrorMessage(`${name} deleted`)
      setTimeout(() => {
        setErrorMessage(null)
      },2500)
    }
}



  const handleSubmitPerson = (event) => {
    event.preventDefault();
    let id;
    let flag = false;
    if (!newNumber || !newName) {
      setErrorMessage('please enter name and number')
      setTimeout(() => {
          setErrorMessage(null)
      },5000)
    } 
    if (newNumber && newName) {
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name.toLowerCase() == newName.toLowerCase()) {
          flag = true;
          id = persons[i].id;
          if (window.confirm(`Do you want to update the number for ${newName}?`)) {
             // persons[i].number = newNumber;
             personService 
              .update(id, {...persons[i],number:newNumber})
              .catch(() => {
                setErrorMessage(`${persons[i].name} not found.`)
                setPersons(persons.filter(ele => ele.id !== id))
              })
              setErrorMessage(`${persons[i].name} updated`)
              setTimeout(() => {
                setErrorMessage(null)
              },2500)
            } else {
              setName('');
              setNumber('');
            }
          }
      }
      if (!flag) {
          const personObj = {
            name: newName,
            number: newNumber,
            id: (persons.length + 1).toString()
          }
          personService
            .create(personObj)
            .then(returnPerson => {
                setPersons(persons.concat(returnPerson))
          }) 
        }
      }
      setName('');
      setNumber('');
  }
      

    const handleNewName = (event) => {
      event.preventDefault();
     setName(event.target.value);
    }
      

    const handleNewNumber = (event) => {
      event.preventDefault();
      setNumber(event.target.value)
    }
    
    const handleFilterName = (event) => {
      event.preventDefault();
      setFilter(event.target.value)
    }

    const handleSubmitFilter = (event) => {
     let flag = false;
        event.preventDefault();
        if (!persons.length) {
          setErrorMessage('No person in phonebook')
        } else {
          for (let i = 0; i < persons.length; i++) {
            if (persons[i].name.toLowerCase() == filterName.toLowerCase()) {
              flag = true;
              setFoundName({name: persons[i].name, number: persons[i].number});
            } 
          }
          if (!flag) {
            setErrorMessage('no such name found')
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
          }
        }
        setFilter('');
    }

  
  const handleRandom = (event) => {
    event.preventDefault();
    const randVal = !persons.length ? 0 : Math.floor(Math.random() * persons.length);
    setRandom(randVal)
    setRandName(persons[randVal]['name'])
    setRandNumber(persons[randVal]['number'])
    
  }
  return <div>
             <h2>Phonebook</h2>  

              <Notification message={errorMessage}/>

              <Filter submitFilter={handleSubmitFilter} name={filterName} handleFilter={handleFilterName} found={foundName} returnName={foundName.name} returnNum={foundName.number} />
              
              <Form funcNew={handleSubmitPerson}  varName={newName} handleName={handleNewName} varNum={newNumber} handleNum={handleNewNumber} />

             <h2>Numbers</h2>

             Random:
             <Person funcRandom={handleRandom} randName={randName} randNumber={randNumber} />
             <span><br></br></span>

                All:
                <People showAll={persons} removeFunc={handleRemovePerson}/>

               
               
                
           </div>
  }




export default App

