import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component{

    //rendering the map function to operate arrays from parent components (bookitem)
    render(){
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book.isbn}></BookItem>
            }
        );
    }

}