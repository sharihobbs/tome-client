require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3000,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    'https://quiet-springs-62758.herokuapp.com'
};
