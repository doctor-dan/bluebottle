import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class EditCategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.category.id,
            modprice: this.props.category.modprice

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, modprice } = this.state;
        this.props.editCategory(id, modprice);
    }
    render(){
        return(
            <Row><Col>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input  type="text"
                        value={this.state.modprice}
                        onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form></Col></Row>
        )
    }
}
export default EditCategoryForm;