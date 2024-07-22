const OneCountry = (props) => {


  return (
      <>
          <div  className="column">

              <div className="row">
                <h2>{props.name}</h2>
                <span><br></br></span>
                <h3>{props.area}</h3>
                <h3>{props.capital}</h3>
              </div>
              
              <div className="row">
                <ul> 
                    {props.showOneLangs.map(ele=> <li key={ele.id}>language: {ele.language}</li>)}
                </ul>
              </div>

              <div className="row">
                <img src={props.path}/>
              </div>

          </div>
      </>
  )
}


export default OneCountry