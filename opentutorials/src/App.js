import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={ev => {
              ev.preventDefault();
            }}
          >
            {this.props.title}
          </a>
        </h1>
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
            <li key={item.id}>
              <a
                href={item.id + ".html"}
                onClick={function(id, ev) {
                  console.log(id);
                  ev.preventDefault();
                  this.props.onSelect(id);
                }.bind(this, item.id)}
              >
                {item.title}
              </a>
            </li>
          ])}
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>{this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    );
  }
}

class ContentCreate extends Component {
  state = {
    title: "",
    desc: ""
  };

  changeFormHandler(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    return (
      <article>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            this.props.onSubmit(this.state);
          }}
        >
          <p>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.changeFormHandler.bind(this)}
            />
          </p>
          <p>
            <textarea
              placeholder="description"
              name="desc"
              value={this.state.desc}
              onChange={this.changeFormHandler.bind(this)}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

class App extends Component {
  state = {
    mode: "read",
    selected_content_id: 1,
    contents: [
      { id: 1, title: "HTML", desc: "HTML is for information" },
      { id: 2, title: "CSS", desc: "CSS is for information" },
      { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is for information" }
    ]
  };

  getSelectedContent() {
    let selectedItem = this.state.contents.filter(
      item => this.state.selected_content_id === item.id
    );

    if (selectedItem.length > 0) {
      return selectedItem[0];
    } else {
      return {};
    }
  }

  getConentComponent() {
    if (this.state.mode === "read") {
      return <Content data={this.getSelectedContent()} />;
    } else if (this.state.mode === "welcome") {
      return (
        <Content
          data={{
            title: "Welcome",
            desc: "Hello, React!!!!!"
          }}
        />
      );
    } else if (this.state.mode === "create") {
      return (
        <ContentCreate
          onSubmit={formData => {
            console.log(formData);
          }}
        />
      );
    }
  }

  render() {
    let last_content_id = 3;
    return (
      <div>
        <Subject
          onClick={() => {
            this.setState({
              mode: "welcome"
            });
          }}
          title="WEB"
          sub="Hello, React"
        />
        <TOC
          onSelect={id => {
            this.setState({
              selected_content_id: id
            });
          }}
          data={this.state.contents}
        />
        {this.getConentComponent()}

        <ContentCreate
          onSubmit={formData => {
            last_content_id = last_content_id + 1;
            formData.id = last_content_id;
            var newContents = Object.assign([], this.state.contents);
            newContents.push(formData);

            console.log(newContents);
            this.setState({
              contents: newContents,
              selected_content_id: last_content_id,
              mode: "read"
            });
          }}
        />
      </div>
    );
  }
}

export default App;
