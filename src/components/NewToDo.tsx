import React, {useRef} from 'react'

const NewToDo: React.FC<{onAddToDo: (text: string) => void}> = ({onAddToDo}) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null)


	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const enteredText = todoTextInputRef.current!.value

		if(enteredText.trim().length === 0){
			return;
		}

		onAddToDo(enteredText)
	}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='text'>ToDo Text</label>
				<input type="text" id='text' ref={todoTextInputRef}/>
				<button>Add ToDo</button>
    </form>
  )
}

export default NewToDo