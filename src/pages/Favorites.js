import { useContext } from 'react';
import FavoritesContext from '../context/favorites-context';

import Item from '../components/Item';

const Favorites = () => {
	const favoritesCtx = useContext(FavoritesContext);

	let content;
	if(favoritesCtx.totalFavorites === 0){
		content = <p>There are no favorites yet.</p>;
	} else {
		content = <div>
								{favoritesCtx.favorites.map((item) => (
									<Item key={item.id} item={item} />
								))}
							</div>;
	}

	return (
		<div>
			<h1>Favorites</h1>
			{content}
		</div>
	)
}

export default Favorites
