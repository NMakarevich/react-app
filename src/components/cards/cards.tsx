import React from 'react';
import Card from '../card/card';
import { YoutubeResponse } from '../../interfaces/youtube-response';

import './cards.css';

class Cards extends React.Component<YoutubeResponse, unknown> {
  constructor(props: YoutubeResponse) {
    super(props);
  }

  render = () => {
    return (
      <div className="cards">
        {this.props.items.map((item, index) => (
          <Card key={`card${index}`} {...item} />
        ))}
      </div>
    );
  };
}

export default Cards;
