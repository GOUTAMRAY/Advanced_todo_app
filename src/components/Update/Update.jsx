import axios from "axios";
import { useEffect, useReducer,  useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const adosRoducer = (state, {type, payload}) => {
    switch (type) {
      case "Load_Ados_From_Api":
         return payload;

      case "Create_Ados_From_Api":
         return [...state, payload];

      case "Filter_Ados":
         return payload;

      case "Delete_from_api":
         return state.filter(data => data.id !== payload);
    
      default:
        return state;
    }
}



const Update = () => {
    const [ados, dispatch ] = useReducer(adosRoducer, [])

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

  // load ados 
  const loadAdos = async() => {
   const response = await axios.get("http://localhost:5000/todos");
  
  dispatch({type : "Load_Ados_From_Api", payload: response.data})
 }
  
 // create ados 
  const createAdosTodo = async () => {
    if(!input.title || !input.type){
      toast("All fields are Required!")
    }else{
      const response = await axios.post(`http://localhost:5000/todos`, input);
      dispatch({ type : "Create_Ados_From_Api", payload: response.data})
    }

     
  }
  // delete todos
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type : "Delete_from_api", payload : id });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
   
    });

   
  }

  // filter ados 
  const handleAdosFilter = async(e) => {
    const type = e.target.value;

    if (type === "*") {
      const response = await axios.get(`http://localhost:5000/todos`);
       dispatch({type : "Filter_Ados", payload : response.data})
    }else{
      const type = e.target.value;
      const response = await axios.get(`http://localhost:5000/todos?type=${type}`);
       dispatch({type : "Filter_Ados", payload : response.data})
    }


  }

 useEffect(() => {
  loadAdos();

 }, [])


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
              <Button type="submit" onClick={createAdosTodo}> Add </Button>
           </div>
         </div>
         </Card>

      {/* Todo list below */}

           <Card className="mt-3"> 
             <Card.Header>
                <Card.Title> 
                  <h2> Todos List </h2>
                 {/* <Button variant="success" onClick={() => handleAdosFilter("Completed")}> Completed </Button> &nbsp;
                 <Button variant="info" onClick={() => handleAdosFilter("Pending")}> Pending </Button> &nbsp;
                 <Button variant="danger" onClick={() => handleAdosFilter("Deleted")}> Deleted </Button> */}

                 <select onChange={handleAdosFilter}>
                    <option value="*"> All </option>
                    <option value="Pending"> Pending </option>
                    <option value="Completed"> Completed </option>
                    <option value="Deleted"> Deleted </option>
                 </select>

                </Card.Title>
             </Card.Header>
             <Card.Body>
                <ul className="list-group ">
                  {ados.length > 0 ? ados.map((item, index) => {
                    return <li className="list-group-item mb-2 d-flex justify-content-between " key={index} >
                    <span className="title " style={{fontSize: "25px"}}> {item.title} </span> <button className="btn btn-danger" onClick={() => handleDelete(item.id)}> X </button>
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

export default Update



