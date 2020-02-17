import React, {Component} from 'react'
import './FilterPrintType.css'

export default class FilterPrintType extends Component{


    render(){
        return(
            <div className="print-type-div">
                <legend className="form-field"> Print Type: </legend>
                <select 
                    className="print-type" 
                    value={this.props.printType} 
                    onChange={e=> this.props.handleChangePrintType(e.target.value)
                    }
                >
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magaziness</option>
                </select>
            </div>
        )
    }
}