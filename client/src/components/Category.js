import React from 'react';

const Category = ({category, editingCategory=f=>f}) =>
    <tr key={category.id}><td>{category.name}
    <button onClick={() => editingCategory(category.id)}>Edit</button></td></tr>
export default Category