import React from 'react'
import Reading from './Reading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Library extends React.Component{
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

  checkUndefined(book){
    if(typeof book.imageLinks === 'undefined'){
      book.imageLinks = {thumbnail: "https://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
    }
    if(typeof book.authors === 'undefined'){
      book.authors = ["Unknown"]
    }
    return book
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Reading books={this.state.books} checkUndefined={this.checkUndefined}/>
          <WantToRead books={this.state.books} checkUndefined={this.checkUndefined}/>
          <Read books={this.state.books} checkUndefined={this.checkUndefined}/>
        </div>
        <Link
          className="open-search"
          to='/add'
        >
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}

export default Library
