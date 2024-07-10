
import App from './App'


const Course = (props) => {
  
  return <div>
            <h2>{props.name}</h2>
            <span>{props.text} {props.total}</span>
        </div>
}

export default Course