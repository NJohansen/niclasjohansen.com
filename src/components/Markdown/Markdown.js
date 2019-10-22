import React, {Component} from 'react';
import './Markdown.css';
import hljs from 'highlightjs';


export default class Markdown extends Component {
  componentDidMount(){
    this.initCodeBlocks()
  }

  componentDidUpdate(){
    this.initCodeBlocks()
  }

  initCodeBlocks(){
    const blocks = document.querySelectorAll('pre code')

    for(const block of blocks){
      hljs.highlightBlock(block)
    }
  }

  render ({ text }) {
    return <Markdown markdown={text} />
  }
}

