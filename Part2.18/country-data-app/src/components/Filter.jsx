
const Filter = (props) => {
  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

  return (
    <>
      <form onSubmit={props.funcSearch}>
        <button type='submit'>search</button>
      </form>
    </>
  )
}


export default Filter