import React from 'react';
import ComponentHeader from './ComponentHeader';
import { Header, Icon } from 'semantic-ui-react';


class ComponentResponsive extends React.Component {

  render() {
    return (
      <div>
        <ComponentHeader>
          <Header as="h3"><Icon name={this.props.componentIcon}/>
            {this.props.componentName}          
          </Header>
        </ComponentHeader>
        {this.props.componentBody}
      </div>
    )
  }
}

export default ComponentResponsive;
