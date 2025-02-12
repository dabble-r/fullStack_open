import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}


const create = newObject => {
  //console.log(axios.post(baseURL, newObject))
  const request =  axios.post(baseURL, newObject);
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  //console.log(axios.put(`${baseURL}/${id}`, newObject))
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
    // DELETE request using axios inside useEffect React hook
   return request.then(response => response.data)
}


export default { getAll, create, update, remove }