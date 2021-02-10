import React from "react";
import "./Card.css";

class Card extends React.Component {
  // this.props -> imgUrl, title, description
  render() {
    return (
      <div className="card__wrapper">
        <div className="card__img">
          <img src={this.props.imgUrl} alt="dog" />
        </div>
        <div className="card__content">
          <div className="card__title">{this.props.title}</div>
          <div className="card__description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
