import React from 'react'

const Review = (props) => {

    return(
      <ul>
      {
        props.review && props.review.map(r => <div>{r}<button className="mini ui icon button basic negative" onClick={() => props.deleteReview(props.movie, r)}>X</button></div>)
      }
      </ul>
    )
  }

export default Review
