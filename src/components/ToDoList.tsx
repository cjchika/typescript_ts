import React from 'react'
import styles from './ToDoList.module.css'

const ToDoList: React.FC<{text: string}> = ({text}) => {
  return (
    <li className={styles.item}>{text}</li>
  )
}

export default ToDoList