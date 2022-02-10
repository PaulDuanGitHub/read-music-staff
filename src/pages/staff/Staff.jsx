import React, { Component } from 'react'
import Vex from 'vexflow'

function generateStaff(){
    const vf = new Vex.Flow.Factory({renderer:{elementId:"staff"}})
    const score = vf.EasyScore();
    const system = vf.System();
    system.addStave({
      voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
    }).addClef('treble').addTimeSignature('4/4');
    
    vf.draw()
  }
export default class Staff extends Component {
componentDidMount(){
    generateStaff()
    }

    render() {
    return (
        <div id="staff"></div>
    )
    }
}
