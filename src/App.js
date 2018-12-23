import React, { Component } from 'react'
import Padbank from './components/Padbank'
import bankdata from './data/bankdata'
import VolumeControl from './components/VolumeControl'
import ToggleBank from './components/ToggleBank'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBank: bankdata.bankOne,
      bankDisplay: 'Bank One',
      toggleChecked: false,
      displayText: '',
      currentVolume: '50'
    }
    this.changeDisplay = this.changeDisplay.bind(this)
    this.adjustVolume = this.adjustVolume.bind(this)
    this.bankToggle = this.bankToggle.bind(this)
  }

  changeDisplay(e) {
    this.setState({displayText: e})
  }

  adjustVolume(e) {
    this.setState({currentVolume: e.target.value})
    let setVol = e.target.value / 100
    for (let pad in this.state.currentBank) {
      document.getElementById(this.state.currentBank[pad].keyTrigger).volume = setVol
    }
  }

  bankToggle() {
    if (this.state.currentBank === bankdata.bankOne) {
      this.setState({
        toggleChecked: true,
        currentBank: bankdata.bankTwo,
        bankDisplay: 'Bank Two'
      })
    } else {
      this.setState({
        toggleChecked: false,
        currentBank: bankdata.bankOne,
        bankDisplay: 'Bank One'
      })
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <Padbank 
          currentBank={this.state.currentBank}
          changeDisplayCB={this.changeDisplay}
        />
        <div id='controlsContainer'>
          <ToggleBank
            bankDisplay={this.state.bankDisplay}
            bankToggleCB={this.bankToggle}
            isChecked={this.state.toggleChecked}
          />
          <div id='displayContainer'>
            <h1 id='display'>{this.state.displayText}</h1>
          </div>
          <VolumeControl
            adjustVolumeCB={this.adjustVolume}
            currentVolume={this.state.currentVolume}
          />
        </div>
      </div>
    );
  }
}

export default App;
