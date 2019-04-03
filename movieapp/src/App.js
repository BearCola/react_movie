import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie.js";

const movies = [
  {
    title: "Matrix",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzVlNWEyYWQtNzY1Zi00OTVmLTliZDAtOWFjY2RmNjc4ZWU1XkEyXkFqcGdeQXVyNjkxMjM5Nzc@._V1_.jpg"
  },
  {
    title: "Oldboy",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Star Wars",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
];

class App extends Component {
  state = {
    greeting: "Hello!"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Hello again"
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
