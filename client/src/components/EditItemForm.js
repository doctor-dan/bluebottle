import React, {Component} from 'react';
import Button from "./Button";

class EditItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.item.id,
            sku: this.props.item.sku,
            name: this.props.item.name,
            price: this.props.item.price,
            currency: this.props.item.currency

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange = (e) => {
        console.log("setting state: " + e.target.name + " value: " + e.target.value);
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {id, sku, name, price, currency} = this.state;
        console.log('submitting id: ' + id);
        console.log('submitting price: ' + price);
        this.props.editItem(id, sku, name, price, currency);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.sku}</td>
                <td><Button bsStyle='link'>{this.props.item.name}</Button></td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Change price of: {this.props.item.name}
                            <input name="price"
                                   type="text"
                                   defaultValue={this.state.price}
                                   onChange={this.handleChange}
                            />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </td>
            </tr>
        )
    }
}

export default EditItemForm;