import React, { Component } from 'react'
import axios from 'axios';
class ItemsContainer extends Component {
  constructor(props){
        super(props)
        this.state = {
            Categories: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/items')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
  render() {
    return (
      <div>
        Lists
      </div>
    )
  }
}

export default ItemsContainer
