import React from 'react'
import Todo from '../models/todo'
import ToDoList from './ToDoList'

const ToDos: React.FC<{items: Todo[]}> = ({items}) => {
  return (
    <ul>
        {items.map(item => <ToDoList key={item.id} text={item.text}/>)}
    </ul>
  )
}

export default ToDos