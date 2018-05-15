import React from 'react';
import {Button} from 'react-bootstrap';
const Item = ({item, editingItem=f=>f}) =>
<tr key={item.id} >
    <td>{item.sku}</td>
    <td><Button bsStyle='link' onClick={() => editingItem(item.id)}>{item.name}</Button></td>
    <td>{item.cost}</td>
</tr>;
export default Item