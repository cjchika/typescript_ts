import React, {useState} from "react";
import ToDo from "../models/todo";

interface Props {
  children: React.ReactNode;
}

type TodosContextObj = {
	items: ToDo[];
	addTodo: (text:string) => void;
	removeTodo: (id:string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC<Props> = ({children}) => {
	const [todos, setTodos] = useState<ToDo[]>([])

 const handleAddToDo = (todoText: string) => {
  const newToDo = new ToDo(todoText);
  setTodos((prevTodos) => {
    return prevTodos.concat(newToDo)
  })
  console.log(todos);
 }

 const handleRemoveTodo = (todoId:string) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todoId !== todo.id)
  })
 }

 const contextValue: TodosContextObj = {
	items: todos,
	addTodo: handleAddToDo,
	removeTodo: handleRemoveTodo
}

	return <TodosContext.Provider value={contextValue}>
			{children}
	</TodosContext.Provider>
}

export default TodosContextProvider