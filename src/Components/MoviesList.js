import React from 'react';

import Movie from './Movie';

export default class MoviesList extends React.Component{

  render(){
    return(
      <div className='MoviesList col-xs-12'>
        {
          this.props.movies.map((movie, index) => {
              return (
                <Movie
                key={movie.id}
                movie={movie}
                reviews={this.props.reviews}
                />
              )
          })
        }
      </div>
    )
  }
}
