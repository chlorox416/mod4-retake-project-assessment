import React from 'react'


class MovieCard extends React.Component {

    state = {
        clicked: false
    }



    clickHandler = () => {
        //need clickhandler
        //function to pass "rent" movie up to app => set new state and add new obj
        //need props (w/ movieobj)
        //need onclick for when click on title
        this.props.rentHandler(this.props.movieObj)
    }

    // toggleHandler = () => {
    //     this.setState({ clicked: !this.state.clicked})
    // }



    render() {
        return (
            <div name='card'>
                <h3>{this.props.movieObj.title}</h3>
                <p>{this.props.movieObj.synopsis}</p>
                <button onClick={this.clickHandler} >Rent Movie</button>
                <button >Show Synopsis</button>
            </div>
        )
    }
}








export default MovieCard