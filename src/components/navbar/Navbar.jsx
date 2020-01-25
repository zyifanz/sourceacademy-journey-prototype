import React from "react";
import {
  Icon,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import { Link } from "react-router-dom";


class NavBarMobile extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { sideBarVisible: false };
  }

  handlePusher = () => {
    if (this.state.sideBarVisible) this.setState({ sideBarVisible: false });
  };

  handleToggle = () => this.setState({ sideBarVisible: !this.state.sideBarVisible });

  render() {
    const { children, leftNavLinks, rightNavLinks, logo } = this.props;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.state.sideBarVisible}
          width="thin"
        >
        {leftNavLinks}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={this.state.sideBarVisible}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" inverted style={{ height: "5vh" }}>
            <Menu.Item onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            {logo}
            <Menu.Menu position="right">
              {rightNavLinks}
            </Menu.Menu>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }

}

class NavBarDesktop extends React.Component {
  render() {
    const { leftNavLinks, rightNavLinks, logo } = this.props;

    return (
      <Menu fixed="top" inverted style={{ height: "5vh" }}> 
        {logo}
        {leftNavLinks}
        <Menu.Menu position="right">
          {rightNavLinks}
        </Menu.Menu>
      </Menu>
    )
  }
}

class NavBar extends React.Component {

  render() {
    
    const logo = (
      <Menu.Item header as={Link} to="/">
        <Icon name="code"/>
        Source Academy
      </Menu.Item>
    )
    const leftNavLinks = [
      (<Menu.Item as="a" href="https://piazza.com/" target="_blank" key="forum">
        <Icon name="talk"/>
        Forum
      </Menu.Item>),
      (<Menu.Item as={Link} to='/playground' key="playground">
        <Icon name="play"/>
        Playground
      </Menu.Item>)
    ]
    const rightNavLinks = [
      (<Menu.Item as="a" to='/' key="login">
        <Icon name="user"/>
        Login
      </Menu.Item>)
    ]

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftNavLinks={leftNavLinks}
            rightNavLinks={rightNavLinks}
            logo={logo}
          >
            {this.props.routesComponents}
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            leftNavLinks={leftNavLinks}
            rightNavLinks={rightNavLinks} 
            logo={logo}
          />
          {this.props.routesComponents}
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
