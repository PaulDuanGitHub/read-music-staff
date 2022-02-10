import React from 'react'
import Staff from './pages/staff/Staff'
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </div>
    )
  }
}
