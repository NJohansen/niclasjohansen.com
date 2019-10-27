import React, { Component } from 'react';
import './Blog.css';
import Section from '../../components/Section/Section';


export default class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: JSON.parse(localStorage.getItem('posts')) || [] 
    }
  }

  componentDidMount(){
    this.fetchPosts()
  }

  async fetchPosts(){
    const res = await fetch('/blog/posts.json')
    const posts = await res.json()
    console.log(posts)
    localStorage.setItem('posts', JSON.stringify(posts))
    
    this.setState({
      posts: [...posts]
    }, this.initColumn)
  }

  render () {
    const posts  = this.state.posts
    
    return (
      <div>
        <section className='blog-heading'>
        <Section headertext='Posts'/>
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
              <h2 className='subject'>{description}</h2>
            </div>
          </section>
        </header>
      </div>
    )
  }
}