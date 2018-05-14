import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Category = ({category, editingCategory=f=>f}) =>
    <Row key={category.id}><Col>{category.name}
    <button onClick={() => editingCategory(category.id)}>Edit</button></Col></Row>
export default Category