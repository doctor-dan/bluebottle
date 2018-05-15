import React, {Component} from 'react'
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import Item from "./Item";
import UpdateCategoryContainer from "./UpdateCategoryContainer";
import EditItemForm from "./EditItemForm"
// TODO: Show/hide category changer
// TODO: Edit item price
class MainContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: [],
            country: 'USD',
            editingItemId: null
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.editingItem = this.editingItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        axios.get('/api/v1/items')
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

    handleCategoryChange(newItems) {
        this.setState({items: newItems});
    }
    handleReset() {
        alert(`Resetting Database`);
        axios.put('/api/v1/admin')
            .then(response => {
                console.log(response);
                const items = response.data;
                this.setState(() => ({
                    items: items
                }))
            })
            .catch(error => console.log(error));

    }
    editingItem(id) {
        this.setState({
            editingItemId: id
        })
    }

    editItem(id, sku, name, price, currency) {
        console.log('Sending id: ' + id);
        console.log('Sending price:' + price);
        axios.put('/api/v1/items/' + id, {
            price: price
        })
            .then(response => {
                console.log(response.data);
                const items = this.state.items;
                const index = items.findIndex(function (obj) { return obj.id === id; });
                items[index] = response.data;
                this.setState(() => ({
                    items,
                    editingItemId: null
                }))
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="main-container">
                <h3>Click on any item to adjust the price</h3>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>SKU</th><th>NAME</th><th>PRICE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.filter((item) => item.currency === this.state.country)
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(item => {
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
                        if (this.state.editingItemId === item.id) {
                            console.log('editingItemId: ' + item.id)
                            return (<EditItemForm
                                item={item}
                                key={item.id}
                                editItem={this.editItem}
                            />)
                        }
                        else {
                            return (<Item item={item} key={item.id} editingItem={this.editingItem}/>)
                        }
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
                    <UpdateCategoryContainer
                        categories={this.state.categories}
                        onCategoryUpdate = {this.handleCategoryChange}
                        show={this.state.show}/>
                </div>
            </div>

        );
    }
}

export default MainContainer
