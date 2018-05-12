import React, { Component } from 'react'
import { Row, Col, Nav, NavDropdown, MenuItem, Tab } from 'react-bootstrap';
import AdminContainer from './AdminContainer'

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={12}>
      <Nav bsStyle="tabs">
        <AdminContainer />
        <NavDropdown eventKey="2" title="Show Menu" id="nav-dropdown-within-tab">
          <MenuItem eventKey="2.1">USA</MenuItem>
          <MenuItem eventKey="2.2">Japan</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey="3" title="Modify Price" id="nav-dropdown-within-tab">
          <MenuItem eventKey="3.1">By Category</MenuItem>
          <MenuItem eventKey="3.2">By SKU / Country</MenuItem>
        </NavDropdown>
      </Nav>
    </Col>
    <Col sm={12}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">Administrative Control</Tab.Pane>
        <Tab.Pane eventKey="2">Show Menu</Tab.Pane>
        <Tab.Pane eventKey="2.1">USA Menu</Tab.Pane>
        <Tab.Pane eventKey="2.2">Japan Menu</Tab.Pane>
        <Tab.Pane eventKey="3.1">Modify by Category</Tab.Pane>
        <Tab.Pane eventKey="3.2">Modify by SKU/Country</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    );
  }
}

export default ControlledTabs