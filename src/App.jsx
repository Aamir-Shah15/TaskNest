import ProgressTracker from "./Component/ProgressTracker";
import TaskList from "./Component/TaskList";
import TaskForm from "./Component/TaskForm";


export default function App () {
  return (
    <div>
      <h1>Task Nest</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
} 

