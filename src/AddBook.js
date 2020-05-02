import React from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'
// import * as BooksAPI from './BooksAPI'

class AddBook extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const value = serializeForm(e.target, { hash: true })
    console.log("You search for:")
    console.log(value.search)
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
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" name='search' placeholder="Search by Genre"/>
            </div>
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default AddBook
