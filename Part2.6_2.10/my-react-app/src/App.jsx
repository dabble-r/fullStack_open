import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import People from './components/People'





function App() {
  const [persons, setPersons] = useState([
    {name: '', number: null, id: 0}
  ]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState(`___-___-___`);
  const [filterName, setFilter] = useState('')
  const [foundName, setFoundName] = useState({})


  const handleSubmitPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length
    }
        setPersons(persons.concat(personObj))
        setName('enter name here')
        setNumber('___-___-___')
  }

    const handleNewName = (event) => {
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name === event.target.value) {
          window.alert(`${event.target.value} is already added ot the phonebook.`)
          setName('enter name here')
        } else {
          setName(event.target.value);
        }
      }
    } 

    const handleNewNumber = (event) => {
      event.preventDefault();
      setNumber(parseInt(event.target.value))
    }
    
    const handleFilterName = (event) => {
      event.preventDefault();
      setFilter(event.target.value)
    }

    const handleSubmitFilter = (event) => {
     
        event.preventDefault();
        for (let i = 0; i < persons.length; i++) {
          if (persons[i].name == filterName) {
            setFoundName({name: filterName, number: persons[i].number});
          } 
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
              <form onSubmit={handleSubmitPerson}>
                  <h3>Add a New:</h3>
                  <div>
                    name: <input value={newName} onChange={handleNewName}/>
                  </div>
                  <div> 
                    number: <input value={newNumber} onChange={handleNewNumber}/>
                  </div>
                  <div>
                    <button type='submit'>add</button>
                  </div>
              </form>
             <h2>Numbers</h2>
                Random:
                <Person key={random.id} name={random.name} number={random.number}/>
                All:
               {persons.map(ele => 
               <ul>
                  <People key={ele.id} name={ele.name} number={ele.number}/>
               </ul>
                
                )}
             
         </div>
  }




export default App

