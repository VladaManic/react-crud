import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import Item from '../components/Item';
import DeleteButton from '../components/DeleteButton';
import FavoriteButton from '../components/FavoriteButton';
import FavoritesContext from '../context/favorites-context';

const Home = (props) => {
	const favoritesCtx = useContext(FavoritesContext);
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(true)
	const [items, setItems] = useState([])

	useEffect(() => {
		setIsLoaded(true);
		fetch(
			'https://react-crud-cd5ea-default-rtdb.firebaseio.com/items.json',
		).then((response) => {
			return response.json();
		}).then((data) => {
			const items = [];
			for(const key in data){
				const item = {
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


	function toggleFavoriteStatusHandler(item){
		const singleIsFavorite = favoritesCtx.itemIsFavorite(item.id);
		if(singleIsFavorite){
			favoritesCtx.removeFavorite(item.id);
		} else {
			favoritesCtx.addFavorite({
				id: item.id,
				text: item.text,
				title: item.title
			})
		}
		history.replace('/favorites/')
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
				<div key={item.id}>
					<Item item={item} />
					<DeleteButton id={item.id} onDelete={deleteItem} />
					<FavoriteButton id={item.id} item={item} onFavorite={toggleFavoriteStatusHandler} />
				</div>
			))}
		</div>
	)
}

export default Home
