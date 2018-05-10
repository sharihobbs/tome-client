import React from 'react';

import './reading-list.css';
import '../grid.css';

export default function ReadingList() {
  return (
    <div className="row">
      <h1>Reading List</h1>
      <div className="col-4">
        <div className="book">
          <div className="upper-wrapper">
            <div className="img-container">
              <img src="https://books.google.com/books/content?id=ifw8KUHGkpAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE738Ot2WR7T97knOMXSRVCNscs9TInKrncF8Sz4UbXO9PC5MmV9rAiPz8lbAMwC_822nQjv14Un2kGK_fI0iYofsDEJimHrKLYhAp0Cl28xsK29EeXNxZVjipHNkoQ7qPrNAnaV9" className="thumbnail" alt="book image"></img>
            </div>
            <p className="title">Rockabye: From Wild to Child</p>
            <p className="author">Rebecca Woolf</p>
            <p className="isbn">ISBN: 9780786750504</p>
          </div>
          <div className="note-wrapper">
            <label htmlFor="note" className="note-label">Note:</label>
            <textarea rows="4" maxLength="140" className="note">Joy said I would love this - all about parenting. 1/18/17</textarea>
            <div className="btn-wrapper">
              <button className="edit-note">Edit Note</button>
              <button className="read">Mark Read</button>
              <button className="delete">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="book">
          <div className="upper-wrapper">
            <div className="img-container">
              <img src="https://books.google.com/books/content?id=FxapBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72R6vP1qq3QOzJbSDnoMJB6APggced67KqkyAq7-B4ZG2PkyI3jNCnJdG8c_87YeV0r_zfD-pjbuvTa7A6k8DjYoqtWRHEbpZPPywRoJ1Pk1NogHP7Nk9aGczabxYjYqyQ7KZqu" className="thumbnail" alt="book image"></img>
            </div>
            <p className="title">Vivian Maier: Street Photographer</p>
            <p className="author">John Maloof</p>
            <p className="isbn">ISBN: 9781576876336</p>
          </div>
          <div className="note-wrapper">
            <label htmlFor="note" className="note-label">Note:</label>
            <textarea rows="4" maxLength="140" className="note">Saw a documentary about this. Possible gift for Tom.</textarea>
            <div className="btn-wrapper">
              <button className="edit-note">Edit Note</button>
              <button className="read">Mark Read</button>
              <button className="delete">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="book">
          <div className="upper-wrapper">
            <div className="img-container">
              <img src="https://books.google.com/books/content?id=Nbj9CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70M2P7ULCmeHodM79KCL-SAr_M4eia8WWbe6c6Hf-3NJeu-mOHXEU6cPzkV2MjefiNo7T9Pq1LTFzozSKK1tqwPlqcxPA8mwiqW7iH4dYRQCv9hpANkiwlXDtTkSnRlzjtHXguS" className="thumbnail" alt="book image"></img>
            </div>
            <p className="title">Till We Have Faces: A Myth Retold</p>
            <p className="author">C. S. Lewis</p>
            <p className="isbn">ISBN: 9780062565426</p>
          </div>
          <div className="note-wrapper">
            <label htmlFor="note" className="note-label">Note:</label>
            <textarea rows="4"maxLength="140" className="note">Get for class next semester - need it by June 5th.</textarea>
            <div className="btn-wrapper">
              <button className="edit-note">Edit Note</button>
              <button className="read">Mark Read</button>
              <button className="delete">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
