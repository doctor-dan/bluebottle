import React from 'react';
import {Button} from 'react-bootstrap';

const Category = ({category, editingCategory=f=>f}) =>
    <tr key={category.id}><td>
    <Button bsStyle='link' onClick={() => editingCategory(category.id)}>{category.name}</Button>
    </td></tr>;
export default Category