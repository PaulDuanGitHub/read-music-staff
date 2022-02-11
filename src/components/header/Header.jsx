import React, { Component } from 'react'
import './header.css'
import Logo from '../../img/logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <a href=""><img src={Logo} alt=""/></a>
        </div>
      </div>
    )
  }
}
