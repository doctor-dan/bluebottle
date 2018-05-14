import React, {Component} from 'react'
import axios from 'axios';
import {Row, Col, Grid, Button} from 'react-bootstrap';
import EditCategoryForm from "./EditCategoryForm";
import Category from "./Category"

class UpdateCategoryContainer extends Component {
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
        console.log('Sending id: ' + id);
        console.log('Sending modprice:' + modprice);
        axios.put('http://localhost:3001/categories/' + id, {
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
                console.log('categories:', response)
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        if (this.props.show) {
            return (
                <div>

                    <Grid className="show-grid">
                        <Row>
                            <Col>
                                Category
                            </Col>
                        </Row>
                        {this.state.categories.map(category => {
                            if (this.state.editingCategoryId === category.id) {
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

                                )
                            }

                        })}

                    </Grid>

                </div>
            )
        } else {
            return (null)
        }
    }
}

export default UpdateCategoryContainer;