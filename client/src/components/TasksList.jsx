import {useEffect, useState} from "react";
import { getAlllTasks } from "../api/tasks.api";

import { TaskCard } from "./TaskCard";

export function TasksList(){
    const [tasks, setTasks] = useState([]);


    useEffect(() =>{
       async function loadTasks(){
            const res = await getAlllTasks();
            //console.log(res)
            setTasks(res.data);

       }
       loadTasks();
        // alert("pagina cargada");
        console.log("pagina cargada");
    },[]);

    //return  <div> TasksList</div>;
      return <div className="grid grid-cols-3 gap-3">
        {tasks.map(task=>(
            // <div key={task.id}>
            //     <h1> {task.title}</h1>
            //     <p> {task.description}  </p>
            // </div>
            <TaskCard key={task.id} task={task}/>
        ))}
      </div>;
       
}
 

// import {TasksList} from "../components/TasksList"


// export function TasksList(){
//     return (
//         <TasksList/>
//     )
// }
 