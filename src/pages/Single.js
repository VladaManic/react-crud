import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { useHistory } from 'react-router-dom';

import DeleteButton from '../components/DeleteButton';

const Single = (props) => {
	//getting param from URL
	const { id } = useParams();
	const history = useHistory();
	const [item, setItem] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault()

		if(!item.title || !item.text){
			alert('You have to fill all fields')
		}

		props.onUpdate({id, item})
	}

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

	//Enabling editing input fields in form
	function handleInputChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setItem({...item, [name]: value});
	}

	return (
		<div className='add-form'>
			<form onSubmit={onSubmit}>
				<div>
					<textarea value={item.title} name="title" onChange={(e) => handleInputChange(e)} />
				</div>
				<div>
					<textarea value={item.text} name="text" onChange={(e) => handleInputChange(e)} />
				</div>
				<div>
					<input type='submit' value='Save' />
					<DeleteButton id={id} onDelete={deleteItem} />
				</div>
			</form>
		</div>
	)
}

export default Single
