// import { Component } from "react";
import './card-list.styles.css'

import Card from "../card/card.component";

const CardList = ({monsters}) => {
  return (
    <div className="list-wrapper">
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            monster={monster}
          />
        )   
      })}     
    </div>
  )
}

// class CardList extends Component {
//   render() {
//     const {monsters} = this.props
        
//     return (
//       <div className="list-wrapper">
//         {monsters.map((monster) => {
//           return (
//             <Card
//               key={monster.id}
//               monster={monster}
//             />
//           )   
//         })}     
//       </div>
//     )
//   }
// }

export default CardList;