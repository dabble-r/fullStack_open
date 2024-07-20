
const Details = (props) => {
 
  
  return (
    <>
    <div className="column">
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
            {props.showDetails.map(ele => <li key={ele['cca3']} > name: {ele['name']['common']} -- population: {ele['population']} <button onClick={props.showFunc} value={ele['cca3']} >show</button></li>)}
          </ul>
        </div>
    </div>
    <div>

    </div>
     
      
    </>
  )
}


export default Details