import { useReducer } from "react"
import { Col, Container, Row } from "react-bootstrap"

const countReducer = (state, action) => {
   switch (action.type) {
    case "INC":
      return state + 1;

    case "DESC":
      return state - 1;

    case "RESET":
      return 0;

    case "RESTART":
      return 1000;

    case "UPCOME":
      return action.payload;
     
    default:
     return state;

   }
};

const UpdateCounter = () => {
  const [count, dispatch ] = useReducer(countReducer , 0)
  return (
    <>
      <Container className="my-5"> 
        <Row> 
          <Col> 
             <div>
              <h1 style={{fontSize: "80px"}}> { count } </h1>
              <hr />
              <button onClick={() => dispatch({ type : "DESC"})}> -- </button> &nbsp;
              <button onClick={() => dispatch({ type : "INC"})}>  ++ </button> &nbsp;
              <button onClick={() => dispatch({ type : "RESET"})}> reset </button> &nbsp;
              <button onClick={() => dispatch({ type : "RESTART"})}> restart </button> &nbsp;
              <button onClick={() => dispatch({ type : "UPCOME", payload : 999 })}> Payload </button>
             </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UpdateCounter











