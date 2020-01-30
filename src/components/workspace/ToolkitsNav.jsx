import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ToolkitsNav extends Component {
  
  render() {

    const {
      availToolkits, 
      changeActiveToolkit
    } = this.props;

    return (
    <Menu attached='top' fluid widths={4}>
      <Menu.Item
      name='Terminal'
      active={this.props.activeToolkit === 'Terminal'}
      onClick={this.props.changeActiveToolkit}
      />
      <Menu.Item
      name='Substituter'
      active={this.props.activeToolkit === 'Substituter'}
      onClick={this.props.changeActiveToolkit}
      />
      <Menu.Item
      name='Data Visualizer'
      active={this.props.activeToolkit === 'DataVisualizer'}
      onClick={this.props.changeActiveToolkit}
      />
      <Menu.Item
      name='Env Visualizer'
      active={this.props.activeToolkit === 'EnvVisualizer'}
      onClick={this.props.changeActiveToolkit}
      />
    </Menu>
    )
  }
}

export default ToolkitsNav;