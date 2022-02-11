import React from 'react'
import Header from './components/header/Header'
import { HashRouter } from 'react-router-dom'
import Navigation from './components/nav/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Header/>
          <Navigation/>
        </HashRouter>
      </div>
    )
  }
}
