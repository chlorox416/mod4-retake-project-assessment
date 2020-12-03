import React from 'react'


class MovieForm extends React.Component {
    state = {
        title: "",
        synopsis: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie(this.state)
        //reset form

    }

    handleChange = (event) => {
        //set state of change from the form by target.name and : target.value
        // this.setState ({ event.target.name : event.target.value})
    }



    render() {
        return (
            <div>
                <form onSubmit {/* add onSubmit={this.handleSubmit}  */}>
                    
                    <h3>Add Movie</h3>
                    <input type="text" name="name" placeholder="Movie Title" {/* add Change={this.handleChange}*/}></input>
                    <input type="text" name="synopsis" placeholder="Movie Synopsis" {/* add Change={this.handleChange}*/}></input>
                    <input type="Submit" value="Add Movie"></input>
                </form>
                
            </div>
        )
    }
}


export default MovieForm