import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ToolkitsNav from "./ToolkitsNav"

class Toolkits extends Component {

  constructor(props) {
    super(props);
    this.state = { activeToolkit: 'Terminal' }
  }

  changeActiveToolkit = (e, { name }) => this.setState({ activeToolkit: name })

  render() {
    const { activeToolkit } = this.state

    return (
      <div>
        <ToolkitsNav 
          activeToolkit={this.state.activeToolkit}
          changeActiveToolkit={this.changeActiveToolkit}
        />

        <Segment attached='bottom' style = {{height:"100vh"}}>

        </Segment>
      </div>
    )
  }
}

export default Toolkits;