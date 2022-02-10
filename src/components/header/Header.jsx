import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Staff from '../../pages/staff/Staff'
import { NavLink, Route, Routes } from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav className='header' justify variant="tabs">
            <Nav.Item className='tab'>
                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab'>
                <Nav.Link as={NavLink} to='/staffs'>Staffs</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab'>
                <Nav.Link as={NavLink} to='/chords'>Chords</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab'>
                <Nav.Link as={NavLink} to='/tonality'>Tonality</Nav.Link>
            </Nav.Item>
        </Nav>

        <Routes>
            <Route path='/' element={<div>This is the main page</div>}/>
            <Route path="/staffs" element={<Staff/>}/>
            <Route path="/chords" element={<div>Test2</div>}/>
            <Route path="/tonality" element={<div>Test3</div>}/>
        </Routes>
      </div>
    )
  }
}
