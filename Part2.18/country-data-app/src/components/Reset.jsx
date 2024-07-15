
const Reset = (props) => {

  return (
    <>

      <div>
        <form onSubmit={props.funcReset}>
          <button type='submit'>Reset</button>
        </form>
      </div>
    
    </>
  )
}


export default Reset