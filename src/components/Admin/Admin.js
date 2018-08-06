import React from "react";
import "./StyleAdmin.css";

const TextArea = ({ displayName, id, fn }) => (
  <React.Fragment>
    <label htmlFor={id}> {displayName} </label>
    <textarea
      className="admin__form__text_area"
      onChange={fn}
      type="textarea"
      id={id}
    />
  </React.Fragment>
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
        question_title: "",
        test: "",
        difficulty_id: 1,
        category_id: 1,
        instruction: "",
        link_syllabus: "",
        initial_code: ""
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
        <form className="admin_container" onSubmit={this.handleSubmit}>
          <TextArea
            id="question_title"
            displayName="question_title"
            fn={this.handleChange}
          />
          <TextArea id="test" displayName="test" fn={this.handleChange} />
          <TextArea
            id="instruction"
            displayName="instruction"
            fn={this.handleChange}
          />
          <TextArea
            id="link_syllabus"
            displayName="link_syllabus"
            fn={this.handleChange}
          />
          <TextArea
            id="initial_code"
            displayName="initial_code"
            fn={this.handleChange}
          />
          <DropDown
            id="difficulty_id"
            displayName="difficulty_id"
            options={this.props.LevelOptions}
            fn={this.handleChange}
          />
          <DropDown
            id="category_id"
            displayName="category_id"
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
