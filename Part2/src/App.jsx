import { useState } from 'react'


const Display = (props) => {
 return   <div>
            <p>Good {props.good}</p>
            <p>Neutral {props.neutral}</p>
            <p>Bad {props.bad}</p>
          </div>
}

const Total = (props) => {
  return <div>
            <h2>Statistics</h2>
            <p>The toal number of votes is {props.total}</p>
         </div>;
}

const Button = (props) => {
  return <button onClick={props.handleClick}>
                {props.text}
        </button>
}
    



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(0);


  const handleClickGood = () => {
    setGood(good + 1);
    setValue(value + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setValue(value + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    setValue(value + 1)
  }

  

  return (
    <div>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <Display good={good} bad={bad} neutral={neutral}/>
      <Total total={value}/>
    </div>
  )
}





export default App