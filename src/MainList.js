import React, {Component} from 'react'
import ListItem from './ListItem'

export default class MainList extends Component{
    render(){  
        if (this.props.data === undefined){
            return(
                <div>

                </div>
            )
        }
        else if(this.props.data.totalItems === 0){
            return "There are no searches that match these criteria. Please try again."
        }
        else{
            const bookData = this.props.data.items;
            const books = bookData.map((item,i) => 
                <ListItem 
                    item={item} key={i}
                />)
            
            return(
                <ul>
                    {books}
                </ul>
            );
        }
    }
}

MainList.defaultProps={
    books: []
};
