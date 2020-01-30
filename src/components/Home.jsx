import React from 'react';
import { Container, Header, Button, Responsive } from 'semantic-ui-react'
import "./home.css"
import { Link } from 'react-router-dom';


class Home extends React.Component {
  
  render() {
    return (
      <Container textAlign="center">
        <div className="centerScreen">
          <Header as="h1">Welcome to Source Academy</Header>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Button.Group size="large">
              <Button as={Link} to="/playground">Try out the Playground</Button>
              <Button.Or />
              <Button>Login via Luminus</Button>
            </Button.Group>
          </Responsive>
          <Responsive {...Responsive.onlyMobile}>
            <Button.Group size="large" vertical>
              <Button as={Link} to="/playground" style={{borderBottom: "1px solid white"}}>Try out the Playground</Button>
              <Button>Login via Luminus</Button>
            </Button.Group>
          </Responsive>
        </div>
      </Container>
    )
  }
}

export default Home;
