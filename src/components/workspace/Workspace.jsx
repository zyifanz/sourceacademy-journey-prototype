import React from 'react';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Toolkits from './Toolkits';
import UserGuide from './UserGuide';
import { Grid } from 'semantic-ui-react';
import './workspace.css'
import ComponentResponsive from './ComponentResponsive';


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
    const UserGuideComponent = (
      <UserGuide userGuideContent={this.props.userGuideContent}></UserGuide>
    );
    const EditorComponent = (
      <Editor
        currentProgram={this.state.currentProgram}
        updateProgram={this.updateProgram}
      />
    );
    const ToolkitsComponent = (
      <Toolkits />
    );

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
        <Grid stackable columns={3} className="gridNoMargin">
          <Grid.Column className="gridNoPadding ">
            <ComponentResponsive
              componentName="Instructions"
              componentIcon="edit"
              componentBody={UserGuideComponent}
            ></ComponentResponsive> 
          </Grid.Column>
          <Grid.Column className="gridNoPadding">
            <ComponentResponsive
              componentName="Editor"
              componentIcon="edit"
              componentBody={EditorComponent}
            ></ComponentResponsive>
          </Grid.Column>
          <Grid.Column className="gridNoPadding">
            <ComponentResponsive
              componentName="Toolkits"
              componentIcon="help"
              componentBody={ToolkitsComponent}
            ></ComponentResponsive>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Workspace;
