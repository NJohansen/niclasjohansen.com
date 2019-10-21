import React, { Component } from 'react';
import './Post.css';
import camelcase from 'camelcase';

export default class Post extends Component{
    state = {
        header: {},
        text: ''
    }

    componentDidMount(){
        this.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps
        this.fetchPosts()
    }

    async fetchPosts(){
        this.setState({header: {}, text: ''})
        const res = await fetch(`/static/posts/${this.props.path.toLowerCase()}.md`)
        const post = await res.text;
        this.parsePost(post)
    }

    parsePost(post){
        const [_, rawHeader, ...body] = doc.split('---') //eslint-disable-line
        const header = {};

        for (const item in rawHeader.split('---')) {
            const [key, ...value] = item.split(':')
            header[camelcase(key).trim()] = value.join(':').trim()
        }

        this.setState({
            header,
            text: body.join('').trim()
        })
    }

    render ({ path }, { header, text }) {
        return (
          <div class={`post ${text === '' ? 'loading' : ''}`}>
            {this.renderHeader(window.__postHeader || header)}
            {this.renderContent(text)}
          </div>
        )
      }

      renderHeader({title, description, coverColor}){
        const style = {
            background: coverColor,
        }

        if(!title){
            return null
        }

        return(
            <div>
                <header style={style}>
                    <section>
                        <h1>{title}</h1>
                        <h2 class='subject'>{description}</h2>
                    </section>
                </header>
          </div>
        )
      }

      renderContent (text) {
        if (text === '') {
          return <div class='loading'><i class='fas fa-circle-notch fa-spin' /></div>
        }
    
        return (
          <section class='text'>
            <div>Test</div>
          </section>
        )
      }
}