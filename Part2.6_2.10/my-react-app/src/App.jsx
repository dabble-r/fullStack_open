import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'
import Button from './components/Button'
import Input from './components/Input'
import axios from 'axios'
import personService from './services/persons'


function App() {
  const [persons, setPersons] = useState([{name:null,number:null,id:null}]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filterName, setFilter] = useState('')
  const [foundName, setFoundName] = useState({})
  const baseURL = 'http://localhost:3001/persons/';

// inital state fetch axios
// numbers saved to backend server
useEffect(() => {
  axios
    .get('http://localhost:3001/persons/')
    .then(response => {
      setPersons(response.data)
    })
}, [])


const handleRemovePerson = (event) => {
  const id = event.target.id;
  const name = event.target.name;
 
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService
      .remove(id)
    }
}

const handleUpdatePerson = () => {

}

  const handleSubmitPerson = (event) => {
    event.preventDefault();
    let flag = false;
    if (!newNumber || !newName) {
      window.alert('please enter name and number')
    } 
    if (newNumber && newName) {
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name == newName) {
          flag = true;
          if (window.confirm(`Do you want to update the number for ${newName}?`)) {
              persons[i].number = newNumber;
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
              id: (Math.floor((Math.random() * (persons.length * 10)))).toString()
            }
            personService
            .create(personObj)
            .then(returnPerson => {
                setPersons(persons.concat(returnPerson))
            }) 
        }
      }
    
        setName('')
        setNumber('')
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
        for (let i = 0; i < persons.length; i++) {
          if (persons[i].name.toLowerCase() == filterName.toLowerCase()) {
            flag = true;
            setFoundName({name: persons[i].name, number: persons[i].number});
          } 
        }
        if (!flag) {
          window.alert('no such name')
        }
        setFilter('');
    }

  const random = persons[Math.floor(Math.random() * persons.length)];

  return <div>
             <h2>Phonebook</h2>  

              <Filter submitFilter={handleSubmitFilter} name={filterName} handleFilter={handleFilterName} found={foundName} returnName={foundName.name} returnNum={foundName.number} />
              
              <Form funcNew={handleSubmitPerson} varName={newName} handleName={handleNewName} varNum={newNumber} handleNum={handleNewNumber} />

             <h2>Numbers</h2>

                Random:
                <Person key={random.id} name={random.name} number={random.number} />
               
                All:
                <People showAll={persons} removeFunc={handleRemovePerson}/>

               
               
                
           </div>
  }




export default App

