import { useEffect, useState } from "react";
import { getAllTasks } from "../api/TaskApi";
import { TaskCard } from "./TaskCard";
export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
      try {
        const res = await getAllTasks();
        setTasks(res.data);
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
      }
    }
    loadTask();
  }, []);
  
  return (
      
      <div className="grid grid-cols-3 gap-3">
      {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}


