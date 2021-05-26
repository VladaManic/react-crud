import { Link } from 'react-router-dom';

import DeleteButton from './DeleteButton';

const Item = (props) => {
	return (
		<Link to={`/single/${props.item.id}`}>
			<div className='item-wrap'>
				<h2>{props.item.title}</h2>
				<p>{props.item.text}</p>
				<DeleteButton id={props.item.id} onDelete={props.onDelete} />
			</div>
		</Link>
	)
}

export default Item
