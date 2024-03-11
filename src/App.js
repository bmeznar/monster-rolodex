// import { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    let searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  }

  useEffect(() => {
    let filteredArray = monsters.filter((element) => {
      return element.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredArray);
  }, [monsters, searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1 className='app-header'>Monster-Rolodex</h1>
      <SearchBox 
        onChangeHandler = {onSearchChange} 
        placeholder = 'Search monsters...' 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
  
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       search_string: ""
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//           return {monsters: users}
//       }));
//   }

//   on_search_change = (event) => {
//     let search_string = event.target.value.toLowerCase()
//     this.setState(() => {
//       return {search_string: search_string}
//     });
//   }

//   render() {
//     const { monsters, search_string } = this.state;
//     const { on_search_change } = this;

//     const filtered_monsters = monsters.filter( 
//       (element) => {return(
//         element.name.toLowerCase().includes(search_string)
//       )}
//     );

//     return (
//       <div className="App">
//         <h1 className='app-header'>Monster-Rolodex</h1>
//         <SearchBox 
//           onChangeHandler = {on_search_change} 
//           placeholder = 'Search monsters...' 
//         />
//         <CardList monsters={filtered_monsters} />
//       </div>
//     );
//   }
// }

export default App;
