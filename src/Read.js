import React from 'react'
import ShelfOptions from './ShelfOptions'


class Read extends React.Component{
  state = {
    books: [
      {
        image: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        shelfType: "Read"
      },
      {
        image: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
        title: "Oh, the Places You'll Go!",
        author: "Dr.Seuss",
        shelfType: "Read"
      },
      {
        image: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        shelfType: "Read"
      }
    ],
  };


  render(){
    return(

      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            this.state.books.map((book) => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                      <img className="book-cover" src={book.image} alt={book.title}/>
                      <ShelfOptions shelfType={book.shelfType}/>
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

export default Read
