import React from 'react';
import './Avatar1.css';

const Avatar1 = ({image, firstName, lastName}) => {
  return (
    <div className="Avatar1">
      <img src={image} alt="Bart or Homer"/>
      <h2>{firstName} {lastName}</h2>
    </div>
  );
}

export default Avatar1;