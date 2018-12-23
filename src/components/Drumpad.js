import React from 'react'
import './drumpad.css'

class Drumpad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.playSound = this.playSound.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.buttonTrigger = this.buttonTrigger.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.buttonTrigger()
      }
  }

  buttonTrigger(e) {
    const button = document.getElementById(this.props.id)
    this.playSound()
    button.style.backgroundColor = '#2196F3'
    setTimeout(function(){
      button.style.backgroundColor = 'lightgrey'
    }, 100
    )
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger)
    sound.currentTime = 0
    sound.play()
    this.props.changeDisplayCB(this.props.id)
  }

  render() {
    return (
      <div 
        onClick={this.buttonTrigger}
        id={this.props.id}
        className='drum-pad'
      >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.url}>
        </audio>
        {this.props.keyTrigger}
      </div>
    )
  }
}

export default Drumpad