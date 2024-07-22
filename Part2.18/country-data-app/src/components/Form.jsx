
const Form = (props) => {

  return (
          <>
            <form>
              <div>
                <h1 className="header">Search Country:</h1>
                <input value={props.varCountry} onChange={props.funcName}/>
              </div>
            </form>
          </>
  )
}


export default Form