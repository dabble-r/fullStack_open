

const Course = (props) => {
  
  return <div>
            <h2>{props.course}</h2>
            <h3>{props.id} {props.length}</h3>
              <ul>
                {props.parts}
              </ul>
        </div>
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  let name;
  let id;
  let len;
  let parts;
  for (let key in course) {
    if (key === 'name') {
      name = course[key];
    }
    if (key === 'id') {
      id = course[key];
    }
    if (key === 'parts') {
      len = course[key].length;
      parts = course[key].map(ele => {
        return <li>part name: '{ele.name}'</li>
      })
    }
  }

  return <Course course={name} id={`course id: #${id} -- course length: ${len} parts`} parts={parts} />
}

export default App




