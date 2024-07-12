
const Form = (props) => {
  
  return (
    <div>
      <form onSubmit={props.funcNew}>
                  <h3>Add a New:</h3>
                  <div>
                    name: <input value={props.varName} onChange={props.handleName}/>
                  </div>
                  <div> 
                    number: <input value={props.varNum} onChange={props.handleNum}/>
                  </div>
                  <div>
                    <button type='submit'>add</button>
                  </div>
      </form>
      
      
    </div>
  );
}

export default Form
