import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{

    //importing information using a url of data and assigning it to the books state
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=>{
            this.setState({books:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    //importing information about books through arrays of objects
    state ={
        books: []   
    }

    //rendering the read component information and displaying the book information from books.js
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }

}