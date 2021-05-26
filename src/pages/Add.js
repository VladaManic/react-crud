import { useState } from 'react'

const Add = (props) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		if(!title || !text){
			alert('You have to fill all fields')
		}

		props.onAdd({title, text})
	}

	return (
		<div>
			<form className='add-form' onSubmit={onSubmit}>
				<div>
					<input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div>
					<textarea placeholder='Add Text' value={text} onChange={(e) => setText(e.target.value)} />
				</div>
				<input type='submit' value='Save' />
			</form>
		</div>
	)
}

export default Add
