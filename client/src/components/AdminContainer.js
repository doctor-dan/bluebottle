import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import axios from "axios/index";

class AdminContainer extends Component {

    handleShow() {
        alert(`Resetting Database`);
        axios.put('/api/v1/admin')
            .then(response => {
                console.log(response);

            })
            .catch(error => console.log(error));

    }

    render() {

        return (

            <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Reset All Prices from original data
                </Button>
            </div>
        )
    }
}

export default AdminContainer



