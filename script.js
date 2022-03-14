'use strict';

const numberOfFilms = prompt('How many movies have you seen?');
const lastFilm = prompt('What is the last movie you have seen?');
const lastFilmRating = prompt('How would you rate it?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = lastFilmRating;

console.log(personalMovieDB);


