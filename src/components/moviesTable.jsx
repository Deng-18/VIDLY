import React, { Component } from 'react'

class MoviesTable extends Component {

  render() {
    const {  movies, onDelete, onLike, onSort}  = this.props;
      return ( 
        <table className="table">
            <thead className="table-dark m-5">
              <tr  >
                <th onClick={() => onSort('title')}>Title</th>
                <th onClick={() => onSort('numberInStock')}>Stock</th>
                <th onClick={() => onSort('dailyRenatlRate')}>Ratings</th>
                <th onClick={() => onSort('genre.name')}>Genre</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                  <tr className="text-align-center"  key={movie._id} id={movie._id} name='title' >
                    <td>{movie.title}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td >{movie.genre.name}</td>
                    <td><i className={movie.liked === true ? 'fa fa-heart' : 'fa fa-heart-o'}
                    style={{ cursor: 'pointer' }} 
                    onClick={onLike.bind(this, movie)} ></i></td>
                    <td><button className="btn btn-danger" 
                    onClick={onDelete.bind(this, movie)}
                    >Delete</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
     );
  }
}


export default MoviesTable; 
