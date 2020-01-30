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
import EditorContext from '../../context/EditorContext';


class Editor extends React.Component {

  render() {
    
    return (
      <div>
        <EditorSettings />
        <AceEditor
          mode="javascript"
          theme={this.context.editorTheme}
          height="100vh"
          width="inherit"
          fontSize={this.context.editorFontSize}
          value={this.props.currentProgram}
          onChange={this.props.updateProgram}
        />   
      </div>
    )
  }
}
Editor.contextType = EditorContext;

export default Editor;
