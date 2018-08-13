import React from "react";
import { Link } from "react-router-dom";
import { TiInfoLargeOutline } from "react-icons/ti";
import "./QuestionStyle.css";

const SingleQuestion = ({ id, question_title, link_syllabus }) => (
  <li className="question__list__item">
    <a className="question__list__link" href={link_syllabus}>
      <TiInfoLargeOutline />
    </a>
    <a className="question__list__link" href={`/editor/?question=${id}`}>
      {question_title}
    </a>
  </li>
);

class Questions extends React.Component {
  render() {
    return (
      <div className="profile__progress__question">
        <h2>
          {this.props.title} TOTAL: {this.props.questions.length}
        </h2>
        <ul className="question__list">
          {this.props.questions.map(question => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Questions;
