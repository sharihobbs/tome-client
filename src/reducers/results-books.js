// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state (return state)

function resultsBooks(state = [], action) {
  console.log('changing the Results List');
  console.log(state, action);
  return state;
}

export default resultsBooks;
