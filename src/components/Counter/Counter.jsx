import { useState } from "react";



const Counter = () => {
  const [count, setCount ] = useState(0);


  // handle increment 
  const handleDescBtn = () => {
    setCount((prevState) => prevState - 1)
  }
  // handle increment 
  const handleIncBtn = () => {
    setCount((prevState) => prevState +  1)
  }
  // handle increment 
  const handleResetBtn = () => {
    setCount(0)
  }
  // handle set count
  const handleSetBtn = () => {
    setCount(1000)
  }

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 style={{fontSize: "100px"}}> { count } </h2>
            <hr /> 
            <button onClick={handleDescBtn} className="btn btn-primary"> -- </button> &nbsp;
            <button onClick={handleIncBtn} className="btn btn-primary"> ++  </button> &nbsp;
            <button onClick={handleResetBtn} className="btn btn-primary"> Reset </button> &nbsp;
            <button onClick={handleSetBtn} className="btn btn-primary" > Set  </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter;
