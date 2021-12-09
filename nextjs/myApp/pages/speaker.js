import React from 'react';
import axios from 'axios';

class Speaker extends React.Component {

  static async getInitialProps ({query}) {
    const promise = axios.get(`http://localhost:4000/speakers/${query.speakerId}`).
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