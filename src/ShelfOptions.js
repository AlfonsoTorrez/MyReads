import React from 'react'

class ShelfOptions extends React.Component{

  state = {
    shelfType: '',
  }

  componentDidMount(){
    this.setState(() => ({
      shelfType: this.props.shelfType
    }))
  }

  renderSwitch(){
    switch(this.state.shelfType){
      case 'currentlyReading':
        return (
          <div className="book-shelf-changer">
            <select value="currentlyReading">
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
            <select value="wantToRead">
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
            <select value="read">
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
            <select defaultValue="none">
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
