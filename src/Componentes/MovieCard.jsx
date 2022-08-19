import React from 'react'
import styles from '../styles/MovieCard.module.css'


export function MovieCard ({movie}){
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}> 
      <img 
      width={230}
      height={345} 
      // Si no especifico el width y el height aca, cuando este cargando las imagenes y los textos se van a ver todos pegados, em cambio si lo defino reserva su espacio en pantalla y se le aplica el background color que defini en css
      className={styles.movieImage} 
      src={imageUrl} 
      alt={movie.title}/> 
      {/* El siguiente div es para que este en la siguiente linea  */}
      <div> {movie.title} </div>
    </li>

  ) 
}