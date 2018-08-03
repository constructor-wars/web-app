import React from "react";
import "./StyleAdmin.css";

const TextArea = ({ displayName, id, fn }) => (
  <div>
    <label htmlFor={id}> {displayName} </label>
    <input onChange={fn} type="textarea" id={id} />
  </div>
);

const DropDown = ({ options, displayName, fn, id }) => {
  return (
    <div>
      <label htmlFor={id}> {displayName} </label>
      <select onChange={fn} id={id}>
        {Object.entries(options).map(([ID, value]) => (
          <option key={ID} id={id} value={ID}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        question: "",
        test: "",
        instructions: "",
        linkToSyllabus: "",
        initialCode: "",
        createdBy: this.props.userID,
        levelId: 1,
        categoryId: 1
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendToServer(this.state.question);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(preveState => ({
      question: { ...preveState.question, [id]: value }
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea
            id="question"
            displayName="question"
            fn={this.handleChange}
          />
          <TextArea id="test" displayName="test" fn={this.handleChange} />
          <TextArea
            id="instructions"
            displayName="instructions"
            fn={this.handleChange}
          />
          <TextArea
            id="linkToSyllabus"
            displayName="linkToSyllabus"
            fn={this.handleChange}
          />
          <TextArea
            id="initialCode"
            displayName="initialCode"
            fn={this.handleChange}
          />
          <DropDown
            id="levelId"
            displayName="Level Options"
            options={this.props.LevelOptions}
            fn={this.handleChange}
          />
          <DropDown
            id="categoryId"
            displayName="Category Options"
            options={this.props.CategoryOptions}
            fn={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Admin;
