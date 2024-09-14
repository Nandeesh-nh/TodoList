import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-violet-700 flex justify-between max-sm:justify-center p-2 font-semibold text-white text-lg">
         <div className="logo mx-3 font-extrabold max-sm:text-center ">
            <h2 >TodoList</h2>
         </div>
         <div className="nav-lists flex justify-around gap-4 mx-3 max-sm:hidden">
             <h2 className="opacity-75 hover:opacity-100 cursor-pointer">Home</h2>
             <h2 className="opacity-75 hover:opacity-100 cursor-pointer">Contact Us</h2>
             <h2 className="opacity-75 hover:opacity-100 cursor-pointer">Footer</h2>
         </div>
    </div>
  )
}

export default Navbar