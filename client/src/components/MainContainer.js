import React, { Component } from 'react'
import axios from 'axios';
import Item from './Item';
import {Table} from 'react-bootstrap';

class MainContainer extends Component {
  constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/items')
        .then(response => {
            console.log(response)
            this.setState({
                items: response.data
            })
        })
        .catch(error => console.log(error))
    }
	render() {
	        return (
	            <div className="lists-container">
				<Table>
				<tbody>
	                {this.state.items.map( item => {
	                    return (<Item item={item} key={item.id} />)
	                })}
					</tbody>
				</Table>
	            </div>
	        )
	    }
}

export default MainContainer
