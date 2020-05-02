import React from 'react'
import ShelfOptions from './ShelfOptions'

class SearchDisplay extends React.Component{

  componentDidMount() {
    this.props.books.map((book) => (
      book.shelf = 'none'
    ))
  }

  render(){
    const books = this.props.books

    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {
          books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <img className="book-cover" src={book.imageLinks.thumbnail} alt={book.title}/>
                  <ShelfOptions shelfType={book.shelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
              </div>
            </li>
          ))
        }
        </ol>
      </div>
    )
  }
}

export default SearchDisplay
