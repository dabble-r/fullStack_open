import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
  console.log(axios.get(baseURL))
  return axios.get(baseURL)
}


const create = newObject => {
  //console.log(axios.post(baseURL, newObject))
  return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
  //console.log(axios.put(`${baseURL}/${id}`, newObject))
  return axios.put(`${baseURL}/${id}`, newObject)
}

const remove = (name) => {
  return axios.put(baseURL)
    .then(response => {
      setPersons(persons.filter(person => person.name !== name ? person : response.data))
    })
}


export default { getAll, create, update, remove }