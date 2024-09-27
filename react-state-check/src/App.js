import React, { Component } from "react";
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Software Engineer",
        imgSrc: "(link unavailable)",
        profession: "Developer",
      },
      shows: false,
      lastMounted: new Date(),
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ lastMounted: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, lastMounted } = this.state;
    const timeSinceMounted = Math.floor((new Date() - lastMounted) / 1000);

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default Person;
