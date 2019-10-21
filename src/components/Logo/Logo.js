import './Logo.css';
import React from 'react';

export default ({ link, width, height}) => (
  <div className='logo'>
    <img src="./logo.png" alt="Logo" height={height} width={width}></img>
  </div>
)
