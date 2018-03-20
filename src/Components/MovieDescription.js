import React from 'react';

import MovieRating from './MovieRating';

export default class MovieDescription extends React.Component{

  render(){
    return(
      <div className='col-sm-8 MovieDescription'>
        <h5 className='MovieTitle'>
          { this.props.movie.id }. <a href={this.props.movie.url} className='font-weight-bold'>
            {this.props.movie.title}
          </a> <span className='text-muted'>
           ({this.props.movie.year})
          </span>
        </h5>
        <MovieRating rating={this.props.movie.score * 10}/>
        <p className='MovieSynopsis'>{this.props.movie.synopsis.substring(0,400)}</p>
        <p className='text-muted director'>
        Director: <a href=''>{this.props.movie.director}</a>
        </p>
        <button onClick={this.props.handleClickReview} className='showReview'>
          {!this.props.reviewOpen ? 'Show Review' : 'Close Review'}
        </button>
      </div>

    )
  }
}
