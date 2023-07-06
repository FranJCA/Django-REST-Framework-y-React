import {useNavigate} from "react-router-dom"



export	 function TaskCard({ task }){

    const navigate = useNavigate()
    return(
        <div 
        // style={{background: "#101010" }}
        className="bg-zinc-800 p3 hover:bg-zinc-700 hover:cursor-pointer
        "
        onClick={()=> {
            navigate(`/tasks/${task.id}`)
        }}
        >
                



                <h1 className="font-bold uppercase"> {task.title}</h1>
                
                <p className="text-slate-4000"> {task.description}  </p>
               {/* // <hr /> */}
        </div>

    );


}