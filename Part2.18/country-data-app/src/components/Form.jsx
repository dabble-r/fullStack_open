
const Form = (props) => {

  return (
          <>
            <form>
              <div>
                <input value={props.varCountry} onChange={props.funcName}/>
              </div>
            </form>
          </>
  )
}


export default Form