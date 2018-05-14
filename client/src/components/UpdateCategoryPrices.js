import React, { Component } from 'react'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import EditCategoryForm from "./EditCategoryForm";

class UpdateCategoryPrices extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {

        return (
            <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Update Category Prices
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <table>
                            <thead>
                            <tr><th>Category</th></tr>
                            </thead>
                            <tbody>
                            <tr><td>Categorylist here</td></tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default UpdateCategoryPrices;