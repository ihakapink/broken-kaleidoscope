import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '90px',
        width: '90px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = evt => {
    this.setState({
      style: {
        height: '90px',
        width: '90px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onClick={this.clickHandler}></div>
    )
  }
}

export default Pixel
