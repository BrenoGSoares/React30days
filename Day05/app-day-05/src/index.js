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
const Header = (props) => {
  return (
    <header>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="logos-container">
        <img className="logo" src={props.css} alt="logo CSS" />
        <img className="logo" src={props.html} alt="logo HTML" />
        <img className="logo" src={props.js} alt="logo JS" />
        <img className="logo" src={props.react} alt="logo React" />
      </div>
    </header>
  )
}

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

const User = (props) => {
  const techsFormatted = props.data.techs.map((tech) => (
    <li key={tech}>{tech}</li>
  ))
  return (
    <div className="user-card">
      <div className="profile">
        <img src={breno} alt="user breno" />
        <h1>{props.data.name}</h1>
        <p>{props.data.job}</p>
      </div>
      <h1 className="title-skill">skills</h1>
      <div>
        <ul className="list-skills">{techsFormatted}</ul>
      </div>
    </div>
  )
}

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

const ColorUser = (props) => {
  const colorsDiv = props.color.map((color) => (
    <div className="color" style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  ))
  return <div>{colorsDiv}</div>
}

// JSX element, app
const App = () => {
  const data = {
    name: 'Breno Soares',
    job: 'Front-end Developer',
    techs: [
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
    ],
  }
  const colorList = [
    hexaColor(),
    hexaColor(),
    hexaColor(),
    hexaColor(),
    hexaColor(),
  ]
  return (
    <div className="app">
      <Header css={logoCss} html={logoHtml} js={logoJS} react={logoReact} />
      <Forms />
      <User data={data} />
      <ColorUser color={colorList} />
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
