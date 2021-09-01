import { Link } from 'react-router-dom';

const Item = (props) => {
	return (
		<div className='item-wrap'>
			<Link to={`/single/${props.item.id}`}>
				<h2>{props.item.title}</h2>
				<p>{props.item.text}</p>
			</Link>
		</div>
	)
}

export default Item
