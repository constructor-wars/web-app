import React from "react";
import Iframe from "react-iframe";

class CurriculumRoute extends React.Component {
  render() {
    return (
      <div>
        <Iframe
          url="http://constructorlabs-syllabus.herokuapp.com/"
          display="initial"
          position="relative"
          height="2000px"
          allowFullScreen
        />
      </div>
    );
  }
}

export default CurriculumRoute;
