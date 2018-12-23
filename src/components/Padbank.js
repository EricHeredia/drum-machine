import React from 'react'
import Drumpad from './Drumpad'
import './padbank.css'

class Padbank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const bankMap = this.props.currentBank.map((pad, i) =>
      <Drumpad
        key={i}
        keyCode={pad.keyCode}
        keyTrigger={pad.keyTrigger}
        id={pad.id}
        url={pad.url}
        changeDisplayCB={this.props.changeDisplayCB}
        />
      )
    return (
      <div id="padBank">
        {bankMap}
      </div>
    )
  }
}

export default Padbank