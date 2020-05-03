import React from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import SearchDisplay from './SearchDisplay'
import { UncontrolledAlert } from 'reactstrap';

class AddBook extends React.Component{

  state = {
    books: [],
    empty: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const value = serializeForm(e.target, { hash: true })
    BooksAPI.search(value.search)
      .then((books) => {
          if(books.error === "empty query"){
            this.setState(() => ({
              empty: true
            }))
          }
          else{
            books.forEach((book) =>
              book.shelf = "none"
            )
            this.setState(() => ({
              books,
              empty:false
            }))
          }
        })
  }

  updateBooks = (book,shelf) => {
    BooksAPI.update(book,shelf)
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <form onSubmit={this.handleSubmit}>
            <div className="search-books-input-wrapper">
              <input type="text" name='search' placeholder="Search by Genre"/>
            </div>
          </form>
        </div>
        {
          this.state.empty ?
              <div className="search-books-results">
                <UncontrolledAlert color="danger">
                  No books found with that keyword
                </UncontrolledAlert>
              </div>
            : <SearchDisplay books={this.state.books} updateBooks={this.updateBooks}/>
        }
      </div>
    )
  }
}

export default AddBook
