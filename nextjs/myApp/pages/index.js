import React from 'react';
import axios from 'axios';
import Link from 'next/Link';

class Index extends React.Component {

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

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Link href="/sessions">
          <a>SESSIONS</a>
        </Link>
        <ul>
          {this.state.speakerData.map((speaker) =>
              <li key={speaker.id}>
                {speaker.firstName}
              </li>
            )
          }
        </ul>
      </>
    )
  }

  componentWillUnmount() {
  }
};

export default Index;