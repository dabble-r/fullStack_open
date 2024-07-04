import { useState } from 'react'



const Display1 = () => {
  return <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
         </div>
}







const StatisticsLine = (props) => {
  return <div>
            <h2>{props.heading}</h2>
            <p>{props.text} {props.value}</p>
         </div>
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
      },0) / total.length)
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
      ) : total.length === 1
      ? 
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine heading='Statistics' text="Total votes:" value={total.length} />
          <StatisticsLine text="Positive rate: " value={(positive.length / total.length).toFixed(1) * 100 + '%'} />
        </div>
      )
      :
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine heading='Statistics' text="Total votes:" value={total.length} />
          <StatisticsLine text="Average" value={average.toFixed(2)} />
          <StatisticsLine text="Positive rate: " value={(positive.length / total.length).toFixed(1) * 100 + '%'} />
        </div>
      )
}





export default App