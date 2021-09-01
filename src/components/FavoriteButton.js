const FavoriteButton = (props) => {
	return (
		<span className="delete-btn" onClick={() => props.onFavorite(props.item)}>{props.isFavorite ? 'Not Favorite' : 'To Favorites'}</span>
	)
}

export default FavoriteButton