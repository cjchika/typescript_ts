import React, {useContext} from 'react'
import ToDoList from './ToDoList'
import styles from './Todos.module.css'
import { TodosContext } from '../store/todos-context'

const ToDos: React.FC = () => {
	const todosCtx = useContext(TodosContext)

  return (
    <ul className={styles.todos}>
        {todosCtx.items.map(item => <ToDoList key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />)}
    </ul>
  )
}

export default ToDos