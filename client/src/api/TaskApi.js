import axios from "axios";

const TasksApi=  axios.create({
   baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
})

export const getAllTasks = () => TasksApi.get("/");
export const getTask = (id) => TasksApi.get(`/${id}/`);
export const createTask = (task) => TasksApi.post("/", task);
export const deleteTask = (id) => TasksApi.delete(`/${id}`); 
export const updateTask = (id, task) => TasksApi.put(`/${id}/`, task);
