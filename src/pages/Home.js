import { useState, useEffect } from 'react'

import Item from '../components/Item';

const Home = (props) => {
	const [isLoaded, setIsLoaded] = useState(true)
	const[items, setItems] = useState([])

	useEffect(() => {
		setIsLoaded(true);
		fetch(
			'https://react-crud-cd5ea-default-rtdb.firebaseio.com/items.json',
		).then((response) => {
			return response.json();
		}).then((data) => {
			const items = [];
			for(const key in data){
				const item ={
					id: key,
					...data[key]
				}
				items.push(item)
			}
			setIsLoaded(false);
			setItems(items);
		})
	}, [])

	function deleteItem(id){
    fetch(
      `https://react-crud-cd5ea-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        method: 'DELETE'
      }
    )
		setItems(items.filter((item) => item.id !== id))
  }
	
	if(isLoaded){
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}

	return (
		<div>
			{items.map((item) => (
				<Item key={item.id} item={item} onDelete={deleteItem} />
			))}
		</div>
	)
}

export default Home
