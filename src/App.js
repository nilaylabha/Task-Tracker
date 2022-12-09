import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //state to hide and unhide the task from
  const [showAddTask, setShowAddTask] = useState(false);

  //state for the task
  const [tasks, setTasks] = useState([]);

  //Use fetch api calling
  // useEffect(()=>{
  //   const fetchTask =async()=>{
  //     const res= await fetch("http://localhost:5000/tasks")
  //     const data = await res.json()
  //     setTasks(data)
  //   }
  //   fetchTask()
  // },[])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  //Fetch the tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Fetch the task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    //to assign id staticaly
    // const id=Math.floor(Math.random() * 100000)+1
    // const newTask={id, ...task}
    // setTasks([...tasks,newTask])
    // console.log(id,task)  
  };

  //delete function
  const deletetask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //togglereminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //to show addtask form
  const showTaskPanel = () => {
    setShowAddTask((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task traker"
          showAddTaskpanel={showTaskPanel}
          showAddTask={showAddTask}
        />

        {showAddTask && <AddTask addtask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deletetask}
            ontoggle={toggleReminder}
          />
        ) : (
          "There is no task to do"
        )}

        <Routes>
          <Route path="About" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
