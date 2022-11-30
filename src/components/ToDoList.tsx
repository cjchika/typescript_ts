import React from 'react'

const ToDoList: React.FC<{text: string}> = ({text}) => {
  return (
    <li>{text}</li>
  )
}

export default ToDoList