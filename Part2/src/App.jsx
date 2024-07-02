import { useState } from 'react'


const Display = (props) => {
 return <div> Statistics
          <p>Total number of votes is {props.total}</p>
          <p>Good {props.good}</p>
          <p>Neutral {props.neutral}</p>
          <p>Bad {props.bad}</p>
        </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(0);


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
    //console.log(bad);
  }

  const setToValue = (newVal) => {
    setValue(newVal);
  }

  return (
    <div>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <Display total={good + bad + neutral} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}





export default App