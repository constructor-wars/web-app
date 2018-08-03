import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    //console.log("hello", event.target.value);
    this.setState({
      userSearch: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.fetchResults(this.state.userSearch);
  }

  fetchResults() {
    const makeHTML = text => {
      const target = document.querySelector("#target");
      const div = document.createElement("div");
      div.innerHTML = text;
      const items = div.querySelectorAll(".result-list-item h4 a");
      target.innerHTML = [...items]
        .map(
          item =>
            `<li><a href=${item.href} target="_blank">${
              item.textContent
            }  </a></li>`
        )
        .join("");
    };

    const fetchResults = q => {
      const url = `https://developer.mozilla.org/en-US/search?q=${q}`;
      fetch(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(res => res.text())
        .then(text => makeHTML(text))
        .catch(err => console.log(err));
    };

    fetchResults();
  }

  render() {
    return (
      <div>
        <input
          className="searchbar"
          placeholder="Feeling stuck..? get some help"
          onChange={this.handleChange}
        />
        <button type="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <ul id="target" />
      </div>
    );
  }
}

export default Searchbar;
