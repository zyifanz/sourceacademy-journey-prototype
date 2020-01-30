import React from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import EditorContext from '../../context/EditorContext';


class EditorSettings extends React.Component {

  render() {
    
    return (
      <Menu style={{ borderRadius:"0px", margin:"0px" }}>
        <Menu.Item header>
            <Icon name="settings"/>
        </Menu.Item>
        <Dropdown item text={this.context.editorFontSize.toString()}>
            <Dropdown.Menu>
            {this.context.availFontSizes.map(size => {
                return (
                <Dropdown.Item onClick={() => this.context.changeEditorFontSize(size)} key={size}>
                    {size}
                </Dropdown.Item>
                );
            })}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text={this.context.editorTheme.replace("_", " ")}>
            <Dropdown.Menu>
            {this.context.availThemes.map(theme => {
                return (
                <Dropdown.Item onClick={() => this.context.changeEditorTheme(theme)} key={theme}>
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
EditorSettings.contextType = EditorContext;

export default EditorSettings;
