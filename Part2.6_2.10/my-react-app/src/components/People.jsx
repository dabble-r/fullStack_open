


const People = (props) => {
    const peopleStyle = {
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        color: "black"
    }

  return (<div style={peopleStyle}>
            <ul >
                {props.showAll.map(ele=><li key={ele.id} className='people'>{ele.name} {ele.number} <button onClick={props.removeFunc} id={ele.id} name={ele.name}>delete</button></li>)}
            </ul>
        </div>  )  
}




export default People