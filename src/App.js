import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/nav/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Navigation/>
        </BrowserRouter>
      </div>
    )
  }
}
