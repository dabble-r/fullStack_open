import { useState } from 'react'


const setNeutral = () => {
  neutral += 1;
}

const setBad = () => {
  bad += 1;
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <button onClick={() => {console.log(good)}}>
          Good
         
      </button>
      <button onClick={() => {setNeutral}}>
          Neutral
      </button>
      <button onClick={() => {setBad}}>
          Bad
      </button>
    </div>
  )
}

export default App