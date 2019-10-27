import './Logo.css';
import React from 'react';

const path = require('path');

export default ({ width, height}) => (
  <div className='logo'>
    <img src={path.resolve(__dirname, 'logo.png')} alt="Niclas Johansen" height={height} width={width}></img>
  </div>
)
