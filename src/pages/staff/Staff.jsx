import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Vex from 'vexflow'
import './staff.css'
function createNotes(){
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    
    const notes = []
    const pitchNames = "CDEFGAB"
    const pitches = "345"
    for (let i = 0; i < 4; i++) {
      const pitchName = getRandomInt(0,7)
      const pitch = getRandomInt(0,3)
      notes[i] = pitchNames[pitchName] + pitches[pitch]
    }
    console.log(notes.join(','));
    return notes.join('/q,')
}
function generateStaff(){
    const vf = new Vex.Flow.Factory({renderer:{elementId:"staff"}})
    const score = vf.EasyScore();
    const system = vf.System();
    const notes = createNotes()
    console.log(typeof(notes));
    system.addStave({
      voices: [score.voice(score.notes(notes))]
    }).addClef('treble').addTimeSignature('4/4');
    vf.draw()
    return notes
  }
export default class Staff extends Component {
    state = {value:""}
    componentDidMount(){
        const notes = generateStaff()
        this.setState({notes})
    }

    changeNotes = () => {
      this.notes.innerHTML = ''
      const notes = generateStaff()
      this.clearInput(this.inputs.childNodes)
      this.setState({notes})
    }
    saveInputData = (dataType)=>{
      return (event)=>{
        this.setState({[dataType]:event.target.value.toUpperCase()})
      }
    }

    checkAnswers = () => {
      let answers = [this.state.n1,this.state.n2,this.state.n3,this.state.n4]
      let answer = answers.join('/q,')
      if (answer == this.state.notes){
        alert("you are right!")
        this.changeNotes()
        this.clearInput(this.inputs.childNodes)
      }else {
        alert("not right")
      }
    }

    clearInput = (l) => {
      Array.from(l).forEach((v)=>{
        v.value=""
      })
    }

    render() {
    return (
        <div>
          <div id="staff" ref={(curNode)=>{this.notes=curNode}}></div>
          <div ref={(c)=>{this.inputs=c}}>
            <input type="text" onChange={this.saveInputData('n1')}></input>
            <input type="text" onChange={this.saveInputData('n2')}></input>
            <input type="text" onChange={this.saveInputData('n3')}></input>
            <input type="text" onChange={this.saveInputData('n4')}></input>
          </div>
            <Button variant="success" size='sm' onClick={this.checkAnswers}>
            Check Answers
            </Button>
          <Button variant="success" size = 'sm'onClick={this.changeNotes}>
            Change Notes
          </Button>
        </div>
    )
    }
}
