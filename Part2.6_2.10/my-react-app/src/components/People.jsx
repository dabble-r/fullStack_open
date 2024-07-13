


const People = (props) => {

  return <div >
            <ul >
                {props.showAll.map(ele=><li key={ele.id}>{ele.name} {ele.number} <button onClick={props.removeFunc} id={ele.id} name={ele.name}>delete</button></li>)}
            </ul>
        </div>    
}




export default People