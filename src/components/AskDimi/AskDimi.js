import React from "react";
import "./styles.css";
import DmirtiHead from "./dmitri-thanks.png";

class AskDimi extends React.Component {
  render() {
    return (
      <a href="https://api.whatsapp.com/send?text=help">
        <div className="profile__askD">
          Ask me a question when you get stuck
          {process.env.NODE_ENV === "development" ? null : (
            <img
              className="dmitri"
              src={DmirtiHead}
              alt="May you questions get answered"
            />
          )}
        </div>
      </a>
    );
  }
}

export default AskDimi;
