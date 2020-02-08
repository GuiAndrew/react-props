import React, { Component } from "react";
import "./Avatar2.css";

class Avatar2 extends Component {
  render() {
    const { image, firstName, lastName } = this.props;
    return (
      <div className="Avatar2">
        <img src={image} alt="Bart or Homer"/>
        <h2>
          {firstName} {lastName}
        </h2>
      </div>
    );
  }
}

export default Avatar2;
