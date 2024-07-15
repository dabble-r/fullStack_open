
const Details = (props) => {

  return (
    <>
      <div>
        <ul>
          {props.showDetails.map(ele=><li key={ele['cca3']}> name: {ele['name']['common']} -- population: {ele['population']} </li>)}
        </ul>
          
      </div>
    </>
  )
}


export default Details