import React from 'react';
import DigitalClock from '../src/DigitalClock';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  tick() {
    this.setState(() => {
      return ({
        time: new Date().toLocaleString()
      });
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    const {
      time
    } = this.state;

    return (
      <DigitalClock time={time}> </DigitalClock>
    )
  }

  componentWillUnmount() {
    this.clearInterval(this.interval);
  }
};

export default Index;