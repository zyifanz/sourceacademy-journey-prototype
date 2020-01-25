import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark.js";
import "ace-builds/src-noconflict/theme-solarized_light.js";
import "ace-builds/src-noconflict/theme-tomorrow_night.js";
import "ace-builds/src-noconflict/theme-xcode.js";
import EditorSettings from './EditorSettings';


const fontSizes = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const themes = ["monokai", "github", "solarized_dark", "solarized_light", "tomorrow_night", "xcode"]


class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fontSize: 16, theme: themes[0]}
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
  }

  updateFontSize(size) {
    this.setState({fontSize: size});
  }

  updateTheme(theme) {
    this.setState({theme: theme});
  }

  render() {
    
    return (
      <div>
        <EditorSettings
          fontSizes={fontSizes}
          themes={themes}
          fontSize={this.state.fontSize}
          theme={this.state.theme}
          updateFontSize={this.updateFontSize}
          updateTheme={this.updateTheme}
        />
        <AceEditor
          mode="javascript"
          theme={this.state.theme}
          height="100vh"
          width="inherit"
          fontSize={this.state.fontSize}
          value={this.props.currentProgram}
          onChange={this.props.updateProgram}
        />   
      </div>
    )
  }
}

export default Editor;
