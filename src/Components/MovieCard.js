import React from 'react'
import Review from './Review'

class MovieCard extends React.Component{

  render(){
      return(
        <div className="card">
          <div className="image">
            <img src={this.props.movie.poster} />
          </div>
          <div className="content">
            <div className="header">{this.props.movie.title} ({this.props.movie.year})</div>
            <div className="meta">
              <a>{this.props.movie.genre}</a>
            </div>
            <div className="description">
              {this.props.movie.plot}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 2013
            </span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
            <p><b>Movie Reviews</b>
            <Review
              movie={this.props.movie}
              review={this.props.movie.review}
              deleteReview={this.props.deleteReview}
            />
            </p>

            <p></p>
            <input placeholder="Add Review" onChange={this.props.handleChange} />
            <button className="ui button primary" onClick={this.props.handleUpdate}>Submit</button>
            <button className={"ui button " + (!this.props.isFavourite ? 'positive' : 'negative')} onClick={this.props.handleClick} >{!this.props.isFavourite ? 'Add to Favourites' : 'Remove from Favourites'}</button>
          </div>
        )
      }
  }



export default MovieCard
