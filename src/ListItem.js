import React, {Component} from 'react'
import './ListItem.css'

export default class ListItem extends Component{
    render(){       

        const book = this.props.item;
        const bookDescription = book.volumeInfo;
        const altDesc = "Book cover picture for"+book.title;
        const saleability = book.saleInfo.saleability;
        const price = calculatePrice(saleability);
        
        const authArr = bookDescription.authors;
        const authors = separateAuthors(authArr)

        function calculatePrice(saleability){
            if (saleability === "FOR_SALE_AND_RETAIL"|| saleability === "FOR_SALE"){
                return '$'+book.saleInfo.retailPrice.amount
            }
            else if(saleability ==="NOT_FOR_SALE"){
                return "Not for sale"
            }
            else if (saleability === "FREE"){
                return "Free"
            }
        }

        function separateAuthors(authArr){
            if (authArr === undefined){
                return "none"
            }
            else if(authArr.length === 1){
                return authArr[0]
            }
            else {
                return authArr.join(', ')
            }
        }

        return(              
            <li className="list-item" key={this.props.key}>
                <img src= {bookDescription.imageLinks.smallThumbnail} alt={altDesc}/>
                <div className="book-info">
                    <h2>{bookDescription.title}</h2>
                    <p>{authors}</p>
                    <p>{price}</p>
                    <p>{bookDescription.description}</p>
                </div>
            </li>
        )
    }
}