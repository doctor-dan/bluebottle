import React, { Component } from 'react'
import { Row, Col, Nav, NavDropdown, MenuItem, Tab, NavItem} from 'react-bootstrap';
import AdminContainer from './AdminContainer'
import MainContainer from './MainContainer'
import UpdateCategoryContainer from "./UpdateCategoryContainer";

class ControlledTabs extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 2
        };
    }

    render() {
        return (
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="2.1">
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="1">Reset Pricing</NavItem>
                            <NavDropdown eventKey="2" title="Show Menu" id="nav-dropdown-within-tab">
                                <MenuItem eventKey="2.1">USA</MenuItem>
                                <MenuItem eventKey="2.2">Japan</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey="3">Update Category Pricing</NavItem>

                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="1"><AdminContainer /></Tab.Pane>
                            <Tab.Pane eventKey="2">Show Menu</Tab.Pane>
                            <Tab.Pane eventKey="2.1"><MainContainer country = 'USD'/></Tab.Pane>
                            <Tab.Pane eventKey="2.2"><MainContainer country = 'JPY'/></Tab.Pane>
                            <Tab.Pane eventKey="3"> <UpdateCategoryContainer/></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default ControlledTabs