import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "Blaž"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}!
          </p>
          <button 
            onClick={() => {
              this.setState( (state, props) => {
                return ({name: "Janez"})
              },
              () => { // callback funkcija  se pokliče, po tem ko se setState nastavi
                console.log(this.state);
              });
            }
          }>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
