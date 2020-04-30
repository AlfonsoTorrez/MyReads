import React from 'react'
import ShelfOptions from './ShelfOptions'

const shelfType = "Want";

class WantToRead extends React.Component{
  state = {
    books: [
      {
        image: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        title: "1776",
        author: "David McCullough"
      },
      {
        image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling"
      }
    ],
  }

  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            this.state.books.map((book) => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <img className="book-cover" src={book.image} alt={book.title}/>
                    <ShelfOptions shelfType={shelfType}/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
