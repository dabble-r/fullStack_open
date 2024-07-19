const OneCountry = (props) => {

    const styleOneCountry = {
      float: 'left',
      borderStlye: 'solid',
      borderRadius: 10
    }



  return (
      <>
          <div style={styleOneCountry}>
              <h2>{props.name}</h2>
              <span><br></br></span>
              <h3>{props.area}</h3>
              <h3>{props.capital}</h3>
              <div>
                <ul> 
                    {props.showOneLangs.map(ele=> <li key={ele.id}>language: {ele.language}</li>)}
                </ul>
                
              </div>
          </div>
      </>


  )
}


export default OneCountry