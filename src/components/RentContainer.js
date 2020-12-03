// import { unstable_renderSubtreeIntoContainer } from "react-dom";

import React from 'react'

const RentContainer = (props) => {
    const renderRentMovies = () => {
        return props.rentArray.map(movieObj => <h3>{movieObj.id} {movieObj.title}</h3>)
    }


    return (
        <div>
            <h2>Rent Movies</h2>
            {renderRentMovies()}

        </div>
    )

}
















export default RentContainer