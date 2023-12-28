import { useState } from "react";



const Todo = () => {
  const [ todo, setTodo ] = useState([]);
  const [input, setInput ] = useState("");

  // create a todo 
  const handleCreateTodo = () => {
    setTodo((prevState) => [...prevState, input])

  }

  // remove  a todo 
  const handleRemoveTodo = (item) => {
    setTodo((prevState) => prevState.filter((data) => data !== item))
  }

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="box d-flex">
                <input type="text"  className="form-control"  value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="btn btn-primary" onClick={handleCreateTodo}>  Add </button> 
                <br /> 
                <br />
           
            </div>

            <div className="output pt-3">
              <ul style={{textAlign: "center", fontSize: "20px"}}>
               {todo.length > 0 ? todo.map((item,index) => <li key={index} className="p-2"> {index + 1}. {item} <button className="btn btn-danger" onClick={() => handleRemoveTodo(item)}> X </button> </li>) : "No Todo Found!"}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Todo;















