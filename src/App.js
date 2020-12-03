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
  
  
  rentHandler = (movieObj) => {
    //have to add conditional for no more than 3 movies
    this.setState({rentArray: [...this.state.rentArray, movieObj]})
  }
  
  
  
  
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <MovieContainer movieArray={this.state.movieArray} rentHandler={this.rentHandler}/>
        <RentContainer rentArray={this.state.rentArray}/>
      </div>
    )
  }
}




export default App;
