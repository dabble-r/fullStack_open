
const Reset = (props) => {
  const styleButton = {
    cursor: 'pointer'
  }

  return (
    <>

      <div>
        <form onSubmit={props.funcReset}>
          <button type='submit' style={styleButton}>Reset</button>
        </form>
      </div>
    
    </>
  )
}


export default Reset