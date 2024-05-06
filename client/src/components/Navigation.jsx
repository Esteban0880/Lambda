import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between p-3">
      <Link to={"/tasks"}>
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
     
      <Link to={"/CreateTask"} className=" bg-indigo-500 px-2 py-3 rounded-lg">Create task </Link>
  
    </div>
  );
}

export default Navigation;
