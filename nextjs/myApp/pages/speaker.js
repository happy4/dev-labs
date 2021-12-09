import React from 'react';
import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class Speaker extends React.Component {

  static GetSpeakerUrl() {
    if (process.env.NODE_ENV === "production") {
        return process.env.RESTURL_SPEAKER_PROD
            || publicRuntimeConfig.RESTURL_SPEAKER_PROD;
    } else {
        return process.env.RESTURL_SPEAKER_DEV;
    }
  }

  static async getInitialProps ({query}) {
    const promise = axios.get(`${Speaker.GetSpeakerUrl()}/${query.speakerId}`).
      then(response => {
        return {
          hasError: false,
          speakerDataOne: response.data
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
    const {
      speakerDataOne
    } =  this.props;

    return (
      <div className='container'>
        <div className="row">
          <h2 className='margintopbottom20'>{speakerDataOne.firstName} {speakerDataOne.lastName}</h2>
          <p className='margintopbottom20'>{speakerDataOne.bio}</p>
        </div>
      </div>
    )
  }
};

export default Speaker;