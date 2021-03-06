import React from "react";
import { Redirect } from "react-router-dom";

import { FiPlayCircle, FiSave } from "react-icons/fi";

import Instructions from "../components/Instructions/Instructions";
import { MonacoEditor, DisplayConsole, EvalWindow } from "../components/Editor";
import MDNhelp from "../components/MDNhelp/MDNhelp";

const getQueryParams = new URLSearchParams(location.search);

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      codeToEval: "",
      currentCode: "",
      performEval: false,
      question_title: "",
      instruction: "",
      test_spec: {},
      github_username: "github_username state"
    };
    this.onChange = this.onChange.bind(this);
    this.runCode = this.runCode.bind(this);
    this.saveCode = this.saveCode.bind(this);
    this.fetchQuestionById = this.fetchQuestionById.bind(this);
  }
  onChange(code) {
    this.setState({ currentCode: code });
  }
  runCode() {
    this.setState({ codeToEval: this.state.currentCode, performEval: true });
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
      .then(res => res.json())
      .then(({ id }) => (window.location = `/editor/?question=${id}`))
      .catch(error => console.log(error));
  }

  updateDatabase(data) {
    fetch("/api/updatequestion", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.ok)
      .catch(error => console.log(error));
  }

  saveCode() {
    const dataToSave = {
      id: this.state.id,
      question_title: this.state.question_title,
      difficulty_id: this.state.difficulty_id,
      category_id: this.state.category_id,
      instruction: this.state.instruction,
      link_syllabus: this.state.link_syllabus,
      test_spec: {
        initialCode: this.state.currentCode,
        sampleInput: this.state.test_spec.sampleInput,
        functionName: this.state.test_spec.functionName,
        expectedResult: this.state.test_spec.expectedResult
      },
      github_username: this.props.username
    };

    if (this.state.github_username === this.props.username) {
      console.log({ dataToSave });
      this.updateDatabase(dataToSave);
    }

    if (this.state.github_username !== this.props.username) {
      console.log({ dataToSave });
      this.addToDatabase(dataToSave);
    }
  }

  fetchQuestionById(id) {
    return fetch(`/api/question/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          ...data,
          currentCode: data.test_spec.initialCode
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    getQueryParams.has("question")
      ? this.fetchQuestionById(getQueryParams.get("question"))
      : this.fetchQuestionById(77);
  }

  componentDidUpdate() {
    if (this.state.performEval) {
      this.setState({
        performEval: false
      });
    }
  }
  render() {
    return (
      <div className="editor__wrap">
        <div className="editor__wrap__buttons">
          <button
            className="editor__wrap__button editor__wrap__button--save"
            onClick={this.saveCode}
          >
            <FiSave />
            <span>Save</span>
          </button>
          <a
            className="editor__wrap__button editor__wrap__button--edit"
            href={`/edit/?question=${getQueryParams.get("question")}`}
          >
            <FiPlayCircle />
            <span>Edit</span>
          </a>
          <button
            className="editor__wrap__button editor__wrap__button--run"
            onClick={this.runCode}
          >
            <FiPlayCircle />
            <span>Run</span>
          </button>
        </div>
        <div className="editor__wrap__instructions editor__sections">
          <Instructions
            question_title={this.state.question_title}
            instructions={this.state.instruction}
          />
        </div>
        <div className="editor__wrap__comments editor__sections">
          <MDNhelp />
        </div>
        <div className="editor__wrap__edit-window editor__sections">
          <MonacoEditor
            codeToEval={this.state.currentCode}
            onChange={this.onChange}
          />
        </div>
        <div className="editor__wrap__display-window editor__sections">
          <EvalWindow
            codeToEval={this.state.codeToEval}
            performEval={this.state.performEval}
            test_spec={this.state.test_spec}
          />
        </div>
        <div className="editor__wrap__test-window editor__sections">
          <DisplayConsole />
        </div>
      </div>
    );
  }
}
