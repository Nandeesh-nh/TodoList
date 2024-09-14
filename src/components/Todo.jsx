import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TiEdit } from "react-icons/ti";
import { AiTwotoneDelete } from "react-icons/ai";


const Todo = () => {
    const [todos, settodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : []});
    const [todo, settodo] = useState({
        id: "",
        task: "",
        isCompleted : false
    })
    const [show,setshow] = useState(false);

    useEffect(()=>{  
        savetols();
    },[todos])

    const savetols = ()=>{
        console.log("saved to browser")
        localStorage.setItem("todos",JSON.stringify(todos));
        console.log( localStorage.getItem('todos'))
    }
    const handleShow = ()=>{
        setshow(!show);
    }
    const handlechanges = (e) => {
        settodo({ ...todo, task: e.target.value });
    }
    const handleAdd = () => {
        settodos([...todos, { ...todo, id: uuidv4(),isCompleted: false}]);
        settodo({ id: "", task: "", isCompleted : false});
        
    }
    const handleEdit = (id) => {
        let changedTodo= todos.find((ele) => ele.id === id);
        settodo({...changedTodo,id:""});
        let changedTodos = todos.filter((ele)=>{
            return ele.id !== id
          })
        settodos(changedTodos);
        
    }
    const handleDelete = (id) => {
          let changedTodo = todos.filter((ele)=>{
            return ele.id !== id
          })
          settodos(changedTodo);
          
    }
    const handleCheck = (id) =>{
        let changedTodo = todos.map((ele) => {
             if(id===ele.id) {
                return {...ele, isCompleted: !ele.isCompleted}
             }
             return ele
        })
        settodos(changedTodo);
        
    }
    
   

    return (
        <>  
            <h2 className='font-bold text-2xl self-start mb-2'>Add a Todo</h2>
            <div className="input-container mb-4 flex justify-center w-full ">
                
                <input type="text" placeholder="Enter your tasks here: " value={todo.task.length != 0 ? todo.task : ""} onChange={handlechanges} className="input-field h-8 w-[93%] mr-3 rounded-lg p-2" ></input>
                <button className="addTask btn disabled:bg-red-300 transition-all duration-300" disabled={todo.task.length==0} onClick={handleAdd}>Add</button>
            </div>
            <div className="box-2 flex text-start self-start">
            <input className="mr-2" type="checkbox" name="show" onChange={handleShow} />
            <h3>show completed task</h3>
            </div>
            <hr className="border-t-1 border-black my-3 w-full" />
            <h2 className='font-bold text-2xl mb-3'>Your Todos : </h2>
            <div className="todos w-full flex flex-col items-center">
                {todos.length == 0 && <h1>No task are added yet</h1>}
                {todos.map((ele) => {
                    
                    return (show || !ele.isCompleted) && ( 
                        <div key={ele.id} className="todo flex justify-between items-center w-[100%] md:w-[70%] my-1">
                            <div className="task-box  w-[70%] flex">
                                <input type="checkbox" name="isChecked"  checked={ele.isCompleted} onChange={()=>{handleCheck(ele.id)}}/>
                                <h3 className={`font-semibold ml-3 ${ele.isCompleted? "line-through" : ""}`}>{ele.task}</h3>
                            </div>

                            <div className="btn-container flex">
                                <button className='btn mr-2' onClick={()=>{handleEdit(ele.id)}}><TiEdit className='md:text-lg'/></button>
                                <button className='btn' onClick={()=>{handleDelete(ele.id)}}><AiTwotoneDelete className='md:text-lg'/></button>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>

    )
}

export default Todo