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
        this.setState(() => ({
          books
        }))
      })
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Reading books={this.state.books}/>
          <WantToRead books={this.state.books}/>
          <Read books={this.state.books}/>
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
