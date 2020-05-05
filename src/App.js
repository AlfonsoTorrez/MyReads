import React from 'react'
import Library from './Library.js'
import AddBook from './AddBook.js'
import {Route} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/'render= {() => (
          <Library/>
        )} />
        <Route exact path='/add'render= {() => (
          <AddBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
