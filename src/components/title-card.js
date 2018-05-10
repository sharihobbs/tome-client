import React from 'react';
import Instructions from './instructions';

import './title-card.css';

export default function TitleCard() {
  return (
    <div className="inst-wrapper">
      <div className="hero">
        <h1 className="tome-title">Tome</h1>
        <p className="tagline">What do you want to read next?</p>
      </div>
      <Instructions />
    </div>
  )
}



