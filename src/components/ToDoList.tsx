import React from 'react'
import styles from './ToDoList.module.css'

const ToDoList: React.FC<{text: string, onRemoveTodo: () => void}> = ({text, onRemoveTodo}) => {
    
  return (
    <li className={styles.item} onClick={onRemoveTodo}>{text}</li>
  )
}

export default ToDoList