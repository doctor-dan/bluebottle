import React, { Component } from 'react'
import axios from 'axios';
import {Row, Col, Grid, Button} from 'react-bootstrap';
import EditCategoryForm from "./EditCategoryForm";
import Category from "./Category"

class UpdateCategoryContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.editingCategory = this.editingCategory.bind(this)
        this.editCategory = this.editCategory.bind(this)

        this.state = {
            show: false,
            categories: [],
            editingCategoryId: null
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    editingCategory(id) {
        this.setState({
            editingCategoryId: id
        })
    }

    editCategory(id, modprice) {
        console.log('Sending id: ' + id );
        console.log('Sending modprice:' + modprice);
        axios.put( 'http://localhost:3001/categories/'+ id, {
            modify_price: modprice,
            id: id
        })
            .then(response => {
                console.log(response);
                const categories = this.state.categories;
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
            <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Update Category Prices
                </Button>
                <Grid className="show-grid">
                    <Row>
                        <Col>
                           Category
                        </Col>
                    </Row>
                            {this.state.categories.map(category => {
                                if ( this.state.editingCategoryId === category.id ) {
                                    return (<EditCategoryForm
                                        category={category}
                                        key={category.id}
                                        editCategory={this.editCategory}
                                    />)
                                } else {
                                    return (<Category
                                            category={category}
                                            key={category.id}
                                            editingCategory={this.editingCategory}
                                        />

                                )}

                            })}

                </Grid>

                </div>
        );
    }
}
export default UpdateCategoryContainer;