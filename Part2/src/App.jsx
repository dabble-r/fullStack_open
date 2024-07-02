import { useState } from 'react'


const Display = (props) => {
  return <div>{props.value}</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
    //console.log(good);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    //console.log(neutral);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    console.log(bad);
  }

  return (
    <div>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <Display />
    </div>
  )
}





export default App