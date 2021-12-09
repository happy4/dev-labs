import React from 'react';
import axios from 'axios';
import SpeakerCard from "../src/SpeakerCard";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class Speakers extends React.Component {

  static GetSpeakersUrl() {
    if (process.env.NODE_ENV === "production") {
        return process.env.RESTURL_SPEAKERS_PROD
            || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
    } else {
        return process.env.RESTURL_SPEAKERS_DEV;
    }
  }

  static async getInitialProps () {
    const promise = axios.get(Speakers.GetSpeakersUrl()).
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
    console.log('111 ', process.env.NODE_ENV, Speakers.GetSpeakersUrl() );

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