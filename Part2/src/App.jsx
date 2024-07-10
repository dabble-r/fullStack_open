

const Course = (props) => {
  
  return <div>
            <h2>{props.course}</h2>
            <h3>{props.id} {props.length}</h3>
              <ul>
                {props.parts} {props.exercises}
              </ul>
            <h4>Total of {props.total} exercises.</h4>
        </div>
}


const App = () => {
  const courses = [
      {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const arrMap = courses.map(ele => {
   let total; 

    const parts = ele['parts'].map(item => {
      total = ele['parts'].reduce((acc,curr) => {
          acc += curr['exercises'];
          return acc;
      },0)

      return <li key={item['id']}>Part Name: {item['name']} -- Exercises: {item['exercises']}</li>
           
    })
        
      return <div>
                <h2 key={ele['id']}>{ele['name']}</h2>
                  <ul>
                    {parts}
                  </ul>
                <span>Total exercises: {total}</span>
             </div>
  })

  return <div>
            {arrMap}
         </div>
  
  /*
  let name = [];
  let id = [];
  let len = [];
  let parts = [];
  let exercises = [];
  let total = [];
  */

  /*
  // last array obj overwrites all preceding, not a solution      
  // for array data structure (courses)
  for (let i = 0; i < courses.length; i++) {
    for (let key in courses[i]) {
      if (key === 'name') {
        name.push(courses[i][key]);
      }
      if (key === 'id') {
        id.push(courses[i][key]);
      }
      if (key === 'parts') {
        len.push(courses[i][key].length);
        parts.push(courses[i][key].map(ele => {
          return <li key ={ele.id}>part name: `{ele.name}` -- exercises: {ele.exercises} </li>
        }))
        total.push(courses[i][key].reduce((acc,curr) => {
            acc += curr.exercises;
            return acc;
        },0))
      }
    }
  }
*/
  
  //return <Course course={name} id={`course id: #${id} -- course length: ${len} parts`} parts={parts} exercises={exercises} total={total}/>
    
  
}

export default App




