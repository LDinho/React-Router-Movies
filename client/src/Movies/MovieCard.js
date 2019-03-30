import React from 'react';

const MovieCard = ({movie, addToSavedList}) => {
  const {title, director, metascore, stars} = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button"
           onClick={(e) => {
             e.preventDefault(); // prevents the routing <Link> to the individual movie when saving
             addToSavedList(movie);
           }}
      >
        Save
      </div>
    </div>
  );
};

export default MovieCard;

// To prevent app to completely break
MovieCard.defaultProps = {
  addToSavedList: () => {}
}
