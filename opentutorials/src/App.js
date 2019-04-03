import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ol>
          {this.props.data.map(item => [
            <li>
              <a href={item.id + ".html"}>{item.title}</a>
            </li>
          ])}
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    contents: [
      { id: 1, title: "HTML", desc: "HTML is for information" },
      { id: 2, title: "CSS", desc: "CSS is for information" },
      { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is for information" }
    ]
  };

  render() {
    return (
      <div>
        <Subject title="WEB" sub="Hello, React" />
        <TOC data={this.state.contents} />
        <Content title="React" desc="Hello Cola" />
        <Content title="Welcome" desc="Hello HTML" />
      </div>
    );
  }
}

export default App;
