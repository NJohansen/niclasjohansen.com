import './Terminal.css';
import React from 'react';

export default () => (
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
            <div className="codeComment"># Run welcome script</div>
            <div>node welcome.js</div>
            <div className="codeComment"># Install Dataform CLI</div>
            <div>npm i -g @dataform/cli</div>
            <div className="codeComment"># Install Dataform CLI</div>
            <div>npm i -g @dataform/cli</div>
            <div className="codeComment"># Install Dataform CLI</div>
            <div>npm i -g @dataform/cli</div>
          </pre>
        </div>
      </div>
    </div>
  </div>
)
