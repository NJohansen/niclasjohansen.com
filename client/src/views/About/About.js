import React, { Component } from 'react';
import './About.css';
import Section from '../../components/Section/Section';


class About extends Component {
  render() {
    return (
      <div id='root'>
        <main className='main'>
          <Section headertext="About" description="test"/>
        </main>
        </div>
    );
  }
}

export default About;
