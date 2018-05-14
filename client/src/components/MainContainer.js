import React, {Component} from 'react'
import axios from 'axios';
import ReactTable from "react-table";

import {Table, Button} from 'react-bootstrap';
import ItemClass from "./ItemClass";
// TODO: Pop a model on clicking an item to show form to update price
// TODO: Add Reset button
// TODO: Add Category Changer 
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            country: this.props.country,
        };
    }

    componentDidMount() {
        this.loadData()
    }
    loadData() {
        axios.get('http://localhost:3001/items')
            .then(response => {
                console.log(response);
                this.setState({
                    items: response.data
                })
            })
            .catch(error => console.log(error))
    }
    handleShow() {
        alert(`Resetting Database`);
        axios.put('http://localhost:3001/admin')
            .then(response => {
                console.log(response);
               this.loadData()
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
                <div>
                    <Button bsStyle="primary" onClick={this.handleShow}>
                        Reset All Prices from original data
                    </Button>
                </div>
            </div>

        );
    }
}

export default MainContainer
