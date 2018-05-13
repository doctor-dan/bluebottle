import React, {Component} from 'react'
import axios from 'axios';
import Item from './Item';
import UpdateCategoryPrices from './UpdateCategoryPrices'

import {Table, Button} from 'react-bootstrap';
import ItemClass from "./ItemClass";
// TODO: Pop a model on clicking an item to show form to update price
// TODO: Add Reset button
// TODO: Add Category Changer 
class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            country: 'USD'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/items')
            .then(response => {
                console.log(response)
                this.setState({
                    items: response.data
                })
            })
            .catch(error => console.log(error))

        axios.get('http://localhost:3001/categories')
            .then(response => {
                console.log(response)
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => console.log(error))
    }

    editList(id, modprice, action) {
        axios.put('http://localhost:3001/admin',
            {
                "id": id,
                "modprice": modprice,
                "action": action
            }
        )
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
    }

    handleClick = (c) => {
        const newState = {
            country: c
        };

        this.setState(newState);
        console.log('this is:', this);
        console.log('message', c);
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
                <div className="button-group">
                    <Button onClick={this.handleClick.bind(this, 'USD')}>Show USA menu</Button>
                    <Button onClick={this.handleClick.bind(this, 'JPY')}>Show Japan menu</Button>
                </div>
                <UpdateCategoryPrices categories={this.state.categories}  />
            </div>
        );
    }
}

export default MainContainer
