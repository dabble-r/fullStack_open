


const People = (props) => {

  return <div>
            <ul>
                {props.showAll.map(ele=><li key={ele.id}>{ele.name} {ele.number}</li>)}
            </ul>
             
            
        </div>
           
        
       
        
  
  
       
}




export default People