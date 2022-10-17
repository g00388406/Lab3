import React from "react";

export class Create extends React.Component {

    constructor(){
        
        //invoking parents constructor
        super();

        //binding different events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        //updating the states and making them equal to empty strings
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    //method for submitting the form. Takes an event as an argument
    handleSubmit(e){
        e.preventDefault();
        console.log(`button cliked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
    }

    //invoked when value is changed to update the state
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    //invoked when value is changed to update the state
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    //invoked when value is changed to update the state
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    //creating a form to display and alter information
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-title">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-cover">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-author">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.URL}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }

}