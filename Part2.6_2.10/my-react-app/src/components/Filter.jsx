
const Filter = (props) => {
  

  return (
    <div>
        <form onSubmit={props.submitFilter}>
                  <h3>Filtered Name</h3>
                  <div>
                    <input value={props.name} onChange={props.handleFilter} />
                  </div>
                  <div>
                    <button type='submit'>filter</button>
                  </div>
                  <div>
                    <ul> 
                      <li>{ props.found ? props.returnName : 'no such name' } -- { props.found ? props.returnNum : 'no such name' }</li>
                    </ul>
                  </div>
              </form> 
    </div>
  )}







export default Filter