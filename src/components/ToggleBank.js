import React from 'react'
import './togglebank.css'

class ToggleBank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id='toggleContainer'>
        <h2>{this.props.bankDisplay}</h2>
        <label className='bankSwitch'>
          <input
            type='checkbox'
            checked={this.props.isChecked}
            onChange={this.props.bankToggleCB}
          />
          <span className='slider' />
        </label>
      </div>
    )
  }
}

export default ToggleBank