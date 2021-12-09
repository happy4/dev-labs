import { Component } from "react";
import React from "react";

class SessionCard extends Component {
  render() {
    const {
      session
    } = this.props;

    return (
      <div className="card-body">
        <h4 className="card-title">
        </h4>
        <h6 className="card-title">{session.speakersNamesCsv}</h6>
        <p className="card-text">{session.descriptionShort}
        </p>
      </div>
    );
  }
}

export default SessionCard;
