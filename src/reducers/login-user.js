// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state (return state)

function loginUser(state = [], action) {
  console.log('logging in default user');
  console.log(state, action);
  return state;
}

export default loginUser;
