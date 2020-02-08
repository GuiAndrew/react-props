import React, { Component } from "react";
import "./Avatar3.css";

// const isImage = false;

class Avatar3 extends Component {
  render() {
    const { image, firstName, lastName, isImage } = this.props;
    //console.log(firstName);
    const avatarClassCss = (isImage) => {
        if (isImage) {
            return 'Avatar2';
        } else {
            return 'Avatar2 animationStyle';
        } 
    } 
    return (
      <div className={avatarClassCss(isImage)} style={ 
        {
            background: isImage ? 'lightblue' : 'lightgray',
            color: isImage ? 'red' : 'blue'
        } 
      }>
        <img src={isImage ? image : 'https://www.drupal.org/files/issues/default-avatar.png'} alt="Bart or Homer"/>
        <h2>
          {firstName} {lastName}
        </h2>
      </div>
    );
  }
}

export default Avatar3;
