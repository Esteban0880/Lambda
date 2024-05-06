import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TasksFormPage";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to={"/tasks"} />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/CreateTask" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
