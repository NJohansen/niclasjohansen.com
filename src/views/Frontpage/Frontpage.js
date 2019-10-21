import React, { Component } from 'react';
import './Frontpage.css';
import Section from '../../components/Section/Section';
import Terminal from '../../components/Terminal/Terminal';


class Frontpage extends Component {
  render() {
    return (
      <div id='root'>
        <main className='main'>
        <Section headertext="Welcome!"/> 
        <div className="splashDescription"><Terminal/></div>
        </main>
        </div>
    );
  }
}

export default Frontpage;
