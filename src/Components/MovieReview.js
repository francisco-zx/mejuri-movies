import React from 'react';

export default class MovieReview extends React.Component{

  render(){
    return(
      <div className='MovieReview'>
        <h5 className='text-muted'>Review</h5>
        <i><b>"
          {
            this.props.review.review
          }
          "
        </b></i>
      </div>
    )
  }
}
