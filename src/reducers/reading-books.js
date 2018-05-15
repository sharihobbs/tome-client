// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state (return state)

function readingBooks(state = [], action) {
  console.log('changing the Reading List');
  console.log(state, action);
  return state;
}

export default readingBooks;
