import { Component } from "react";
//styles
import "./card-list.styles.css";
//components
import Card from "../card/card.components";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
