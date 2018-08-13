import React from "react";
import "./StyleEdit.css";

const getQueryParams = new URLSearchParams(location.search);

const TextArea = ({ placeholder, displayName, id, fn, value }) => (
  <div>
    <label className="admin__label" htmlFor={id}>
      {displayName}
    </label>
    <textarea
      placeholder={placeholder}
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
        link_syllabus: "",
        instruction: "",
        difficulty_id: 1,
        category_id: 1,
        github_username: "admin",
        test_spec: {
          initialCode: "",
          sampleInput: "",
          functionName: "",
          expectedResult: ""
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleObject = this.handleObject.bind(this);
    this.fetchQuestionById = this.fetchQuestionById.bind(this);
  }

  componentDidMount() {
    this.fetchQuestionById(getQueryParams.get("question"));
  }

  fetchQuestionById(id) {
    return fetch(`/api/question/${id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          question: data
        })
      )
      .catch(error => console.log(error));
  }
  updateDatabase() {
    fetch("/api/updatequestion", {
      method: "POST",
      body: JSON.stringify(this.state.question),
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.ok)
      .catch(error => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateDatabase();
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
            placeholder="Add Function"
            value={this.state.question.question_title}
            displayName="Question"
            fn={this.handleChange}
          />
          <TextArea
            id="expectedResult"
            placeholder="4"
            displayName="Expected Result"
            value={this.state.question.test_spec.expectedResult}
            fn={this.handleObject}
          />
          <TextArea
            id="instruction"
            placeholder="Add all numbers"
            value={this.state.question.instruction}
            displayName="Instruction"
            fn={this.handleChange}
          />
          <TextArea
            id="link_syllabus"
            placeholder="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            value={this.state.question.link_syllabus}
            displayName="Help Link"
            fn={this.handleChange}
          />
          <TextArea
            id="initialCode"
            placeholder="function add(a, b){return a+b};add(2, 4);"
            displayName="Initial Code"
            value={this.state.question.test_spec.initialCode}
            fn={this.handleObject}
          />
          <TextArea
            id="sampleInput"
            placeholder="[1,3], this has to be an array and if an object user valid json"
            displayName="Sample Input"
            value={this.state.question.test_spec.sampleInput}
            fn={this.handleObject}
          />
          <TextArea
            id="functionName"
            placeholder="add"
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
          <button className="admin__button">Edit</button>
        </form>
      </div>
    );
  }
}

export default Admin;
