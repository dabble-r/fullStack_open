import { useState } from 'react'


/*
const Display1 = () => {
  return <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
         </div>
}
*/


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
    

const Table = (props) => {
  return <table>
            <thead>
              <tr>
                <th>Statistics</th>
              </tr>
              <tr>
                <td>{props.text}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Good</td>
                <td>{props.good}</td>
              </tr>
              <tr>
                <td>Bad</td>
                <td>{props.bad}</td>
              </tr>
              <tr>
                <td>Neutral</td>
                <td>{props.neutral}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{props.total}</td>
              </tr>
              </tbody>
            <tfoot>
              <tr>
                <th>Averages</th>
              </tr>
              <tr>
                <td>Average vote</td>
                <td>{props.average}</td>
              </tr>
              <tr>
                <td>Positive rate</td>
                <td>{props.positive}</td>
              </tr>
            </tfoot>
        </table>
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
          <Table text="No feedback given"/>
        </div>
      ) : total.length === 1
      ? 
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <Table good={good} neutral={neutral} bad={bad} total={total.length} />
        </div>
      )
      :
      (
        <div>
          <Button handleClick={handleClickGood} text='good' />
          <Button handleClick={handleClickNeutral} text='neutral' />
          <Button handleClick={handleClickBad} text='bad' />
          <Table good={good} neutral={neutral} bad={bad} total={total.length} average={average.toFixed(1)} positive={(positive.length / total.length).toFixed(1) * 100 + '%'}/>
        </div>
      )
}


//Display some values
/*
<StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine heading='Statistics' text="Total votes:" value={total.length} />
          <StatisticsLine text="Positive rate: " value={(positive.length / total.length).toFixed(1) * 100 + '%'} />


*/


// Display full values
/*
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine heading='Statistics' text="Total votes:" value={total.length} />
          <StatisticsLine text="Average" value={average.toFixed(1)} />
          <StatisticsLine text="Positive rate: " value={(positive.length / total.length).toFixed(1) * 100 + '%'} />
*/


export default App