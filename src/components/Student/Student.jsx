import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";


const Student = () => {

  const headingRef = useRef(null);
  const btnRef = useRef(null);

  // useEffect(() => {
  //   headingRef.current.innerHTML = "my name is goutam";
  // })

   useEffect(() => {
    headingRef.current.addEventListener("click" , () => {
        headingRef.current.innerHTML = "my name is goutam";
    })
   })

   useEffect(() => {
      btnRef.current.addEventListener("click" , () => {
         alert("hello");
    })
   })


  return (
    <>
      <Container> 
        <Row> 
          <Col> 
             <div className="head my-4">
               <h1 ref={headingRef}> Hello </h1> 
               <hr />
               <button ref={btnRef}> click </button>
             </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Student;










