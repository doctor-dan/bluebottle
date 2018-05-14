import React, {Component} from 'react'
import axios from 'axios';
import ReactTable from "react-table";

import {Table, Button} from 'react-bootstrap';
import ItemClass from "./ItemClass";
import UpdateCategoryContainer from "./UpdateCategoryContainer";
// TODO: Show/hide category changer
// TODO: Edit item price
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            country: 'USD',
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/items')
            .then(response => {
                console.log(response);
                this.setState({
                    items: response.data
                })
            })
            .catch(error => console.log(error))
    }

    handleClose() {
        this.setState({show: false});
    }

    handleFlag(f) {
        const newState = {
            country: f
        };
        this.setState(newState);

    }

    handleShow() {
        this.setState({show: true});
    }

    handleReset() {
        alert(`Resetting Database`);
        axios.put('http://localhost:3001/admin')
            .then(response => {
                console.log(response);
                const items = response.data;
                this.setState(() => ({
                    items: response.data
                }))
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="main-container">
                <h3>Click on any item to adjust the price</h3>
                <Table striped bordered condensed hover>
                    <tbody>
                    {this.state.items.filter((item) => item.currency === this.state.country).map(item => {
                        if (item.currency === 'USD') {
                            item.cost = parseFloat(item.price).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })
                        }
                        else {
                            item.cost = parseFloat(item.price).toLocaleString('ja-JP', {
                                style: 'currency',
                                currency: 'JPY'
                            })
                        }
                        return (<ItemClass item={item} key={item.id}/>)
                    })}
                    </tbody>
                </Table>
                <div className="flags">
                    <Button bsStyle="primary" onClick={this.handleFlag.bind(this, 'USD')}>
                        Show US Menu </Button>
                    <Button bsStyle="primary" onClick={this.handleFlag.bind(this, 'JPY')}>
                        Show Japanese Menu </Button>
                </div>
                <div className="well">
                    <Button bsStyle="warning" block onClick={this.handleReset}>
                        Reset All Prices from original data
                    </Button>
                    <Button bsStyle="primary"  block onClick={this.handleShow}>
                        Update Category Prices
                    </Button>
                    <UpdateCategoryContainer show={this.state.show}/>
                </div>
            </div>

        );
    }
}

export default MainContainer
