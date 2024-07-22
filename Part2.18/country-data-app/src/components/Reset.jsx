
const Reset = (props) => {
  

  return (
    <>

      <div>
        <form onSubmit={props.funcReset}>
          <button type='submit' className="button">Reset</button>
        </form>
      </div>
    
    </>
  )
}


export default Reset