import React, { Component } from 'react'
import axios from 'axios';
import Item from './Item';
import Button from './Button';
import {Table, ButtonGroup} from 'react-bootstrap';

class MainContainer extends Component {
  constructor(props){
        super(props)
        this.state = {
            items: [],
			country: 'USD'
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
	handleClick = (c) => {
		const newState = {
			country: c
		    };

		    this.setState(newState);
	    console.log('this is:', this);
		console.log('message', c);
	  }
	render() {
	        return (
	            <div className="main-container">
				<Table striped bordered condensed hover>
				<tbody>
	                {this.state.items.filter((item) => item.currency === this.state.country ).map( item => {
						if (item.currency === 'USD') {
						    item.cost = parseFloat(item.price).toLocaleString('en-US', {style: 'currency', currency: 'USD'})} 
							else {
							item.cost = parseFloat(item.price).toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
							}
	                    return (<Item item={item} key={item.id} />)
	                })}
					</tbody>
				</Table>
					<div className="button-group">
						<button onClick={this.handleClick.bind(this, 'USD')}>Show USA</button>
					 	<button onClick={this.handleClick.bind(this, 'JPY')}>Show Japan</button>
					</div>
	            </div>
	        );
	    }
}

export default MainContainer
