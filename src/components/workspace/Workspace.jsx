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
      currentProgram: props.preloadedProg,
      showGrids: {userGuide: true, editor: true, toolkits: true}
    };
    this.runProgram = this.runProgram.bind(this);
    this.updateProgram = this.updateProgram.bind(this);
    this.updateActiveLibs = this.updateActiveLibs.bind(this);
    this.updateActiveProgLang = this.updateActiveProgLang.bind(this);
    this.handleExpandClose = this.handleExpandClose.bind(this);
  }

  runProgram() {
    // run the program and retrieve an output
    console.log("Run program");
    console.log(this.state.activeLibs);
    console.log(this.state.activeProgLang);
    console.log(this.state.currentProgram);
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

  handleExpandClose(name) {
    const showGrids = this.state.showGrids;
    showGrids[name] = !showGrids[name];
    this.setState({showGrids: showGrids});
  }

  calcGridWith(name) {
    const numOpen = Object.values(this.state.showGrids).filter(x => x).length
    if (numOpen === 3) {
      return {};
    } else if (numOpen === 2) {
      return {width: this.state.showGrids[name] 
        ? this.state.showGrids["userGuide"]
          ? name === "userGuide" 
            ? 7
            : 8
          : name === "editor"
            ? 8
            : 7
        : 1};
    } else {
      return {width: this.state.showGrids[name] ? 14 : 1};
    }
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
          <Grid.Column className="gridNoPadding"
            {...this.calcGridWith("userGuide")}>
            <ComponentResponsive
              open={this.state.showGrids["userGuide"]}
              gridName="userGuide"
              componentName="Instructions"
              componentIcon="book"
              componentBody={UserGuideComponent}
              handleExpandClose={this.handleExpandClose}
            ></ComponentResponsive> 
          </Grid.Column>
          <Grid.Column className="gridNoPadding"
            {...this.calcGridWith("editor")}>
            <ComponentResponsive
              open={this.state.showGrids["editor"]}
              gridName="editor"
              componentName="Editor"
              componentIcon="edit"
              componentBody={EditorComponent}
              handleExpandClose={this.handleExpandClose}
            ></ComponentResponsive>
          </Grid.Column>
          <Grid.Column className="gridNoPadding"
            {...this.calcGridWith("toolkits")}>
            <ComponentResponsive
              open={this.state.showGrids["toolkits"]}
              gridName="toolkits"
              componentName="Toolkits"
              componentIcon="help"
              componentBody={ToolkitsComponent}
              handleExpandClose={this.handleExpandClose}
            ></ComponentResponsive>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Workspace;
