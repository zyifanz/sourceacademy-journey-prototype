import React from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';


class EditorSettings extends React.Component {

  render() {
    
    return (
      <Menu style={{ borderRadius:"0px", margin:"0px" }}>
        <Menu.Item header>
            <Icon name="settings"/>
        </Menu.Item>
        <Dropdown item text={this.props.fontSize.toString()}>
            <Dropdown.Menu>
            {this.props.fontSizes.map(size => {
                return (
                <Dropdown.Item onClick={() => this.props.updateFontSize(size)} key={size}>
                    {size}
                </Dropdown.Item>
                );
            })}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text={this.props.theme.replace("_", " ")}>
            <Dropdown.Menu>
            {this.props.themes.map(theme => {
                return (
                <Dropdown.Item onClick={() => this.props.updateTheme(theme)} key={theme}>
                    {theme.replace("_", " ")}
                </Dropdown.Item>
                );
            })}
            </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}

export default EditorSettings;
