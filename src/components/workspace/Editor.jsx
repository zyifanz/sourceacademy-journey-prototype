import React from 'react';
import AceEditor from 'react-ace';
import { Header, Icon } from 'semantic-ui-react';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import ComponentHeader from './ComponentHeader';


const fontSizes = [12, 13, 14, 15, 16, 17, 18, 19, 20];


class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fontSize: 16}
    this.updateFontSize = this.updateFontSize.bind(this);
  }

  updateFontSize(size) {
    this.setState({fontSize: size});
  }

  render() {
    
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
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
