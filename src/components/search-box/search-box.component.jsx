// import { Component } from 'react';
import './search-box.styles.css'

const SearchBox = ({placeholder, onChangeHandler}) => {
  return(
    <input 
      className="search"
      type="search" 
      placeholder={placeholder} 
      onChange={onChangeHandler} 
    />
  )
}

// class SearchBox extends Component {
//   render() {
//     return(
//       <input 
//         className="search"
//         type="search" 
//         placeholder={this.props.placeholder} 
//         onChange={ this.props.onChangeHandler } 
//       />
//     )
//   }
// }

export default SearchBox;