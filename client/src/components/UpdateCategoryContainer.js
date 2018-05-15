import React, {Component} from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap';
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
        axios.put('/api/v1/categories/' + id, {
            modify_price: modprice,
            id: id
        })
            .then(response => {
                console.log(response);
                const categories = this.state.categories;
                const items = response.data;
                this.props.onCategoryUpdate(items);
                this.setState(() => ({
                    categories: categories,
                    items: items,
                    editingCategoryId: null
                }))
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get('/api/v1/categories')
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

                    <Table className="show-grid">
                        <thead>
                        <tr>
                            <th>
                                Category
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.categories.map(category => {
                            if (this.state.editingCategoryId === category.id) {
                                return (<EditCategoryForm
                                    category={category}
                                    key={category.name}
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
                        </tbody>
                    </Table>

                </div>
            )
        } else {
            return (null)
        }
    }
}

export default UpdateCategoryContainer;