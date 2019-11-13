import React from 'react';
import './Header.css';
import Logo from '../../components/Logo';
import { NavLink } from 'react-router-dom'

const menu = [
  ['/projects', 'Projects'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact']
];

const renderMenuItem = (path, name) => {
  return (
    <span className={window.location.pathname.includes(path) ? 'pages active' : 'pages'}>
      <NavLink to={path} activeClassName='active'>{name}</NavLink>
    </span>
  )
}

const renderActions = (path, name) => {
  return (
    <span className='actions'>
      <a href={path}>
        <button type='button' className='primaryButton'>{name}</button>
      </a>
    </span>
  )
}

// WIP
// eslint-disable-next-line 
const renderMenu = () => {
  for (const [page,name] in menu) {
    renderMenuItem(page,name)
    }
}

export default () => (
  <div className='navContainer'>
    <div className='nav'>
      <div className='navContent'>
        <NavLink to="/"><Logo height="70" /></NavLink>
        <div className='navPages'>
          {renderMenuItem('/portfolio', 'Portfolio')}
          {renderMenuItem('/about', 'About me')}
        </div>
        <span className='infoText'><a href='mailto:nj@morningtrain.dk'>nj@morningtrain.dk</a></span>
        {renderActions('/projects', 'Contact')}
      </div>
    </div>
  </div>
)
