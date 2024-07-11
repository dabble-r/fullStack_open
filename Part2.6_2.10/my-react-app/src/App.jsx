import { useState } from 'react'
import Name from './components/Name'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: 1}
  ])
  const [newName, setName] = useState('')

  const handleNewName = (event) => {
    setName(event.target.value);
  } 

  const addName = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObj))
    setName('enter name here')
    console.log(persons)
  }

  return <div>
             <h2>Phonebook</h2>
              <form onSubmit={addName}>
                  <div>
                    name: <input value={newName} onChange={handleNewName}/>
                  </div>
                  <div> debug: {newName}</div>
                  <div>
                    <button type='submit'>add</button>
                  </div>
              </form>
              <ul>
                {persons.map(ele => 
                  <Name key={ele.id} name={ele.name} />
                )}
              </ul>
             <h2>Numbers</h2>
         </div>
}



export default App
