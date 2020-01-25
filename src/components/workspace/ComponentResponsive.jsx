import React from 'react';
import ComponentHeader from './ComponentHeader';
import { Icon, Responsive, Button } from 'semantic-ui-react';


class ComponentResponsive extends React.Component {

  render() {
    if (this.props.open) {
      return (
        <div>
          <ComponentHeader
            componentIcon={this.props.componentIcon}
            componentName={this.props.componentName}
            gridName={this.props.gridName}
            handleExpandClose={this.props.handleExpandClose}
          >
          </ComponentHeader>
          {this.props.componentBody}
        </div>
      );
    } else {
      return (
        <div>
          <Responsive {...Responsive.onlyMobile}>
            <ComponentHeader
              componentIcon={this.props.componentIcon}
              componentName={this.props.componentName}
              gridName={this.props.gridName}
              handleExpandClose={this.props.handleExpandClose}
            >
            </ComponentHeader>
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Button 
              icon fluid
              style={{height:"105.4vh", borderRight:"1px solid white", borderRadius:"0px"}}
              onClick={() => this.props.handleExpandClose(this.props.gridName)}
              >
              <Icon name="expand" />
            </Button>
          </Responsive>
        </div>
      );
    }
  }
}

export default ComponentResponsive;
