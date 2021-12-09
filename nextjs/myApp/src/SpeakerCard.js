import { Component } from "react";
import React from "react";
import Link from "next/Link";

class SpeakerCard extends Component {
  render() {
    const {
      speaker
    } = this.props;

    return (
      <div>
        <img className="card-img-top" src={`/static/speakers/Speaker-${speaker.id}.jpg`}/>
          <div className="card-body">
            <Link
              href={{
                pathname: '/speaker',
                query: {
                  speakerId: speaker.id
                }
              }}
              as={`speaker/${speaker.id}`}
            >
              <a className="btn btn-lg btn-block btn-outline-primary">Details</a>
            </Link>
            <h4 className="card-title">{speaker.userFirstName} {speaker.userLastName} </h4>
            <p className="card-text">{speaker.bioShort}</p>
          </div>
      </div>
    );
  }
}

export default SpeakerCard;
