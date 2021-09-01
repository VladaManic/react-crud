const FavoriteButton = (props) => {
	return (
		<span className="delete-btn" onClick={() => props.onFavorite(props.item)}> To Favorite </span>
	)
}

export default FavoriteButton