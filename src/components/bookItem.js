import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class BookItem extends React.Component{

    //rendering the books information
    //adding the books information to cards to display them neatly
    render(){
        return(
            <div>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl}></img>
                <p>{this.props.book.authors[0]}</p> */}

                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.book.title}</ListGroup.Item>
                        <ListGroup.Item><img src={this.props.book.thumbnailUrl}></img></ListGroup.Item>
                        <ListGroup.Item>{this.props.book.authors[0]}</ListGroup.Item>
                    </ListGroup>
                    </Card>
            </div>
        )
    }

}