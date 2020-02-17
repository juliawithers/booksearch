import React, {Component} from 'react'
import SearchBar from './SearchBar'
import FilterBars from './FilterBars'


export default class Form extends Component{


    render(){
        console.log(this.props)
        return(
            <form 
                onSubmit = {e => this.props.handleSubmitForm(e)}                 
                className="search-word">
                <SearchBar 
                    handleChangeQuery={this.props.handleChangeQuery}
                    filter={this.props.filter}
                    printType={this.props.printType}
                    query={this.props.query}
                    />
                
                <FilterBars 
                    handleChangePrintType={this.props.handleChangePrintType}
                    handleChangeBookType={this.props.handleChangeBookType}
                    filter={this.props.filter}
                    printType={this.props.printType}
                    query={this.props.query}
                />
            </form>
        )
    }
}