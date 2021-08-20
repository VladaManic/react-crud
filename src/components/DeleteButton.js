const DeleteButton = (props) => {
	return (
		<span className="delete-btn" onClick={() => props.onDelete(props.id)}>Delete</span>
	)
}

export default DeleteButton
