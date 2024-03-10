import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card.list.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      search_string: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {monsters: users}
      }));
  }

  on_search_change = (event) => {
    let search_string = event.target.value.toLowerCase()
    this.setState(() => {
      return {search_string: search_string}
    });
  }

  render() {
    const { monsters, search_string } = this.state;
    const { on_search_change } = this;

    const filtered_monsters = monsters.filter( 
      (element) => {return(
        element.name.toLowerCase().includes(search_string)
      )}
    );

    return (
      <div className="App">
        <input type="search" placeholder="Search monsters..." onChange={ on_search_change } />
        {/* {filtered_monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })} */}
        <CardList monsters={filtered_monsters} />
      </div>
    );
  }
}

export default App;
