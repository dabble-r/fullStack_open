

const Person = (props) => {
 const randomStyle = {
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    color: "black"
  }
  

  return (<div style={randomStyle}>
            <ul>
              <li> {props.randName} -- {props.randNumber} </li>
            </ul>
            <div>
              <form onSubmit={props.funcRandom}>
                <button type='submit'>Explore</button>
              </form>
            </div>
        </div>)
}






export default Person