import React from "react";

class Questions extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="profile__progress__question">
          <p>this will display all our question</p>
        </div>
      </div>
    );
  }
}

export default Questions;
