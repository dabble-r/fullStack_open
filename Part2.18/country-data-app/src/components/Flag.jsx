
const Flag = (props) => {
  const styleFlag = {
      height: '100%',
      width: '100%',
      float: 'left'
  }

  return (
    <>
      <div style={styleFlag}>
        <img src={props.url}/>
      </div>
    </>
  )
}


export default Flag