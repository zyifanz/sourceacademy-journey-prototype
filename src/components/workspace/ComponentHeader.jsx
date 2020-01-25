import React from 'react';
import { Header, Icon, Grid, Button } from 'semantic-ui-react';


class ComponentHeader extends React.Component {

  render() {
    return (
      <Header attached="top" style={{margin: "0px", borderRadius:"0px"}}>
        <Grid>
          <Grid.Column width={14} floated="left">
            <Header as="h3"><Icon name={this.props.componentIcon}/>
              {this.props.componentName}          
            </Header>
          </Grid.Column>
          <Grid.Column width={2} floated="right">
            <Button fluid icon onClick={() => this.props.handleExpandClose(this.props.gridName)} >
              <Icon name="close"/>
            </Button>  
          </Grid.Column>
        </Grid>
      </Header>
    )
  }
}

export default ComponentHeader;
