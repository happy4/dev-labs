import React from 'react';
import axios from 'axios';
import SessionCard from "../src/SessionCard";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class Sessions extends React.Component {

  static GetSessionsUrl() {
    if (process.env.NODE_ENV === "production") {
        return process.env.RESTURL_SESSIONS_PROD
            || publicRuntimeConfig.RESTURL_SESSIONS_PROD;
    } else {
        return process.env.RESTURL_SESSIONS_DEV;
    }
  }
    static async getInitialProps() {

        var promise = axios.get(Sessions.GetSessionsUrl()).then(response => {
            return {
                hasErrored: false,
                sessionData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;


    }

    constructor(props) {
        super(props);
        console.log(123, Sessions.GetSessionsUrl())
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData || []
        }
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              {this.state.sessionData.map((session) =>
                <div className="card col-4 cardmin margintopbottom" key={session.id}>
                  <SessionCard session={session}/>
                </div>
              )}
            </div>
          </div>
        )
    }

}

export default Sessions
