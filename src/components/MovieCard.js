import React from 'react'


class MovieCard extends React.Component {



    clickHandler = () => {
        //need clickhandler
        //function to pass "rent" movie up to app => set new state and add new obj
        //need props (w/ movieobj)
        //need onclick for when click on title
        this.props.rentHandler(this.props.movieObj)
    }



    render() {
        return (
            <div name='card'>
                <h3>{this.props.movieObj.title}</h3>
                <button onClick={this.clickHandler} >Rent Movie</button>
                <p>{this.props.movieObj.synopsis}</p>
            </div>
        )
    }
}








export default MovieCard