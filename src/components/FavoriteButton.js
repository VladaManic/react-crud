const FavoriteButton = (props) => {
	return (
		<span className="delete-btn" onClick={() => props.onFavorite(props.id)}> To Favorite </span>
	)
}

export default FavoriteButton