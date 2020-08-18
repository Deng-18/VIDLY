import React from 'react'


function ListGroup(props) {
	const { genres, textProperty, valueProperty, onItemSelect, selectedGenre } = props;
	return (
		<ul className="list-group" >
				{
					genres.map(genre => (
						<li className={ genre === selectedGenre ? "list-group-item active " : 'list-group-item' } 
						key={genre[valueProperty]} 
						onClick={() => onItemSelect(genre)} 
						style={{ cursor:'pointer' }}
						>
							{ genre[textProperty] }
						</li>
					))
				}
		</ul>
	)
}

ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: "_id"
}

export default ListGroup;
