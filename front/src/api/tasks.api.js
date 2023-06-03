import axios from "axios";

const URL = process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);

const tasksApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/`,
});

export const getAllTasks = () => tasksApi.get("tasks");

export const getTask = (id) => tasksApi.get(`tasks/${id}`); //Interpolation interprets JavaScript code ``

export const createTask = (task) => tasksApi.post("tasks/", task);

export const updateTask = (id, task) => tasksApi.put(`tasks/${id}/`, task); //Interpolation interprets JavaScript code ``

export const deleteTask = (id) => tasksApi.delete(`tasks/${id}`); //Interpolation interprets JavaScript code ``

// export const getAllTasks = () => {
//     return axios.get('http://127.0.0.1:8000/tasks/api/v1/tasks')
// }