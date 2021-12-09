import React from 'react';
import axios from 'axios';
import SpeakerCard from "../src/SpeakerCard";

class Speakers extends React.Component {

  static async getInitialProps () {
    const promise = axios.get('http://localhost:4000/speakers').
      then(response => {
        return {
          hasError: false,
          speakerData: response.data
        }
      })
      .catch(error => {
        return {
          hasError: true,
          message: error.message
        }
      });
      return promise;
  }

  constructor(props) {
    super(props);

    const {
      speakerData,
      hasError,
      message
    } = props;

    this.state = {
      speakerData,
      hasError,
      message
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.state.speakerData.map((speaker) =>
              <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                <SpeakerCard speaker={speaker}/>
              </div>
            )}
        </div>
      </div>
    )
  }
};

export default Speakers;