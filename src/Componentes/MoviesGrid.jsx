import React from 'react'
import { MovieCard } from './MovieCard';
import movies from '../movies.json';
import styles from '../styles/MoviesGrid.module.css'

export function MoviesGrid() {
    console.log(movies)
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />  
            // recordar: siempre que tenga un listado colocarle la key para poder diferenciar cada elemento
            ))}
        </ul>
    );
}