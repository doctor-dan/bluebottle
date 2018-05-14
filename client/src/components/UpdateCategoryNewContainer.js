import React, { Component } from 'react'
import axios from 'axios';
import { NavItem } from 'react-bootstrap';

import {Modal, Table, Button} from 'react-bootstrap';
import EditCategoryForm from "./EditCategoryForm";
import Category from "./Category"

class UpdateCategoryNewContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.editingCategory = this.editingCategory.bind(this)
        this.editCategory = this.editCategory.bind(this)

        this.state = {
            show: false,
            categories: [],
            editingCategoryId: null
        };
    }

    editingCategory(id) {
        this.setState({
            editingCategoryId: id
        })
    }

    editCategory(id, modprice) {
        axios.post( 'http://localhost:3001/admin', {
            modify_price: modprice,
            id: id
        })
            .then(response => {
                console.log(response);
                const categories = this.state.categories;
                categories[id-1] = {id, modprice}
                this.setState(() => ({
                    categories,
                    editingCategoryId: null
                }))
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get('http://localhost:3001/categories')
            .then(response => {
                console.log('categories:',response)
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {

        return (
            <NavItem eventKey="3" >

                New Container
            </NavItem>
        );
    }
}
export default UpdateCategoryNewContainer;