import React, { Component } from 'react'
import { Row, Col, Nav, NavDropdown, MenuItem, Tab } from 'react-bootstrap';
import AdminContainer from './AdminContainer'
import MainContainer from './MainContainer'
import UpdateCategoryContainer from "./UpdateCategoryContainer";

class ControlledTabs extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 2
        };
    }

    handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({ key });
    }

    render() {
        return (
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="2.1">
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <AdminContainer />
                            <NavDropdown eventKey="2" title="Show Menu" id="nav-dropdown-within-tab">
                                <MenuItem eventKey="2.1">USA</MenuItem>
                                <MenuItem eventKey="2.2">Japan</MenuItem>
                            </NavDropdown>
                           <UpdateCategoryContainer/>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="1">Administrative Control</Tab.Pane>
                            <Tab.Pane eventKey="2">Show Menu</Tab.Pane>
                            <Tab.Pane eventKey="2.1"><MainContainer country = 'USD'/></Tab.Pane>
                            <Tab.Pane eventKey="2.2"><MainContainer country = 'JPY'/></Tab.Pane>
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