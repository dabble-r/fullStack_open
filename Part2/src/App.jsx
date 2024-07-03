import { useState } from 'react'



const Display1 = () => {
  return <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
         </div>
}


const Display2 = (props) => {
 return   <div>
            <p>Good {props.good}</p>
            <p>Neutral {props.neutral}</p>
            <p>Bad {props.bad}</p>
          </div>
}


const Statistics = (props) => {
  return <div>
            <h2>Statistics</h2>
            <p>The toal number of votes is {props.total}</p>
            <h2>Averages</h2>
            <p>The average vote is: {props.average}</p>
            <p>The positive vote rate is at {props.positive}%</p>
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
    const [total, setTotal] = useState([]);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState([]);

    const handleClickGood = () => {
      setGood(good + 1);
      setTotal(total.concat(1));
      setAverage(total.reduce((acc,curr)=>{
          acc += curr;
          return acc ? acc : 0;
      },0) / total.length)
      setPositive(positive.concat(1)); 
    }

    const handleClickNeutral = () => {
      setNeutral(neutral + 1);
      setTotal(total.concat(0));
      setAverage(total.reduce((acc,curr)=>{
        acc += curr;
        return acc ? acc : 0;
      },) / total.length)
    }

    const handleClickBad = () => {
      setBad(bad + 1);
      setTotal(total.concat(-1));
      setAverage(total.reduce((acc,curr)=>{
        acc += curr;
        return acc ? acc : 0;
      },0) / total.length)
    }

  return !total.length ?  
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <Display1 />
        </div>
      )
      : 
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <Display2 good={good} bad={bad} neutral={neutral} />
          <Statistics total={total.length} average={average.toFixed(2)} positive={(positive.length / total.length).toFixed(2) * 100} />
        </div>
      )
}





export default App