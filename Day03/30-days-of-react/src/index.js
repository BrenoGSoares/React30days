// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// import images
import logoCss from './images/css_logo.png'
import logoHtml from './images/html_logo.png'
import logoJS from './images/JS_logo.png'
import logoReact from './images/react_logo.png'
import breno from './images/breno.jpg'

// JSX element, header
const header = (
  <header>
    <div className="title">
      <h3>Front End Technologies</h3>
    </div>
    <div className="logos-container">
      <img className="logo" src={logoCss} alt="logo CSS" />
      <img className="logo" src={logoHtml} alt="logo HTML" />
      <img className="logo" src={logoJS} alt="logo JS" />
      <img className="logo" src={logoReact} alt="logo React" />
    </div>
  </header>
)
const forms = (
  <div className="forms">
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div className="forms-input">
      <input
        className="form-field"
        type="text"
        placeholder="First Name"
      ></input>
      <input className="form-field" type="text" placeholder="Last Name"></input>
      <input className="form-field" type="text" placeholder="Email"></input>
    </div>
    <button>Subscribe</button>
  </div>
)

const user = (
  <div className="user-card">
    <div className="profile">
      <img src={breno} alt="user breno" />
      <h1>Breno Soares</h1>
      <p>Front-end Developer</p>
    </div>
    <h1 className="title-skill">skills</h1>
    <div className="list-skills">
      <p className="skill">HTML</p>
      <p className="skill">CSS</p>
      <p className="skill">JS</p>
      <p className="skill">Python</p>
      <p className="skill">Django</p>
      <p className="skill">Flask</p>
      <p className="skill">React</p>
      <p className="skill">React</p>
      <p className="skill">PostgreSQL</p>
      <p className="skill">GIT</p>
      <p className="skill">GitHub</p>
    </div>
  </div>
)

// JSX element, app
const app = (
  <div className="app">
    {header}
    {forms}
    {user}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
