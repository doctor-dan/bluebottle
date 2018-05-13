import React, { Component } from 'react';
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
            <form onSubmit={this.handleSubmit}>
                <input  name="modprice"
                        type="number"
                        value={this.state.modprice}
                        onChange={this.handleChange} />
                <button>Update Category Pricing</button>
            </form>
        )
    }
}
export default EditCategoryForm;