import React, { Component } from 'react';
import './Document.css';
import camelcase from 'camelcase';
import Markdown from '../Markdown';

export default class Document extends Component{
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
        const post = res.text;
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
          <div className={`post ${text === '' ? 'loading' : ''}`}>
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
                        <h2 className='subject'>{description}</h2>
                    </section>
                </header>
          </div>
        )
      }

      renderContent (text) {
        if (text === '') {
          return <div className='loading'><i className='fas fa-circle-notch fa-spin' /></div>
        }
    
        return (
          <section className='text'>
            <Markdown text={text} />
          </section>
        )
      }
}