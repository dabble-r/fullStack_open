import { useState } from 'react'
import Name from './components/Name'
import Number from './components/Number'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: 1, number:123456789}
  ]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState(`___-___-___`);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
        setPersons(persons.concat(personObj))
        console.log(persons)
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
  setNumber(parseInt(event.target.value))
  console.log(typeof newNumber)
}
 
  return <div>
             <h2>Phonebook</h2>
              <form onSubmit={handleSubmit}>
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
             <ul>
                {persons.map(ele => 
                  <Number key={ele.id} name={ele.name} number={ele.number}/>
                )}
             </ul>
         </div>
  }



export default App
