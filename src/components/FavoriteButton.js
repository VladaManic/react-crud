import { useContext } from 'react';

import FavoritesContext from '../context/favorites-context';

const FavoriteButton = (props) => {
	const favoritesCtx = useContext(FavoritesContext);
	const singleIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	return (
		<span className="delete-btn" onClick={() => props.onFavorite(props.item)}>{singleIsFavorite ? 'Remove' : 'To Favorites'}</span>
	)
}

export default FavoriteButton