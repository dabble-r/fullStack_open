
const Filter = (props) => {
  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

  

  return (
    <>
      <form onSubmit={props.funcSearch}>
        <button type='submit' className="button">Search</button>
      </form>
    </>
  )
}


export default Filter