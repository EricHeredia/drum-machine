import React from 'react'
import './volumecontrol.css'

class VolumeControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div
        id='volumeContainer'
      >
        <input
          type='range'
          min='1'
          max='100'
          value={this.props.currentVolume}
          id='volRange'
          className='slider'
          onChange={this.props.adjustVolumeCB}
        />
        <p>Volume: {this.props.currentVolume}%</p>
      </div>
    )
  }
}

export default VolumeControl