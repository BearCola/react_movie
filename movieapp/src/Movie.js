import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>;
      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };

  render() {
    return <img width="200px" src={this.props.poster} alt="Movie Poster" />;
  }
}

export default Movie;