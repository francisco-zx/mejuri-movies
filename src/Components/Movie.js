import React from 'react';

//Components
import MovieImage from './MovieImage';
import MovieDescription from './MovieDescription';
import MovieReview from './MovieReview';

export default class Movie extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      review: {},
      showReview: false
    }
  }

  componentWillMount(){
    this.setState({
      review: this.props.reviews.find(review => review.movie_id === this.props.movie.id)
    })
  }

  handleClickReview = () => {
    this.setState({
      showReview: !this.state.showReview
    })
  }

  render(){
    return(
      <div className='Movie row'>
        <div className='row'>
          <MovieImage movie={this.props.movie} />
          <MovieDescription movie={this.props.movie} handleClickReview={this.handleClickReview} reviewOpen={this.state.showReview}/>
        </div>
        {
          this.state.showReview ?
          <div className='row'>
            <MovieReview movieId={this.props.movie.id} review={this.state.review}/>
          </div>
          : ''
        }
      </div>
    )
  }
}
