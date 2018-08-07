import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event =>
            this.handleInputChange(event.target.value)
          }
        />
      </div>
    )
  }

  handleInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
  // we want to set state with the new term
  // we also want to call the callback with the new term onSearchTermChange
}


export default SearchBar

// const SearchBar = () => {
//   return <input />
// }

// ^^ this is a functional (or dumb) component not a class component like the above which has the ability to keep track of what's happened to it, be more aware of itself, etc., and always have render method and return something or you'll get an error

// onChange is a special property in React that gives us access to the input as it changes
