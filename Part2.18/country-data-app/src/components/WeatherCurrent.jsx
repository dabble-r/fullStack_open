
const WeatherCurrent = (props) => {
  const styleDiv = {
    float: 'right',
    borderStyle: 'solid'
    
  }

  return (
      <>
        <div style={styleDiv}>
          <h2>{props.actualTemp}</h2>
        </div>
      </>
  )
}

export default WeatherCurrent