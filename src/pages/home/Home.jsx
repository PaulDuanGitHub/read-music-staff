import React, { Component } from 'react'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <div className='intro'>
          Welcome! This is a website that aim on practicing reading music staff.
          <br/>
          <br/>
          To-Do Listπ:
          <ul>
              <li>
                  Reading music notes on music sheet
                  <ul>
                      <li>G-Clef β2022/2/10</li> 
                      <li>C-Clef</li>
                      <li>F-Clef</li>
                      <li>Adjust pitch range β2022/2/14</li>
                      <li>Notes on C major β2022/2/10</li>
                      <li>Notes on others major scales and minor scales</li>
                  </ul>
              </li>

              <li>
                    Recognize Chords
              </li>

              <li>
                    Recognize Tonality
              </li>
          </ul>
          This website is open source on <a target="_blank" href='https://github.com/PaulDuanGitHub/read-music-staff/tree/main'>Github</a>, click here to check it out!
      </div>
    )
  }
}
