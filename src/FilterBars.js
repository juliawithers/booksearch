import React, {Component} from 'react'
import FilterPrintType from './FilterPrintType'
import FilterBookType from './FilterBookType'
import './FilterBar.css'

export default class SearchBar extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="filters">
                <FilterPrintType 
                    handlePrintType={this.props.handlePrintType}
                    handleChangePrintType={this.props.handleChangePrintType}
                    handleChangeBookType={this.props.handleChangeBookType}
                    handleSearchBooks = {this.props.handleSearchBooks}
                    filter={this.props.filter}
                    printType={this.props.printType}
                    query={this.props.query}/>
                <FilterBookType 
                    handleBookType={this.props.handleBookType}
                    handleChangePrintType={this.props.handleChangePrintType}
                    handleChangeBookType={this.props.handleChangeBookType}
                    handleSearchBooks = {this.props.handleSearchBooks}
                    filter={this.props.filter}
                    printType={this.props.printType}
                    query={this.props.query}/>    
            </div>
        )
    }
}