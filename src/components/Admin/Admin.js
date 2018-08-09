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
        question_title: "",
        test: "BLANK test_spec",
        difficulty_id: 1,
        category_id: 1,
        instruction: "",
        link_syllabus:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        initial_code: "BLANK test_spec",
        test_spec: {
          functionName: "",
          sampleInput: "[]",
          expectedResult: "",
          initialCode: ""
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleObject = this.handleObject.bind(this);
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
