import React, { Component } from 'react'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';

class ItemClass extends React.Component {
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
                //
                // <Modal show={this.state.show} onHide={this.handleClose}>
                //     <Modal.Header closeButton>
                //         <Modal.Title>Modal heading</Modal.Title>
                //     </Modal.Header>
                //     <Modal.Body>
                //         <h4>Text in a modal</h4>
                //         <p>
                //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                //         </p>
                //
                //         <hr/>
                //         <p>
                //             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                //             cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                //             dui. Donec ullamcorper nulla non metus auctor fringilla.
                //         </p>
                //     </Modal.Body>
                //     <Modal.Footer>
                //         <Button onClick={this.handleClose}>Close</Button>
                //     </Modal.Footer>
                // </Modal>
                        <tr className="single-list" key={this.props.item.id}>
                            <td>{this.props.item.sku}</td>
                            <td>{this.props.item.name}</td>
                            <td>{this.props.item.cost}</td>
                        </tr>
        );
    }
}
export default ItemClass;