import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Staff from '../../pages/staff/Staff'
import { NavLink, Route, Routes } from 'react-router-dom'
import './navigation.css'
import Home from '../../pages/home/Home'
import Update from '../../pages/update/Update'

export default class Navigation extends Component {
  render() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-3 col-sm-5 col-md-4 col-lg-2'>
                    <Nav className='flex-column'>
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
                                <Nav.Link as={NavLink} className="pill" to="/update"><div>Update Log</div></Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className='col-xs-3 col-sm-5 col-md-7 col-lg-5'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path="/staffs" element={<Staff/>}/>
                        <Route path="/chords" element={<div>Chords</div>}/>
                        <Route path="/tonality" element={<div>Tonality</div>}/>
                        <Route path="/update" element={<Update/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
  }
}
