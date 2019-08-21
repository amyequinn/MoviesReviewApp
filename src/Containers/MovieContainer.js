import React from 'react'
import MovieCard from '../Components/MovieCard'

class MovieContainer extends React.Component{


  state = {
    searchInput: '',
    reviewInput: ''
  }

  render(){
    return(
      <div>
      <h2>{this.props.title}</h2>
        <div class="ui input">
          <input type="text" placeholder="Search for Movie" onChange={(event) => this.setState({searchInput: event.target.value})}/>
        </div>
        <div className="ui cards">
        {
          this.props.movies.filter((movie) => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
          .map(movie => <MovieCard
            deleteReview={this.props.deleteReview}
            movie={movie}
            isFavourite={this.props.selectedMovieIds.includes(movie.id)}
            handleClick={
              this.props.selectedMovieIds.includes(movie.id) ?
              () => this.props.removeMovie(movie) :
              () => this.props.selectMovie(movie)
            }
            handleChange={(event) => this.props.addReview(event)}
            handleUpdate={() => this.props.updateReview(movie)}
            />)
      }
      </div>
      </div>

    )
  }
}



export default MovieContainer
