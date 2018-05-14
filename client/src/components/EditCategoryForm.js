import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class EditCategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.category.id,
            modprice: 100

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
        const {id, modprice} = this.state;
        console.log('submitting id: ' + id);
        console.log('submitting modprice: ' + modprice);
        this.props.editCategory(id, modprice);
    }

    render() {
        return (
            <Row><Col>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Modify by this percentage:
                        <input name="modprice"
                               type="text"
                               defaultValue={this.state.modprice}
                             onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </Col></Row>
        )
    }
}

export default EditCategoryForm;