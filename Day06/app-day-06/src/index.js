// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// JSX element, header
const Header = () => {
  return (
    <header>
      <div className="title">
        <h3>30 Days Of React</h3>
      </div>
      <h4 className="subtitle">Number Generator</h4>
    </header>
  )
}

const Main = (props) => {
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
}

// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }

// JSX element, app
const App = () => {
  const numbersList = []
  for (let i = 0; i <= 31; i++) {
    numbersList.push(i)
  }

  // const colorList = [
  //   hexaColor(),
  //   hexaColor(),
  //   hexaColor(),
  //   hexaColor(),
  //   hexaColor(),
  // ]
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Main numbers={numbersList} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
