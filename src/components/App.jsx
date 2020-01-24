import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Responsive } from 'semantic-ui-react'
import NavBar from './navbar/Navbar';
import Playground from './playground/Playground';


class App extends React.Component {
  
  render() {
    const routesComponents = (
      <Responsive style={{ marginTop: "5vh" }}>
        <Switch>
          <Route path="/playground">
            <Playground />
          </Route>
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
