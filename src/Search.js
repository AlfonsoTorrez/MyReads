import React from 'react'
import {Link} from 'react-router-dom'
//import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import SearchDisplay from './SearchDisplay'
//import { UncontrolledAlert } from 'reactstrap';

class Search extends React.Component{
  //_isMounted = false;

  state = {
    books: [],
    emptyQuery: true,
  }

  // componentDidMount(){
  //   this._isMounted = true;
  // }

  //Show search results if query is correct
  handleSubmit = (e) => {
    e.preventDefault()
    //this._isMounted = true
    //const value = serializeForm(e.target, { hash: true })
    //console.log(this.x)
      BooksAPI.search(e.target.value)
        .then((books) => {
            if(typeof books === 'undefined' || books.error === "empty query"){
                this.setState(() => ({
                  books: [],
                  emptyQuery: true,
                }))
            }
            else{
                this.setState(() => ({
                  books,
                  emptyQuery: false,
                }))
            }
          })
  }
  // //Remove search display if input becomes empty
  // emptySearch = (e) => {
  //   if(e.target.value === ''){
  //     //console.log("hey")
  //     this.setState(_ => ({
  //       books: [],
  //       emptyQuery: true,
  //     }))
  //     return false
  //   }
  //   return true
  // }

  updateBooks = (book,shelf) => {
    BooksAPI.update(book,shelf)
  }

  // dealWithInput = (e) =>{
  //   if(this.emptySearch(e)){
  //       this.handleSubmit(e)
  //     }
  // }
  // componentWillUnmount(){
  //   this._isMounted = false;
  // }

  //TODO:: Work on Alert
  // <UncontrolledAlert color="danger">
  //   No books found with that keyword
  // </UncontrolledAlert>

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <form onChange={this.handleSubmit} >
            <div className="search-books-input-wrapper">
              <input type="text" name='search' placeholder="Search by Genre"/>
            </div>
          </form>
        </div>
        {
          this.state.empty?
              <div>
              </div>
            : <SearchDisplay
            books={this.state.books}
            updateBooks={this.updateBooks}
            />
        }
      </div>
    )
  }
}

export default Search
