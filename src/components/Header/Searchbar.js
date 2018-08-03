import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      userSearch: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.fetchResults(this.state.userSearch);
  }

  fetchResults(query) {
    const makeHTML = text => {
      const div = document.createElement("div");
      div.innerHTML = text;
      const items = div.querySelectorAll(".result-list-item h4 a");
      return [...items].map(item =>
        this.setState(preveState => ({
          data: [item, ...preveState.data]
        }))
      );
    };

    const getResultsFromMdn = q => {
      const url = `https://developer.mozilla.org/en-US/search?q=${q}`;
      fetch(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(res => res.text())
        .then(text => makeHTML(text))
        .catch(err => console.log(err));
    };

    getResultsFromMdn(query);
  }

  render() {
    return (
      <div>
        <input
          className="searchbar"
          placeholder="Feeling stuck..? Dont be a potato...Let Search MDN for you"
          onChange={this.handleChange}
        />
        <button type="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <ul>
          {this.state.data.map(item => (
            <li key={item}>
              <a href={item.href} target="_blank">
                {item.textContent}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Searchbar;
