import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import Vex from 'vexflow'
import './staff.css'

export default class Staff extends Component {
  state = { sharp: false, flat: false }
  createNotes() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }

    let notes = ""
    console.log(this.state.sharp)

    const pitchNames = "CDEFGAB"
    const pitches = "345"
    // Four quad notes
    /* for (let i = 0; i < 4; i++) {
      const pitchName = getRandomInt(0,7)
      const pitch = getRandomInt(0,3)
      notes[i] = pitchNames[pitchName] + pitches[pitch]
    }
    console.log(notes.join(','));
    return notes.join('/q,') */
    const pitchName = getRandomInt(0, 7)
    const pitch = getRandomInt(0, 3)
    // console.log(pitchNames[pitchName])
    // console.log(pitches[pitch])
    if (this.state.sharp && !this.state.flat) {
      notes = pitchNames[pitchName] +"#"+ pitches[pitch]
    }else if(!this.state.sharp && this.state.flat) {
      notes = pitchNames[pitchName] +"b"+ pitches[pitch]
    }else if(!this.state.sharp && !this.state.flat) {
      notes = pitchNames[pitchName] + pitches[pitch]
    }else {
      const  num = getRandomInt(0,10)
      if(num < 5){
        notes = pitchNames[pitchName] +"b"+ pitches[pitch]
      }else{
        notes = pitchNames[pitchName] +"#"+ pitches[pitch]
      }
    }
    return notes + "/w"
  }
  generateStaff() {
    const vf = new Vex.Flow.Factory({ renderer: { elementId: "staff" } })
    const score = vf.EasyScore();
    const system = vf.System();
    const notes = this.createNotes();
    console.log(notes)
    system.addStave({
      voices: [score.voice(score.notes(notes))]
    }).addClef('treble').addTimeSignature('4/4');
    vf.draw()
    return notes.substring(0, notes.length - 3)
  }
  componentDidMount() {
    const notes = this.generateStaff()
    this.setState({ notes })
  }

  changeNotes = () => {
    this.notes.innerHTML = ''
    const notes = this.generateStaff()
    //this.clearInput(this.inputs.childNodes)
    this.setState({ notes })
  }
  // saveInputData = (dataType)=>{
  //   return (event)=>{
  //     this.setState({[dataType]:event.target.value.toUpperCase()})
  //   }
  // }

  // checkAnswers = () => {
  //   let answers = [this.state.n1,this.state.n2,this.state.n3,this.state.n4]
  //   let answer = answers.join('/q,')
  //   if (answer == this.state.notes){
  //     alert("you are right!")
  //     this.changeNotes()
  //     this.clearInput(this.inputs.childNodes)
  //   }else {
  //     alert("not right")
  //   }
  // }

  // clearInput = (l) => {
  //   Array.from(l).forEach((v)=>{
  //     v.value=""
  //   })
  // }
  check = (event) => {
    const answer = this.state.notes
    let note = event.target.innerText
    if (note.length==2 && note[note.length-1]=="♭"){
      note = note[0] + "b"
    }
    if (note == answer) {
      this.changeNotes()
    }
  }

  useSharp = () => {
    this.setState({ sharp: !this.state.sharp },(this.changeNotes))
    console.log(this.state.sharp)
  }

  useFlat = () => {
    this.setState({ flat: !this.state.flat },(this.changeNotes))
  }

  render() {
    return (
      <div>
        <div id="staff" ref={(curNode) => { this.notes = curNode }}></div>
        {/* <div ref={(c)=>{this.inputs=c}}>
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
          </Button> */}
        <div className='row'>
          <Button variant="primary button col" size='sm' onClick={this.check}>C</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>D</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>E</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>F</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>G</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>A</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>B</Button>
        </div>
        <div className="row">
          <Button variant="secondary button col" size='sm' onClick={this.check}>C#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>D#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>E#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>F#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>G#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>A#</Button>
          <Button variant="secondary button col" size='sm' onClick={this.check}>B#</Button>
        </div>
        <div className='row'>
          <Button variant="success button col" size='sm' onClick={this.check}>C♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>D♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>E♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>F♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>G♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>A♭</Button>
          <Button variant="success button col" size='sm' onClick={this.check}>B♭</Button>
        </div>
        <div>
          <Form>
            <Form.Check onClick={this.useSharp} type="switch" label="Enable Sharp Note" />
            <Form.Check onClick={this.useFlat} type="switch" label="Enable Flat Note" />
          </Form>
        </div>
      </div>
    )
  }
}
