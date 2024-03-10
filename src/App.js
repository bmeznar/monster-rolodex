import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      },
      () => {
        console.log(this.state.monsters);
      }
      ));
  }

  on_search_change = (event) => {
    let search_string = event.target.value.toLowerCase()
    this.setState(() => {
      return {search_string: search_string}
    });
  }

  render() {
    const filtered_monsters = this.state.monsters.filter( 
      (element) => {return(
        element.name.toLowerCase().includes(this.state.search_string)
      )}
    );

    return (
      <div className="App">
        <input type="text" onChange={ this.on_search_change } />
        {filtered_monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
