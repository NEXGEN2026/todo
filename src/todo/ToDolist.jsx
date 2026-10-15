import { useState } from "react";
import "./Styletodo.css"
function ToDolist(){
    const [task,settask]=useState(["eat","sleep","repeat"]);
    const [newtask,setnewtask]=useState("");

    function handleinputchange(event){
        setnewtask(event.target.value);
    };
    function Addnewtask(){
       if(newtask.trim()!==""){
         settask(t=>[...t,newtask]);
         setnewtask("");
       };
    };
    function deletetask(index){
        const updatetask=task.filter((_,i)=>i!==index);
        settask(updatetask);
    };
    function moveup(index){
         if(index>0){
            const updatedtask=[...task];
            [updatedtask[index],updatedtask[index-1]]=
            [updatedtask[index-1],updatedtask[index]];
            settask(updatedtask);
         }
    };
    function movedown(index){
        if(index<task.length-1){
            const updatedtask=[...task];
            [updatedtask[index],updatedtask[index+1]]=
            [updatedtask[index+1],updatedtask[index]];
            settask(updatedtask);
         }
    };
     return(<div className="TODO">
               <h1>TODO-LIST</h1>
                   <div>
                         <input type="text" 
                         placeholder="enter new taks" 
                         value={newtask}
                         onChange={handleinputchange}/>

                         <button onClick={Addnewtask} className="btn-add">
                             ADD
                         </button>
                   </div>
                        <ol>
                             {task.map((task,index)=> <li key={index}>

                               <span className="text">{task}</span>

                               <button onClick={()=>deletetask(index)} className="delete-btn">
                                  delete 
                               </button>

                               <button onClick={()=>moveup(index)} className="up-btn">
                                  UP
                               </button>
                                      
                               <button onClick={()=>movedown(index)} className="down-btn">
                                  down
                               </button>


                            </li> )} 
                         </ol>

                   </div>
     );
};
export default ToDolist 