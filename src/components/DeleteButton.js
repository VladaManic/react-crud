const DeleteButton = (props) => {
	return (
		<button onClick={() => props.onDelete(props.id)}>Delete</button>
	)
}

export default DeleteButton
