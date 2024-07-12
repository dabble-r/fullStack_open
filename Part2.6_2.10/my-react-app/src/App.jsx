import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import People from './components/People'
import Form from './components/Form'





function App() {
  const [persons, setPersons] = useState([
    {name: '', number: null, id: 0}
  ]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filterName, setFilter] = useState('')
  const [foundName, setFoundName] = useState({})
  const [showAll, setShowAll] = useState()


  const handleSubmitPerson = (event) => {
    event.preventDefault();
    if (!newNumber || !newName) {
      window.alert('please enter name and number')
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length
      }
          setPersons(persons.concat(personObj))
          setName('')
          setNumber('')
    }
  }

    const handleNewName = (event) => {
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name === event.target.value) {
          window.alert(`${event.target.value} is already added ot the phonebook.`)
          setName('')
        } else {
          setName(event.target.value);
        }
      }
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
          if (persons[i].name == filterName) {
            flag = true;
            setFoundName({name: filterName, number: persons[i].number});
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

             <form onSubmit={handleSubmitFilter}>
                  <h3>Filter Names</h3>
                  <div>
                    <input value={filterName} onChange={handleFilterName} />
                  </div>
                  <div>
                    <button type='submit'>filter</button>
                  </div>
                  <div>
                    <ul> 
                      <li>{ foundName ? foundName.name : 'no such name' } -- { foundName ? foundName.number : 'no such name' }</li>
                    </ul>
                  </div>
              </form>  

             
              <Form funcNew={handleSubmitPerson} varName={newName} handleName={handleNewName} varNum={newNumber} handleNum={handleNewNumber}/>

             <h2>Numbers</h2>

                Random:
                <Person key={random.id} name={random.name} number={random.number}/>

                All:
                <ul>
                {persons.map(ele => 
                    <People key={ele.id} name={ele.name} number={ele.number} /> 
                  )}
                </ul>
                  
                   
              
    
        </div>
  }




export default App

