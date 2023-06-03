import { Routes, Route } from 'react-router-dom'
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";

export default function Router() {
  return (
    <Routes>
        <Route path="/hola" element={<h1>hola</h1>}></Route>
        <Route path="/about" element={<h1>about</h1>}></Route>

         {/* redirect to tasks */}
         {/* <Route path="/" element={<Navigate to="/tasks" />} /> */}
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
    </Routes>
  )
}