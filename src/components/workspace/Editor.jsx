import React from 'react';
import AceEditor from 'react-ace';
import { Header, Responsive, Icon, Grid, Dropdown } from 'semantic-ui-react';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";


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
      <Responsive style={{paddingTop:"2.5vh", backgroundColor:"#263238"}}>
        <Grid style={{paddingBottom:"2vh"}}>
          <Grid.Column width={10}>
          <Header style={{paddingLeft:"1em"}} inverted floated="left"><Icon name="edit"/>
          Editor
          </Header>  
          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4" >Font size: 
            <Dropdown item text={this.state.fontSize.toString()} style={{paddingLeft:"6px"}}>
              <Dropdown.Menu>
                {fontSizes.map(size => {
                  return (
                    <Dropdown.Item onClick={() => this.updateFontSize(size)} key={size}>
                      {size.toString()}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            </Header>
          </Grid.Column>
        </Grid>
        <AceEditor
          mode="javascript"
          theme="monokai"
          height="100vh"
          width="inherit"
          fontSize={this.state.fontSize}
          value={this.props.currentProgram}
          onChange={this.props.updateProgram}
        />   
      </Responsive>
    )
  }
}

export default Editor;
