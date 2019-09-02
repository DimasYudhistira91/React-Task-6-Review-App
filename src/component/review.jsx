import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';

class Review extends Component {
  state = { 
    film: getMovies()
  };
  
  handleHapus = hpsFilm => {
    const film = this.state.film.filter(allFilm => allFilm._id !== hpsFilm._id);
    this.setState({film})
  }

  handleLike = likeFilm => {
    const film = this.state.film;
    const index = film.indexOf(likeFilm);
    film[index].liked = !film[index].liked;
    this.setState({film});
  } 

  render() {
    const { length: count } = this.state.film;

    if(count === 0) return <p>Maaf, film tidak tersedia</p>

    return (
      <React.Fragment>
        <p>Menampilkan {this.state.film.length} review film dari database</p>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th/>
            <th/>
          </tr>
        </thead>
        <tbody>
          {this.state.film.map(showfilm => (
            <tr key={showfilm._id}>
              <td>{showfilm.title}</td>
              <td>{showfilm.genre.name}</td>
              <td>{showfilm.numberInStock}</td>
              <td>{showfilm.reviewersRate}</td>
              <td>
                {<Like
                  liked={showfilm.liked}
                  onClick={() => this.handleLike(showfilm)}
                />}
              </td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => this.handleHapus(showfilm)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </React.Fragment>
    );
  }
}
 
export default Review;