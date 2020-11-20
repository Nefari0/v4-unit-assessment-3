import React, { Component } from 'react'
// import BookList from './BookList'
// import book from './data.json'

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
        }

    }

    render() {
        return (
            <div className="search-bar">
                <input/>
                <button className="button">search</button>
                <button className="button">clear search</button>
            </div>
        )
    }


}

export default SearchBar