
const Filter = (props) => {
  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

  const styleButton = {
    cursor: 'pointer'
  }

  return (
    <>
      <form onSubmit={props.funcSearch}>
        <button type='submit' style={styleButton}>Search</button>
      </form>
    </>
  )
}


export default Filter