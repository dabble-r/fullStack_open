
const Form = (props) => {
  const formStyle = {
      background: 'lightgrey',
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      margin: 5,
      color: "black"
  }

  return (
    <div>
      <form onSubmit={props.funcNew}>
                  <h3>Add a New:</h3>
                  <div style={formStyle}>
                    <div>
                      name: <input value={props.varName} onChange={props.handleName}/>
                    </div>
                    <span><br></br></span>
                    <div> 
                      number: <input value={props.varNum} onChange={props.handleNum}/>
                    </div>
                    <div>
                      <button type='submit'>add</button>
                    </div>
                  </div>
                  
      </form>
    </div>
  );
}

export default Form
