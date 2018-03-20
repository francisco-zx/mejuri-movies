import React, { Component } from 'react';
import './App.css';
import Data from './data.json';

//Components
//movies
import MoviesList from './Components/MoviesList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      reviews: []
    }
  }

  componentWillMount(){
    //Save Data in state
    this.setState({
      movies: Data.movies,
      reviews: Data.reviews
    })
  }

  render() {
    return (
      <div className="container">
        <MoviesList movies={this.state.movies} reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
