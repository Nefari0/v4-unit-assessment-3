import React, { Component } from 'react'
// import books from '../data.json'

const BookList = (props) => {

    return(
        <div className="book" key={props.books.id}>
            <h2>{props.books.title}</h2>
        </div>
    )

}

export default BookList