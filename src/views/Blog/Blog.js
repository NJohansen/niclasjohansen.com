import React, { Component } from 'react';
import './Blog.css';
import Section from '../../components/Section/Section';
import Post from '../../components/Post';


export default class Blog extends Component {
  render() {
    return (
      <div id='root'>
        <main className='main'>
          <Section headertext="Blog"/>
          <Post path={`${this.props.post}`}/>
        </main>
        </div>
    );
  }
}
