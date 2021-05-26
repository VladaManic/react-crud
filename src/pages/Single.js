import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { useHistory } from 'react-router-dom';

import DeleteButton from '../components/DeleteButton';

const Single = (props) => {
	//getting param from URL
	const { id } = useParams();
	const history = useHistory();
	const [item, setItem] = useState([]);
	

	useEffect(() => {
		fetch(
			`https://react-crud-cd5ea-default-rtdb.firebaseio.com/items/${id}.json`
		).then((response) => {
			return response.json();
		}).then((data) => {
			setItem(data);
		})
	}, [id])

	function deleteItem(id){
    fetch(
      `https://react-crud-cd5ea-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        method: 'DELETE'
      }
    ).then(() => {
			history.replace('/');
		})
  }

	return (
		<div>
			<h2>{item.title}</h2>
			<p>{item.text}</p>
			<div>
				<DeleteButton id={id} onDelete={deleteItem} />
			</div>
		</div>
	)
}

export default Single
