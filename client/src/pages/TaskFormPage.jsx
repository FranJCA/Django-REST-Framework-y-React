
import { useEffect } from "react";
import {useForm} from "react-hook-form";
import {createTask,deleteTask,updateTask,getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-hot-toast";

export function TasksFormPage(){
    const {register,handleSubmit, formState:{errors},
    setValue
    } =
     useForm();


     const navigate = useNavigate()
     const params= useParams();
   //  console.log(params);

    
    const onSubmit =handleSubmit(async data =>{
       // console.log(data)
       //const res= await createTask(data)
               
       //console.log(res)
        if (params.id){
            await updateTask(params.id,data)

            console.log("actualizando")
            toast.success("Tarea actualizada",
               { position:"bottom-right",
                style:{
                    background:"#101010",
                    color: "#fff"
                }

               }
               
               )


        }else{
               await createTask(data)
               toast.success("Tarea creada",
               { position:"bottom-right",
                style:{
                    background:"#101010",
                    color: "#fff"
                }

               }
               
               )
        }
       navigate("/tasks");

    })

    useEffect(()=>{
    async    function loadtask(){
            if(params.id){
           //     console.log("obteniendo datos")
                const {
                    data:{title,description},
                } = await getTask(params.id);
               
                setValue("title", title);
                setValue("description", description);
            //     await  getTask.apply(params.id)
            }

        }
            loadtask();
    },[])


    return (
        <div  className="max-w-xl mx-auto"  >
            <form action="" onSubmit={onSubmit}>
                <input 
                type="text"
                placeholder="title"
                {...register("title",{required: true})}

                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span> titulo es requerido</span> }

                <textarea name="" id="" cols="30" rows="3"
                placeholder="Description"
                {...register("description",{required: true})}
                
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                
                ></textarea>
                {errors.description && <span>   campo es requerido</span> }

                <button 
                className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
                >Save</button>
            </form>
            
            
            {params.id && <button
                className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                onClick={ async () =>{
                const accepted= window.confirm("estas seguro?");
                if (accepted){
                    await deleteTask (params.id);
                    toast.success("Tarea Eliminada",
               { position:"bottom-right",
                style:{
                    background:"#red",
                    color: "#fff"
                }

               }
               
               )


                    navigate("/tasks");
                }
            }
            }
  
            > Delete </button> }
         </div>
    );
}
 