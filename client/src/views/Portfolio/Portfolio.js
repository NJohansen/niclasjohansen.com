import React, { Component } from 'react';
import './Portfolio.css';
import Section from '../../components/Section/Section';


class Portfolio extends Component {
  render() {
    return (
      <div id='root'>
        <main className='main'>
          <Section headertext="Portfolio" description="test"/>
        </main>
        </div>
    );
  }
}

export default Portfolio;
