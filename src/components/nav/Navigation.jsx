import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Staff from '../../pages/staff/Staff'
import { NavLink, Route, Routes } from 'react-router-dom'
import './navigation.css'

export default class Navigation extends Component {
  render() {
    return (
        <div className='container'>
            <div className='row justify-content-start'>
                <div className='col-3'>
                        <Nav.Item className='whiteKeys'>
                            
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link as={NavLink} className="pill" to='/'><div>Home</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link as={NavLink} className="pill" to='/staffs'><div>Staff</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link as={NavLink} className="pill" to='/chords'><div>Chords</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item> 
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link as={NavLink} className="pill" to='/tonality'><div>Tonality</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link className="pill"><div>Comming Soon</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link className="pill"><div>Comming Soon</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item className='whiteKeys'>
                            <Nav.Item className='blackKeys'>
                                <Nav.Link className="pill"><div>Comming Soon</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                </div>
                <div className='col-4'>
                    <Routes>
                        <Route path='/' element={<div>This is the main page</div>}/>
                        <Route path="/staffs" element={<Staff/>}/>
                        <Route path="/chords" element={<div>Chords</div>}/>
                        <Route path="/tonality" element={<div>Tonality</div>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
  }
}
