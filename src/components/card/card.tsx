import React from 'react';
import { IPhoto } from '../../interfaces/photo';

import './card.css';

class Card extends React.Component<IPhoto, unknown> {
  constructor(props: IPhoto) {
    super(props);
  }

  render = () => {
    return (
      <div className="card">
        <img className="card-image" src={this.props.thumbnailUrl} alt={this.props.title} />
        <div className="card-info">
          <h2 className="card-title">{this.props.title}</h2>
        </div>
      </div>
    );
  };
}

export default Card;
