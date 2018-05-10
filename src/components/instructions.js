import React from 'react';

import './instructions.css';
import '../grid.css';

export default function Instructions() {
  return (
    <div className="row">
      <div className="col-4">
        <section className="card">
          <p>Say goodbye to crumpled sticky notes and guessing the title of the book your friend recommended two weeks ago... Use Tome to search for any book - in the moment!</p>
        </section>
      </div>
      <div className="col-4">
        <section className="card">
          <p>Click Save to add to your Reading List, make a note about the recommendation, and then use Tome as a reference on your next trip to the library or bookstore.</p>
        </section>
      </div>
      <div className="col-4">
        <section className="card">
          <p>Decide that this title isn't for you? No problem, you can easily delete books from your Reading List. Or if it was love at first page turn, mark it as read when done.</p>
        </section>
      </div>
    </div>
  )
}
