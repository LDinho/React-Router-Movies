import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log("movie:", movie);
    const savedList = this.state.savedList;

    const isMovieDuplicate = Boolean(savedList.find((savedMovie) => {
      return savedMovie.id === movie.id;
    }));

    if (!isMovieDuplicate) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    console.log('lIST:', this.state.savedList);
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" render={(props) => (
            <MovieList
              {...props}
              addToSavedList={this.addToSavedList}
            />
          )}/>
          <Route path="/movies/:id" render={(props) => (
            <Movie
              {...props}
              addToSavedList={this.addToSavedList}
            />
          )}/>
        </div>
      </div>
    );
  }
}
