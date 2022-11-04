import React from 'react';
import Card from '../card/card';
import { IPhoto } from '../../interfaces/photo';

import './cards.css';

interface CardsProps {
  data: IPhoto[];
}

class Cards extends React.Component<CardsProps, unknown> {
  constructor(props: CardsProps) {
    super(props);
  }

  render = () => {
    return (
      <div className="cards">
        {this.props.data.map((item, index) => (
          <Card key={`card${index}`} {...item} />
        ))}
      </div>
    );
  };
}

export default Cards;
