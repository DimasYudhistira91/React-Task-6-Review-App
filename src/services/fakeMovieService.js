import * as genresAPI from "./fakeGenreService";

const movies = [ 
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Avenger Endgame",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 10,
    reviewersRate: 8.9,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Shawsank Redemption",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Thriller" },
    numberInStock: 3,
    reviewersRate: 9.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Seven Pounds",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 5,
    reviewersRate: 8.7,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Lord of The Rings - Return of The King",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Action" },
    numberInStock: 7,
    reviewersRate: 9.0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Cast Away",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Thriller" },
    numberInStock: 6,
    reviewersRate: 7.8,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Pengabdi Setan",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Thriller" },
    numberInStock: 8,
    reviewersRate: 8.3,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Laskar Pelangi",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Comedy" },
    numberInStock: 6,
    reviewersRate: 7.8,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Raid",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Action" },
    numberInStock: 5,
    reviewersRate: 7.5,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Hobbit",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    reviewersRate: 8.5,
    liked: true
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.reviewersRate = movie.reviewersRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
