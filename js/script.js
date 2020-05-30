"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?","");

let personalMovieDB = {

    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

let lastFilm = prompt("Один із останіх переглянутих фільмів?","");
let assessment = prompt("На скільки оціните його?","");

personalMovieDB.movies[lastFilm] = assessment;

console.log(personalMovieDB);