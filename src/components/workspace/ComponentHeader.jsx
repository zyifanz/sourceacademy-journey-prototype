import React from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';


class ComponentHeader extends React.Component {

  render() {
    return (
      <Header attached="top" style={{margin: "0px", borderRadius:"0px"}}>
        <Grid>
          <Grid.Column width={14} floated="left">
          {this.props.children}
          </Grid.Column>
          <Grid.Column width={2} floated="right">
          <Icon name="close" />
          </Grid.Column>
        </Grid>
      </Header>
    )
  }
}

export default ComponentHeader;
