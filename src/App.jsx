import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import "./index.css"
const App = () => {
  
  return (
    <>
    <Navbar></Navbar>
     <div className="main-box w-[90%] md:w-[60%] flex flex-col items-center mt-8 bg-violet-200 mx-auto p-8 rounded-lg min-h-[75vh]">
      <Todo></Todo>
    </div>
    </>
  )
}

export default App