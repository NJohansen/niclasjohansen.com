import './Terminal.css';
import React, {Component} from 'react';

export default class Terminal extends Component {

  constructor(props){
    super(props)
    this.displayData = [];

    this.state = {
      termMessage: '',
      cmd: '',
      history: [],
      lastTermMessage: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this)
  }


  componentDidMount(){

  }

  handleChange(event) {
    if(event.key !== 'Enter'){
      this.setState({termMessage: event.target.value, cmd: event.target.value})
    }
  }

  renderTerminalOutput = () => {
    return this.state.history.slice(0).reverse().map(t => (
      <React.Fragment>
        <div key='uniq'>{t}</div>
        <div>{this.state.lastTermMessage}</div>
        <div className="codeComment"><b>Johansen:</b> ~/Code/Website (Master)</div>
      </React.Fragment>
    ))
  }

  onKeyPress(event){
    let key = event.key

    if(key === 'Enter'){
      event.preventDefault()
      this.setState({
        cmd: event.target.value,
        history: [event.target.value, ...this.state.history],
      })
      this.handleCommand()
    }
  }

  handleCommand(){
    const commands = {
      welcome: 'Hey there!',
      whoami: 'My name is Niclas',
      gotoblog: 'exec blog',
      help: 'Glad you asked for help! \n The following commands work: \n welcome \n whoami \n gotoblog'
    }

    let answer = commands[this.state.cmd]
    
    if(!answer){
      this.setState({
        lastTermMessage: `-bash: ${this.state.cmd}: command not found`, 
        termMessage: ''
      })
    } else{
      this.setState({ 
        lastTermMessage: answer, 
        termMessage: ''
      })
    }

  }

  updateHistory(text){
    this.setState({history: text})
  }

  render(){
    return(
      <div className='terminalContainer'>
      <div className='editor'>
        <div className='terminalHeader'>
          <div className='buttonGroup'>
            <span className='terminalButton close'></span>
            <span className='terminalButton minimize'></span>
            <span className='terminalButton maximize'></span>
          </div>
        </div>
        <div className='terminalContent'>
          <div className='terminalCode'>
            <pre>
              <div className="codeComment"><b>Johansen:</b> ~/Code/Website (Master)</div>
              {this.renderTerminalOutput()}
              <textarea value={this.state.termMessage} className='terminalTextArea' onChange={this.handleChange} onKeyPress={this.onKeyPress}>→</textarea>
            </pre>
          </div>
        </div>
      </div>
    </div> 
    )
  }
}