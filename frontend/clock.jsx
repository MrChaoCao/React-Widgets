import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick(){
    this.setState( { time: new Date()} );
  }

  getTimeAsString() {
    // let hours = this.state.time.getHours();
    // let minutes = this.state.time.getMinutes();
    // let seconds = this.state.time.getSeconds();
    //
    // return `${hours}:${minutes}:${seconds}`;

    return this.state.time.toString().split(" ")[4];
  }

  getDateAsString() {
    return this.state.time.toString().split(" ").slice(0, 4).join(" ");
  }

  render() {
    return (
      <div>
        <section>
          <h1>Talk to Clock</h1>
          <h2>Time</h2>
          <p>{this.getTimeAsString()}</p>
          <h2> Date </h2>
          <p>{this.getDateAsString()}</p>
        </section>
      </div>
    );
  }

}

export default Clock;
