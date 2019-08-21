import React from 'react'

const Review = (props) => {

    return(
      <ul>
      {
        props.review && props.review.map(r => <li>{r}<button className="ui icon button basic negative" onClick={() => props.deleteReview(props.movie, r)}>X</button></li>)
      }
      </ul>
    )
  }

export default Review
