
const Details = (props) => {
  const styleDetailsT = {
    width:  500,
    margin:  32,
    padding: 32,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
  }

  const styleDetailsF = {
    width:  'auto',
    margin:  32,
    padding: 32,
    border: 1,
    borderStyle: 'hidden',
    borderColor: 'black',
    borderRadius: 5,
  }
 
  const styleButton = {
    cursor: 'pointer'
  }

  return (
    <>
    <div style={styleDetailsT}>
      <h2>{props.title}</h2>
      <div>
          <p>{props.capital} </p>
          <p>{props.area}</p>
          <ul>
            {props.showLangs.map(ele=><li key={ele.id}>language: {ele.language}</li>)}
          </ul>
      </div>
        <div>
          <ul>
            {props.showDetails.map(ele => <li key={ele['cca3']} > name: {ele['name']['common']} -- population: {ele['population']} <button onClick={props.showFunc} value={ele['cca3']} style={styleButton}>show</button></li>)}
          </ul>
        </div>
    </div>
     
      
    </>
  )
}


export default Details