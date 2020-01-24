import React from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';


class UserGuide extends React.Component {

  render() {
    return (
      <Grid centered style={{paddingTop:"3vh", height:"100vh"}}>
        <Grid.Column width="14" centered>
        <Header as="h3"><Icon name="book"/>Instructions </Header>
        <hr></hr>
        <Header as="h3">{this.props.userGuideContent.title}</Header>
        <p>{this.props.userGuideContent.body}</p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default UserGuide;
