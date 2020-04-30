import React from 'react'
import Reading from './Reading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import { Link } from 'react-router-dom'

class Library extends React.Component{
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Reading />
          <WantToRead />
          <Read />
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
