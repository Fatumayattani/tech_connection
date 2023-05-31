const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Initialize Express app
const app = express();

// Configure passport.js for authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Add your authentication logic here
  }
));

// Configure routes
app.get('/', (req, res) => {
  res.send('Welcome to Tech Connection!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

