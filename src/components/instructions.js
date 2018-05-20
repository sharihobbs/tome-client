import React from 'react';
import TitleCard from './title-card';
import './instructions.css';
import '../grid.css';

class Instructions extends React.Component {

  render() {
    return (
      <div><TitleCard />
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
            <p>Change your mind about a book? You can easily remove books from your Reading List. Or if it was love at first page turn, you can remove it from your list after reading.</p>
          </section>
        </div>
      </div>
      </div>
    );
  }
}

export default Instructions;
