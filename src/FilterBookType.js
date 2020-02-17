import React, {Component} from 'react'
import './FilterBookType.css'

export default class FilterBookType extends Component{

    render(){
        return(
            <div className="book-type-div">
                <legend className="form-field"> Book Type: </legend>
                <select 
                    className="book-type" 
                    value={this.props.filter}
                    onChange={e => this.props.handleChangeBookType(e.target.value)
                    }
                >
                    <option value="">No filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free e-Books</option>
                    <option value="paid-ebooks">Paid e-Books</option>
                    <option value="ebooks">e-Books</option>
                </select>
            </div>
        )
    }
}