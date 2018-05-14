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
        this.props.callback
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
            <div>

                <Grid>
                    <Row className="show-grid">
                        <Col>
                           Category
                        </Col>
                    </Row>
                            {this.state.categories.map(cat => {
                                if ( this.state.editingCategoryId === cat.id ) {
                                    return (<EditCategoryForm
                                        category={cat}
                                        key={cat.id}
                                        editCategory={this.editCategory}
                                    />)
                                } else {
                                    return (<Category
                                            category={cat}
                                            key={cat.id}
                                            editingCategory={this.editingCategory}
                                        />

                                )}

                            })}

                </Grid>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Update Category Prices
                </Button>
                </div>
        );
    }
}
export default UpdateCategoryContainer;