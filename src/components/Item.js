import { Link } from 'react-router-dom';

import DeleteButton from './DeleteButton';

const Item = (props) => {
	return (
		<div className='item-wrap'>
			<Link to={`/single/${props.item.id}`}>
				<h2>{props.item.title}</h2>
				<p>{props.item.text}</p>
			</Link>
			<DeleteButton id={props.item.id} onDelete={props.onDelete} />
		</div>
	)
}

export default Item
