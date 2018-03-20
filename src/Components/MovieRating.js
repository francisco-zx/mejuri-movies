import React from 'react';
import ReactStars from 'react-stars';

export default class MovieRating extends React.Component{

  render(){
    return(
      <div className='MovieRating d-inline-block'>
        <ReactStars
          count={10}
          value={this.props.rating}
          edit={false}
          half={true}
          className='RatingStars align-middle d-inline-block'
        />
        <p className='mb-0 align-middle d-inline-block text-muted'>
          <span className='RatingValue'>
            {
              (Math.round(this.props.rating * 10) / 10).toFixed(1)
            }
          </span>/10
        </p>
      </div>

    )
  }


}
