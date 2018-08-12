import React from "react";
import "./StyleAdmin.css";

const TextArea = ({ displayName, id, fn, value }) => (
  <div>
    <label className="admin__label" htmlFor={id}>
      {displayName}
    </label>
    <textarea
      className="admin__text_area"
      onChange={fn}
      id={id}
      value={value}
    />
  </div>
);

const DropDown = ({ options, displayName, fn, id }) => {
  return (
    <div>
      <label className="admin__label" htmlFor={id}>
        {displayName}
      </label>
      <select className="admin__drop__down" onChange={fn} id={id}>
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
        question_title: "Add Function title",
        link_syllabus:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        instruction: "instructions: Add numbers",
        difficulty_id: 1,
        category_id: 1,
        github_username: this.props.github_username,
        test_spec: {
          initialCode: "function add(a, b){return a+b};add(2, 4)",
          sampleInput: "[1,3]",
          functionName: "add",
          expectedResult: "4"
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleObject = this.handleObject.bind(this);
  }

  addToDatabase(data) {
    fetch("/api/submitnewquestion", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .catch(error => console.log(error));
    console.log("addToDatabase(data)", data);
  }

 
  handleSubmit(event) {
    event.preventDefault();
    this.addToDatabase(this.state.question);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(preveState => ({
      question: { ...preveState.question, [id]: value }
    }));
  }
  handleObject(event) {
    const { id, value } = event.target;
    this.setState(preveState => ({
      question: {
        ...preveState.question,
        test_spec: { ...preveState.question.test_spec, [id]: value }
      }
    }));
  }

  render() {
    return (
      <div className="admin__wrapper">
        <form className="admin__container" onSubmit={this.handleSubmit}>
          <TextArea
            id="question_title"
            value={this.state.question.question_title}
            displayName="Question"
            fn={this.handleChange}
          />
          <TextArea
            id="expectedResult"
            displayName="expectedResult"
            value={this.state.question.test_spec.expectedResult}
            fn={this.handleObject}
          />
          <TextArea
            id="instruction"
            value={this.state.question.instruction}
            displayName="instruction"
            fn={this.handleChange}
          />
          <TextArea
            id="link_syllabus"
            value={this.state.question.link_syllabus}
            displayName="Help Link"
            fn={this.handleChange}
          />
          <TextArea
            id="initialCode"
            displayName="Initial Code"
            value={this.state.question.test_spec.initialCode}
            fn={this.handleObject}
          />
          <TextArea
            id="sampleInput"
            displayName="Sample Input"
            value={this.state.question.test_spec.sampleInput}
            fn={this.handleObject}
          />
          <TextArea
            id="functionName"
            displayName="Function Name"
            value={this.state.question.test_spec.functionName}
            fn={this.handleObject}
          />
          <div className="admin__label">
            <DropDown
              id="difficulty_id"
              displayName="Difficulty Level"
              options={this.props.LevelOptions}
              fn={this.handleChange}
            />
            <DropDown
              id="category_id"
              displayName="Category"
              options={this.props.CategoryOptions}
              fn={this.handleChange}
            />
          </div>
          <button className="admin__button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Admin;
