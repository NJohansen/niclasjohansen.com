import './Section.css';
import React from 'react';
import shape from '../../assets/images/shape.svg';

export default ({ headertext, half}) => (
    <div className='splashContainer'>
      <div className='imageWidget version2'>
        <div className='headerImage'>
          <div style={{width:'850px', height:'850px'}}>
           <img className='headerImg' src={shape} alt='text'></img>
          </div>
        </div>
      </div>
      <div className='imageWidget'>
        <div className='headerImage'>
          <div style={{width:'850px', height:'850px'}}>
           <img className='headerImg' src={shape} alt='text'></img>
          </div>
        </div>
      </div>
      <div className='splashHeader'>
        <h1>{headertext}</h1>
      </div>
      <div className="splashDescription"></div>
    </div>
)
