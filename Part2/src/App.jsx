import { useState } from 'react'


/*
const Display1 = () => {
  return <div>
            <h2>Statistics</h2>
            <p>No feedback given</p>
         </div>
}
*/


const AnecdoteStatisticsLine = (props) => {
  return <div>
            <h2>{props.text}</h2>
            <p>{props.quote} {props.points}</p>
         </div>
}


const Button1 = (props) => {
  return <div>
            <button onClick={props.handleClick}>
                {props.text} 
            </button>
        </div>
}
    

const Button2 = (props) => {
  return <div>
            <h2>Anecdote</h2>
            <p>{props.quote}</p>
            <p>{props.votes}</p>
            <button onClick={props.handleClick1}>
              {props.text}
            </button>
            <button onClick={props.handleClick2}>
              {props.text2}
            </button>
        </div>
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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  
  

  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState([]);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState([]);
    const [selected, useSelected] = useState(anecdotes[0]);
    const [points, usePoints] = useState({});
    const [mostPoints, setMostPoints] = useState([['',0]]);
    
    const copy = { ...points };


    const handleClickGood = () => {
      setGood(good + 1);
      setTotal(total.concat(1));
      setAverage(total.reduce((acc,curr)=>{
          acc += curr;
          return acc;
      },0) / total.length)
      setPositive(positive.concat(1)); 
    }

    const handleClickNeutral = () => {
      setNeutral(neutral + 1);
      setTotal(total.concat(0));
      setAverage(total.reduce((acc,curr)=>{
        acc += curr;
        return acc;
      },0) / total.length)
    }

    const handleClickBad = () => {
      setBad(bad + 1);
      setTotal(total.concat(-1));
      setAverage(total.reduce((acc,curr)=>{
        acc += curr;
        return acc;
      },0) / total.length)
    }

    const handleClickAnecdote = () => {
      let indx = Math.floor(Math.random() * anecdotes.length);
      useSelected(anecdotes[indx]);
      return selected;
    } 

    const handleClickVote = () => {
      if (!copy.hasOwnProperty(selected)) {
        copy[selected] = 1;
      } else if (copy.hasOwnProperty(selected)) {
        copy[selected]++;
      }
      usePoints(copy);

      for (let key in copy) {
        if (copy[key] > mostPoints[0][1]) {
          mostPoints.pop();
          mostPoints.push([key,copy[key]]);
        }
        setMostPoints(mostPoints);
      }
      
     // console.log(copy)
      console.log(mostPoints)
    }

    

    return !copy[selected] ?  
      (
        <div>
          <Button1 handleClick={handleClickGood} text='good' />
          <Button1 handleClick={handleClickNeutral} text='neutral' />
          <Button1 handleClick={handleClickBad} text='bad' />
          <Table text="No feedback given" quote={selected} />
          <Button2 text="Anecdote" text2="Vote" handleClick1={handleClickAnecdote} handleClick2={handleClickVote} quote={selected} votes={`This quote has no votes yet.`} />
         
          <div>
              <h2>Anecdote with most votes:</h2>
              <p>{`The quote of '${mostPoints[0][0]}' has the most votes at ${mostPoints[0][1]}`}</p>
          </div>
        </div>
        
        
      ) : copy[selected] >= 1 ?
      (
        <div>
          <Button1 handleClick={handleClickGood} text='good' />
          <Button1 handleClick={handleClickNeutral} text='neutral' />
          <Button1 handleClick={handleClickBad} text='bad' />
          <Table good={good} neutral={neutral} bad={bad} total={total.length} />
          <Button2 text="Anecdote" text2="Vote" handleClick1={handleClickAnecdote} handleClick2={handleClickVote} 
                  quote={selected} votes={`This quote has ${copy[selected]} vote(s).`} most={`The quote of ${mostPoints[0][0]} has the most votes at ${mostPoints[0][1]}`} />
          <div>
              <h2>Anecdote with most votes:</h2>
              <p>{`The quote of '${mostPoints[0][0]}' has the most votes at ${mostPoints[0][1]}`}</p>
              
          </div>
        </div>
      )
      :
      (
        <div>
          <Button1 handleClick={handleClickGood} text='good' />
          <Button1 handleClick={handleClickNeutral} text='neutral' />
          <Button1 handleClick={handleClickBad} text='bad' />
          <Table good={good} neutral={neutral} bad={bad} total={total.length} average={average.toFixed(1)} positive={(positive.length / total.length).toFixed(1) * 100 + '%'} />
          <Button2 text="Anecdote" text2="Vote" handleClick1={handleClickAnecdote} handleClick2={handleClickVote} quote={selected} votes={`This quote has ${copy[selected]} vote(s).`} most={selected}/>
          <div>
              <h2>Anecdote with most votes:</h2>
              <p>{selected}</p>
              <p>{mostPoints}</p>
          </div>
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

/*
//anecdote button
<Button1 text="next anecdote" />
text2="vote" quote={selected} handleClick={handleClickAnecdote}
*/
export default App