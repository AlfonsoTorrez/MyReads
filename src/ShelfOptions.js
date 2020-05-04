import React from 'react'

class ShelfOptions extends React.Component{

  state = {
    shelfType: '',
    book: {},
  }

  componentDidMount(){
    this.setState(() => ({
      shelfType: this.props.shelfType
    }))
  }

  handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const {book,updateBooks} = this.props
    updateBooks(book,value)
  }

  renderSwitch(){
    switch(this.state.shelfType){
      case 'currentlyReading':
        return (
          <div className="book-shelf-changer" >
            <select value="currentlyReading" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      case 'wantToRead':
        return (
          <div className="book-shelf-changer">
            <select value="wantToRead" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      case 'read':
        return (
          <div className="book-shelf-changer">
            <select value="read" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      default:
        return (
          <div className="book-shelf-changer">
            <select defaultValue="move" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
  }

  render(){
    return(
      this.renderSwitch()
    )
  }
}

export default ShelfOptions
