import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
// import Header from './Components/Header'
// import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import books from './Components/data.js'



class App extends Component {
  constructor() {
    super();

    this.state = {
      books:[],
      shelf:[],
    }

  }

  render() {
    const mappedBooks = this.state.books.map((element) => {
      return <BookList books={element} key={element.id} />
    })
    return mappedBooks
  }

}

export default App



