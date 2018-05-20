import React from 'react';

import './title-card.css';

class TitleCard extends React.Component {

  render() {
    return (
      <div className="hero">
        <h1 className="tome-title">Tome</h1>
        <p className="tagline">What do you want to read next?</p>
      </div>
    );
  }
}

export default TitleCard;


