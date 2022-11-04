import React from 'react';
import { ResponseItem } from '../../interfaces/response-item';

import './card.css';

class Card extends React.Component<ResponseItem, unknown> {
  constructor(props: ResponseItem) {
    super(props);
  }

  render = () => {
    return (
      <div className="card">
        <img
          className="card-image"
          src={this.props.snippet.thumbnails.default.url}
          alt={this.props.snippet.title}
        />
        <div className="card-info">
          <h2 className="card-title">{this.props.snippet.title}</h2>
        </div>
      </div>
    );
  };
}

export default Card;
