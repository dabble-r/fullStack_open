
const Details = (props) => {

  return (
    <>
     <h2>{props.title}</h2>
     <div>
        <p>{props.capital} </p>
        <p>{props.area}</p>
        
        <h3>languages:</h3>
        <ul>
          {props.showLangs.map(ele=><li key={ele.id}>{ele.language}</li>)}
        </ul>
     </div>
      <div>
        <ul>
          {props.showDetails.map(ele=><li key={ele['cca3']}> name: {ele['name']['common']} -- population: {ele['population']} </li>)}
        </ul>
      </div>
      <div>

      </div>
    </>
  )
}


export default Details