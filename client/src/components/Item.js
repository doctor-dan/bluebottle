import React from 'react';
const List = ({item}) =>
    <tr className="single-list" key={item.id}>
        <td>{item.sku}</td>
        <td>{item.name}</td>
		<td>{item.cost}</td>
    </tr>
export default List;
