import React from 'react';
import { Header } from 'semantic-ui-react';


class UserGuide extends React.Component {

  render() {
    return (
      <div className="somePadding">
        <Header as="h3">{this.props.userGuideContent.title}</Header>
        <p>{this.props.userGuideContent.body}</p>
      </div>
    )
  }
}

export default UserGuide;
