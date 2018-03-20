import React from 'react';

export default class MovieImage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imageLoaded: false
    }
  }

  handleImageLoad = () => {
    this.setState({
      imageLoaded: !this.state.imageLoaded
    })
  }

  render(){
    return(
      <div>
        <img
          className={!this.state.imageLoaded ? 'invisible' : 'MovieImage' }
          onLoad={this.handleImageLoad}
          src={this.props.movie.cover_url}
          width='auto' height='305px'
          alt={this.props.movie.title}
        />
        <div className={!this.state.imageLoaded ? 'lazyLoad' : 'invisible' }></div>

      </div>
    )
  }
}
