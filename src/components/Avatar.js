import React from 'react';
import './Avatar.css';

const Avatar = props => {
  return (
    <div className="Avatar">
      <img src={props.avatar.image} alt="Bart or Homer"/>
      <h2>{props.avatar.firstName} {props.avatar.lastName}</h2>
    </div>
  );
}

export default Avatar;