import React from 'react';
import { Table } from 'react-bootstrap';
const List = ({list}) =>
    <div className="single-list" key={list.id}>
<Table striped bordered condensed hover>
<tbody>
	<tr>
      <td>{list.sku}</td>
      <td>{list.name}</td>
      <td>{list.price}</td>
    </tr>
  </tbody>
</Table>;
    </div>
export default List;