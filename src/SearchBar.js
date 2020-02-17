import React, {Component} from 'react'
import './SearchBar.css'

export default class SearchBar extends Component{

    render(){
        return(
            <div className="search-bar">
                <legend className="form-field"> Search: </legend>
                <input 
                    type="text" 
                    placeholder="henry" 
                    onChange={e => this.props.handleChangeQuery(e.target.value)}/>  
                <button type="submit">Search</button>
            </div>
        )
    }
}