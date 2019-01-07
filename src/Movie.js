import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie_synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
  )
}

function MovieGenre({genre}){
  return(
    <span className="Movie_Genres">{genre}</span>
  )
}

Movie.PropTypes = {
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis : PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
  poster : PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

MovieGenre.PropTypes = {
  genre : PropTypes.string.isRequired
}

export default Movie;