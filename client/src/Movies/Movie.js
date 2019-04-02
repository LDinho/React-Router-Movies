import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    console.log('PROPS Param ID:', this.props.match.params.id);
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  // * DEPRECATED *
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // } // * Deprecated *

  componentDidUpdate (prevProps) {
    console.log('PREVPROPS:', prevProps.match.params);
    console.log('THIS.PROPS:', this.props.match.params);

    if(this.props.match.params.id !== prevProps.match.params.id){
      this.fetchMovie(this.props.match.params.id);
    }
  }

  saveMovie = () => {
    const {addToSavedList} = this.props;
    console.log()
    addToSavedList(this.state.movie)
  }

  render() {
    console.log("RENDER:::::",this.state.movie);
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <MovieCard movie={this.state.movie}
                 addToSavedList={this.saveMovie}
      />
    )
  }
}
