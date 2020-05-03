import React from 'react'
import ShelfOptions from './ShelfOptions'

class SearchDisplay extends React.Component{

  render(){
    const { books,updateBooks } = this.props

    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {
          books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <img className="book-cover" src={book.imageLinks.thumbnail} alt={book.title}/>
                  <ShelfOptions book={book} shelfType="none" updateBooks={updateBooks}/>
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
