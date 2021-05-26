import DeleteButton from './DeleteButton';

const Item = (props) => {
	return (
		<div className='item-wrap'>
			<h2>{props.item.title}</h2>
			<p>{props.item.text}</p>
			<DeleteButton id={props.item.id} onDelete={props.onDelete} />
		</div>
	)
}

export default Item
