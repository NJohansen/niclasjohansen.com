import React, { Component } from 'react';
import './Blog.css';
import Section from '../../components/Section/Section';
import Post from '../../components/Post';


export default class Blog extends Component {
  state = {
    posts: JSON.parse(localStorage.getItem('posts')) || [] 
  }

  componentDidMount(){
    
  }

  async fetchPosts(){
    const res = await fetch('/blog/posts.json')
    const posts = await res.json()

    localStorage.setItem('posts', JSON.stringify(posts))

    this.setState({
      posts: [...posts]
    }, this.initColumn)
  }

  render () {
    const { posts } = this.state

    return (
      <div>
        <section className='blog-heading'>
          <h1>Posts</h1>
        </section>
        <section className='blog-section'>
          <div className='blog'>
            {posts.map((post, id) => this.renderPost(id, post))}
          </div>
        </section>
      </div>
    )
  }

  renderPost (id, { title, description, coverTextColor, coverColor }) {
    const style = {
      color: coverTextColor,
      background: coverColor
    }

    const classes = ['post'].join(' ')

    return (
      <div id={id} key={id} className={classes}>
        <header style={style}>
          <section>
            <div>
              <h1>{title}</h1>
              <h2 class='subject'>{description}</h2>
              <Post/>
            </div>
          </section>
        </header>
      </div>
    )
  }
}
