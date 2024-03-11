import { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h1>{ name }</h1>
        <span>{ email }</span>
      </div>
    )
  }
}

export default Card;