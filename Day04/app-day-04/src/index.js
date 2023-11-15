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
const title = 'Front End Technologies'
const Header = () => (
  <header>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="logos-container">
      <img className="logo" src={logoCss} alt="logo CSS" />
      <img className="logo" src={logoHtml} alt="logo HTML" />
      <img className="logo" src={logoJS} alt="logo JS" />
      <img className="logo" src={logoReact} alt="logo React" />
    </div>
  </header>
)

const Forms = () => (
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

const name = 'Breno Soares'
const job = 'Front-end Developer'
const techs = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'Django',
  'Flask',
  'React',
  'PostgreSQL',
  'GIT',
  'GitHub',
]
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const User = () => (
  <div className="user-card">
    <div className="profile">
      <img src={breno} alt="user breno" />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
    <h1 className="title-skill">skills</h1>
    <div>
      <ul className="list-skills">{techsFormatted}</ul>
    </div>
  </div>
)

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const colorList = [
  hexaColor(),
  hexaColor(),
  hexaColor(),
  hexaColor(),
  hexaColor(),
]

const colorsDiv = colorList.map((color) => (
  <div className="color" style={{ backgroundColor: color }}>
    <h1>{color}</h1>
  </div>
))

const ColorUser = () => <div>{colorsDiv}</div>

// JSX element, app
const App = () => (
  <div className="app">
    <Header />
    <Forms />
    <User />
    <ColorUser />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
