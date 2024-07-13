

const Notification = (props) => {

  const notificationStyle = {
    color: 'black',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }


  return (<div style={notificationStyle}>
            <p>{props.message}</p>
         </div>)
}






export default Notification