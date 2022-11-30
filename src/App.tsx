import { useState } from "react"
import NewToDo from "./components/NewToDo"
import ToDos from "./components/ToDos"
import Todo from "./models/todo"
import ToDo from "./models/todo"

function App() {
 const [todos, setTodos] = useState<ToDo[]>([])

 const handleAddToDo = (todoText: string) => {
  const newToDo = new ToDo(todoText);
  setTodos((prevTodos) => {
    return prevTodos.concat(newToDo)
  })
  console.log(todos);
  
 }

  return (
    <div >
      <NewToDo onAddToDo={handleAddToDo}/>
     <ToDos items={todos}/>
    </div>
  )
}

export default App
