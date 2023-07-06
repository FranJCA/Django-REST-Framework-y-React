import axios from "axios"
//con axios permite colocar que la base de los envios sea una determinada direccion
const taskApi= axios.create(
    {
        baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
    })


export const getAlllTasks=()=>  taskApi.get("/")
    //return axios.get("http://localhost:8000/tasks/api/v1/tasks/")
    


export const createTask = (task) =>{

    return taskApi.post("/",task)
    //es como si escribieras "http://localhost:8000/tasks/api/v1/tasks/"
}

export const deleteTask = (id) => taskApi.delete(`/${id}`)

export const updateTask = (id,task) => taskApi.put(`/${id}/`,task)

export const getTask= (id) => taskApi.get(`/${id}/`)
// cuando se hace una peticion SIMEPRE se de be erminar con un /