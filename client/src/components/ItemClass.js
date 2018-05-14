import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap';

class ItemClass extends Component {
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
            <Row className="single-list" key={this.props.item.id}>
                <Col>{this.props.item.sku}</Col>
                <Col>{this.props.item.name}</Col>
                <Col>{this.props.item.cost}</Col>
            </Row>
        );
    }
}

export default ItemClass;