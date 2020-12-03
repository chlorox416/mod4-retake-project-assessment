import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = (props) => {
    const renderMovies = () => {
        return props.movieArray.map(movieObj => <MovieCard key={movieObj.id} movieObj={movieObj} rentHandler={props.rentHandler}/>)
    }


        return (
          <div> {renderMovies()} </div>
        )
      }










export default MovieContainer
