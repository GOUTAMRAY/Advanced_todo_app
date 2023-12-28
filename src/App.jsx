

import { ToastContainer } from 'react-toastify'
import './App.css'
import Update from './components/Update/Update'







function App() {
 

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

     <Update />

    </>
  )
}

export default App
