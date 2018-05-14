import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap';

class ItemClass extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            show: false
        };
    }

    handleClick() {
        alert('You Clicked');
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <tr key={this.props.item.id} onClick = {this.handleClick}>
                <td>{this.props.item.sku}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.cost}</td>
            </tr>
        );
    }
}

export default ItemClass;