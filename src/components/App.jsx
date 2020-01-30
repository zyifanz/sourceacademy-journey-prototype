import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Responsive } from 'semantic-ui-react'
import NavBar from './navbar/Navbar';
import Playground from './playground/Playground';
import Home from './Home';
import EditorContext from '../context/EditorContext';


const editorThemes = ["monokai", "github", "solarized_dark", "solarized_light", "tomorrow_night", "xcode"]
const editorFontSizes = [12, 13, 14, 15, 16, 17, 18, 19, 20]


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editorTheme: "monokai",
      editorFontSize: 16      
    }

    this.changeEditorTheme = this.changeEditorTheme.bind(this);
    this.changeEditorFontSize = this.changeEditorFontSize.bind(this);
  }

  changeEditorTheme(theme) {
    this.setState({editorTheme: theme});
  }

  changeEditorFontSize(fontSize) {
    this.setState({editorFontSize: fontSize});
  }
  
  render() {
    const editorContextValue = {
      editorTheme: this.state.editorTheme,
      editorFontSize: this.state.editorFontSize,
      availThemes: editorThemes,
      availFontSizes: editorFontSizes,
      changeEditorTheme: this.changeEditorTheme,
      changeEditorFontSize: this.changeEditorFontSize
    }

    const routesComponents = (
      <Responsive style={{ marginTop: "5vh" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <EditorContext.Provider value={editorContextValue} >
            <Route path="/playground">
              <Playground />
            </Route>
            </EditorContext.Provider>
        </Switch>
      </Responsive>
    )

    return (
      <Router>
        <NavBar routesComponents={routesComponents} />   
      </Router>
    )
  }
}

export default App;
