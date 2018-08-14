import React from "react";
import Iframe from "react-iframe";

class CurriculumRoute extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <iframe
          src="http://constructorlabs-syllabus.herokuapp.com/"
          display="initial"
          position="relative"
          height="5000px"
          width="100%"
          style={{ paddingRight: "-5px" }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default CurriculumRoute;
