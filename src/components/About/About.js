import React from "react";
import "./about.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="about__wrapper">
        <h1>About Constructor Wars</h1>
        Coding challenges designed for Constructor Labs students. Student can
        log in and practice on exercises tailored for the course to order to
        practice. This application features profile page to monitor learning
        progress, useful links for Constructor Labs syllabus for references,
        search field for more information on specific topic on MDN and monaco
        editor to run codes on broswer, and admin page to update the exercise
        database.
      </div>
    );
  }
}
