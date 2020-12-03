import React from 'react'
import './App.css';
import MovieContainer from './components/MovieContainer'
import RentContainer from './components/RentContainer';





class App extends React.Component {
  
  state = {
    movieArray: [],
    rentArray: []
  }
  
  componentDidMount = () => {
    fetch ('http://localhost:5000/movies')
    .then(resp => resp.json())
    .then(data => this.setState({movieArray: data}))
    // .then(data => console.log(data))
  }
  
  addMovie = (movieObj) =>
    fetch('http://localhost:5000/movies',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
          body: JSON.stringify(movieObj)
          })
          .then(resp => resp.json())
          .then(data => this.setState({movieArray: [...this.state.movieArray, data]}))
        

  rentHandler = (movieObj) => {
    //have to add conditional for no more than 3 movies
    this.setState({rentArray: [...this.state.rentArray, movieObj]})
  }
  
  //delete handler
  //5 step process
  
  
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <MovieContainer movieArray={this.state.movieArray} rentHandler={this.rentHandler}/>
        <RentContainer rentArray={this.state.rentArray}/>
        {/* <MovieForm/> */}
      </div>
    )
  }
}




export default App;
