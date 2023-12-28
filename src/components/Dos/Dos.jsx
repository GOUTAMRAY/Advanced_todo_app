import { useReducer, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { todos as todoList } from "../faker/todo";

const todosReducer = (state, action) => {
   switch (action.type) {
    case "DELETED":
      return state.filter(data => data.id !== action.payload);

    case "CREATED":
      return [...state, action.payload ];
      

   
    default:
      return state;
   }
}



 


const Dos = () => {
  const [todos , dispatch] = useReducer(todosReducer, todoList)

  const [input , setInput ] = useState({
    title : "",
    type: "Pending"
  })

  // handle input change
  const createTodoAdd = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    } ))
  }

   // add new todo 
 const handleCreateTodo = () => {
  dispatch({ type: "CREATED", payload : input })
 }

  return (
    <>
       <Container className="my-5"> 
       <Row className="justify-content-center"> 
         <Col md={6}> 
         <h2 className="text-center" style={{color: "#0d6efd", fontWeight: "700", marginTop: "50px"}}> Add New Todo </h2>
         <Card className="p-3"> 
         <div className="todo-box d-flex justify-content-between">
           <div className="my-3" style={{width: "320px"}}>
              <input type="text" className="form-control" placeholder="Insert a todo" name="title" value={input.title} onChange={createTodoAdd}/>
           </div>
           <div className="my-3" style={{width: "200px"}} >
              <select className="form-control"name="type" value={input.type} onChange={createTodoAdd}>
                <option value="Pending"> Pending </option>
                <option value="Completed"> Completed </option>
                <option value="Deleted"> Deleted </option>
              </select>
           </div>
           <div className="my-3">
              <Button type="submit" onClick={handleCreateTodo}> Add </Button>
           </div>
         </div>
         </Card>

      {/* Todo list below */}

           <Card className="mt-3"> 
             <Card.Header>
                <Card.Title> 
                  <h2> Todos List </h2>
                </Card.Title>
             </Card.Header>
             <Card.Body>
                <ul className="list-group ">
                  {todos.length > 0 ? todos.map((item, index) => {
                    return <li className="list-group-item mb-2 d-flex justify-content-between " key={index} >
                    <span className="title " style={{fontSize: "25px"}}> {item.title} </span> <button className="btn btn-danger" onClick={() => dispatch({ type : "DELETED", payload: item.id })} > X </button>
                  </li>
                  }) :
                  ( <li className="list-group-item">
                    <span className="title"> No Todos Found </span>
                  </li>)}

                </ul>
             </Card.Body>
           </Card> 
         </Col>
       </Row>
     </Container>
    </>
  )
}

export default Dos;















