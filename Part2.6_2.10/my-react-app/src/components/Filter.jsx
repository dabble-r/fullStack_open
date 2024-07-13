
const Filter = (props) => {
  const filterStyle = {
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    color: "black"
  }

  return (
    <div >
        <form onSubmit={props.submitFilter} >
                  <h3>Filtered Name</h3>
                  <div style={filterStyle}>
                    <div>
                      <input value={props.name} onChange={props.handleFilter} />
                    </div>
                    <div>
                      <button type='submit'>filter</button>
                    </div>
                    <div>
                      <ul> 
                        <li className='filter' >{ props.found ? props.returnName : 'no such name' } -- { props.found ? props.returnNum : 'no such name' }</li>
                      </ul>
                    </div>
                  </div>
                  
              </form> 
    </div>
  )}







export default Filter