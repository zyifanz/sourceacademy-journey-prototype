import React from 'react';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Toolkits from './Toolkits';
import UserGuide from './UserGuide';
import { Grid } from 'semantic-ui-react';


class Workspace extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeLibs: props.defaultLibs, 
      activeProgLang: props.defaultProgLang,
      currentProgram: props.preloadedProg
    };
    this.runProgram = this.runProgram.bind(this);
    this.updateProgram = this.updateProgram.bind(this);
    this.updateActiveLibs = this.updateActiveLibs.bind(this);
    this.updateActiveProgLang = this.updateActiveProgLang.bind(this);
  }

  runProgram() {
    // run the program and retrieve an output
    console.log("Run program");
    console.log(this.state.activeLibs);
    console.log(this.state.activeProgLang);
    console.log(this.state.currentProgram);
    this.setState({currentProgram: ""});
  }

  updateProgram(programString, event) {
    this.setState({currentProgram: programString});
  }

  updateActiveLibs(libs) {
    this.setState({activeLibs: libs});
  }

  updateActiveProgLang(progLang) {
    this.setState({activeProgLang: progLang});
  }

  render() {
    return (
      <div>
        <Toolbar
          runProgram={this.runProgram}
          updateActiveLibs={this.updateActiveLibs}
          updateActiveProgLang={this.updateActiveProgLang}
          activeLibs={this.state.activeLibs}
          activeProgLang={this.state.activeProgLang}
          availLibs={this.props.availLibs}
          availProgLangs={this.props.availProgLangs}
        />
        <Grid stackable columns={3}>
          <Grid.Column style={{padding: "0px"}}>
            <UserGuide userGuideContent={this.props.userGuideContent} />
          </Grid.Column>
          <Grid.Column style={{padding: "0px"}}>
            <Editor
              currentProgram={this.state.currentProgram}
              updateProgram={this.updateProgram}
            />    
          </Grid.Column>
          <Grid.Column style={{padding: "0px"}}>
            <Toolkits />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Workspace;
