// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// JSX element, header
const Header = (props) => {
  return (
    <header>
      <div className="title">
        <h3>30 Days Of React</h3>
      </div>
      <h4 className="subtitle">{props.subtitle}</h4>
    </header>
  )
}

const Main = (props) => {
  if (props.numbers) {
    const primeNumber = (num) => {
      if (num === 0 || num === 1) {
        return false
      }
      for (let divisor = 2; divisor < num; divisor++)
        if (num % divisor === 0) return false
      return true
    }
    const numberBlock = props.numbers.map((num) => {
      if (primeNumber(num)) {
        return (
          <h1
            style={{ backgroundColor: 'rgb(250, 81, 81)' }}
            className="block-container"
            key={num}
          >
            {num}
          </h1>
        )
      } else if (num % 2 === 0) {
        return (
          <h1
            style={{ backgroundColor: 'rgb(94, 196, 111)' }}
            className="block-container"
            key={num}
          >
            {num}
          </h1>
        )
      } else {
        return (
          <h1
            style={{ backgroundColor: 'rgb(250, 213, 81)' }}
            className="block-container"
            key={num}
          >
            {num}
          </h1>
        )
      }
    })
    return numberBlock
  } else {
    const colorBlock = props.color.map((color) => {
      return (
        <h1
          style={{ backgroundColor: color }}
          className="block-container block-container-hexa"
          key={color}
        >
          {color}
        </h1>
      )
    })
    return colorBlock
  }
}

// JSX element, app
const subtitle = ['Number Generator', 'Hexadecimal Colors']
const App = () => {
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const numbersList = []
  const colorList = []

  for (let i = 0; i <= 31; i++) {
    numbersList.push(i)
    colorList.push(hexaColor())
  }

  return (
    <div className="app">
      <Header subtitle={subtitle[0]} />
      <div className="container">
        <Main numbers={numbersList} />
      </div>
      <Header subtitle={subtitle[1]} />
      <div className="container">
        <Main color={colorList} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
