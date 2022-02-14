import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import Vex from 'vexflow'
import './staff.css'

export default class Staff extends Component {
  state = { 
    sharp: false, 
    flat: false, 
    row2Disabled:true, 
    row3Disabled: true, 
    lowerBound:0, 
    upperBound:26 ,
    upperUpBtnDisabled: true,
    upperDownBtnDisabled: false,
    lowerUpBtnDisabled: false,
    lowerDownBtnDisabled: true
  }
  createNotes() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    const allNotes = 
    ['c3','d3','e3','f3','g3','a3','b3','c4','d4','e4','f4','g4','a4','b4','c5','d5','e5','f5','g5','a5','b5','c6','d6','e6','f6','g6','a6']
    let notes = ""

    // Four quad notes
    /* for (let i = 0; i < 4; i++) {
      const pitchName = getRandomInt(0,7)
      const pitch = getRandomInt(0,3)
      notes[i] = pitchNames[pitchName] + pitches[pitch]
    }
    console.log(notes.join(','));
    return notes.join('/q,') */

    const {lowerBound, upperBound} = this.state

    const pitch = allNotes[getRandomInt(lowerBound, upperBound+1)]
    // console.log(pitchNames[pitchName])
    // console.log(pitches[pitch])
    if (this.state.sharp && !this.state.flat) {
      notes = pitch[0]+"#"+pitch[1]
    }else if(!this.state.sharp && this.state.flat) {
      notes = pitch[0]+"b"+pitch[1]
    }else if(!this.state.sharp && !this.state.flat) {
      notes = pitch
    }else {
      const  num = getRandomInt(0,10)
      if(num < 5){
        notes = pitch[0]+"b"+pitch[1]
      }else{
        notes = pitch[0]+"#"+pitch[1]
      }
    }

    return notes + "/w"
  }
  generateStaff() {
    const vf = new Vex.Flow.Factory({ renderer: { elementId: "staff",width:"550",height:"150"} })

    const score = vf.EasyScore();
    const system = vf.System();
    const notes = this.createNotes();

    system.addStave({
      voices: [score.voice(score.notes(notes))]
    }).addClef('treble').addTimeSignature('4/4');
    vf.draw()
    return notes.substring(0, notes.length - 3)
  }

  staffBound() {
    const allNotes = 
    ['c3','d3','e3','f3','g3','a3','b3','c4','d4','e4','f4','g4','a4','b4','c5','d5','e5','f5','g5','a5','b5','c6','d6','e6','f6','g6','a6']
    var upperBound = allNotes[this.state.upperBound]
    var lowerBound = allNotes[this.state.lowerBound]
    const vf = new Vex.Flow.Factory({ renderer: { elementId: "bound",width:"550",height:"200"} })

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes(upperBound+"/w")),
        score.voice(score.notes(lowerBound+"/w"))
      ]
    }).addClef('treble').addTimeSignature('4/4');
    vf.draw()
  }

  componentDidMount() {
    const notes = this.generateStaff()
    this.staffBound()

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
    if (note.toLowerCase() == answer) {
      this.changeNotes()
    }
  }

  useSharp = () => {
    this.setState({ sharp: !this.state.sharp, row2Disabled:!this.state.row2Disabled },(this.changeNotes))
  }

  useFlat = () => {
    this.setState({ flat: !this.state.flat, row3Disabled:!this.state.row3Disabled },(this.changeNotes))
  }

  updateBound = () => {
    this.staffBound()
    this.changeNotes()
  }

  upperBoundPlus = () => {
    const {lowerBound, upperBound} = this.state
    if (upperBound < 26) {
      document.getElementById("bound").innerHTML=""
      this.setState({upperBound:upperBound+1,upperDownBtnDisabled: false}, this.updateBound)
    }else{
      this.setState({upperUpBtnDisabled: true})
    }
  }

  upperBoundMinus = () => {
    const {lowerBound, upperBound} = this.state
    if (upperBound > lowerBound) {
      document.getElementById("bound").innerHTML=""
      this.setState({upperBound:upperBound-1,upperUpBtnDisabled: false},this.updateBound)
    }else{
      this.setState({upperDownBtnDisabled: true})
    }
  }

  lowerBoundPlus = () => {
    const {lowerBound, upperBound} = this.state
    if (lowerBound < upperBound) {
      document.getElementById("bound").innerHTML=""
      this.setState({lowerBound:lowerBound+1,lowerDownBtnDisabled:false},this.updateBound)
    }else{
      this.setState({lowerUpBtnDisabled: true})
    }
  }

  lowerBoundMinus = () => {
    const {lowerBound, upperBound} = this.state
    if (lowerBound>0) {
      document.getElementById("bound").innerHTML=""
      this.setState({lowerBound:lowerBound-1,lowerUpBtnDisabled: false},this.updateBound)
    }else{
      this.setState({lowerDownBtnDisabled: true})
    }
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
        <div className='row row-cols-7'>
          <Button variant="primary button col" size='sm' onClick={this.check}>C</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>D</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>E</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>F</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>G</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>A</Button>
          <Button variant="primary button col" size='sm' onClick={this.check}>B</Button>
        </div>
        <div className="row row-cols-7" >
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>C#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>D#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>E#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>F#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>G#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>A#</Button>
          <Button disabled={this.state.row2Disabled} variant="secondary button col" size='sm' onClick={this.check}>B#</Button>
        </div>
        <div className='row row-cols-7'>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>C♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>D♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>E♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>F♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>G♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>A♭</Button>
          <Button disabled={this.state.row3Disabled} variant="success button col" size='sm' onClick={this.check}>B♭</Button>
        </div>
        <hr/>
        <div>
          <Form>
            <Form.Check onClick={this.useSharp} type="switch" label="Enable Sharp Note" />
            <Form.Check onClick={this.useFlat} type="switch" label="Enable Flat Note" />
          </Form>
        </div>
        <div>
        <div>
            Upper Bound:
            <button disabled={this.state.upperUpBtnDisabled} onClick={this.upperBoundPlus} style={{margin:"10px"}}className="btn btn-dark btn-sm">UP</button>
            <button disabled={this.state.upperDownBtnDisabled} onClick={this.upperBoundMinus} className="btn btn-dark btn-sm">DOWN</button>
        </div>
        <div>
            Lower Bound:
            <button disabled={this.state.lowerUpBtnDisabled} onClick={this.lowerBoundPlus} style={{margin:"10px"}}className="btn btn-dark btn-sm">UP</button>
            <button disabled={this.state.lowerDownBtnDisabled} onClick={this.lowerBoundMinus} className="btn btn-dark btn-sm">DOWN</button>
        </div>
        </div>

        <span id="bound">        
        </span>
      </div>
    )
  }
}
