const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Sets the port to 3000 locally
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Set the correct path for the views dir
app.set('views', path.join(__dirname, 'views'));

// Set up the needed routes
const indexRoutes = require('./src/routes/index');
app.use('/', indexRoutes);

// Start the server on port 3009 which is locally
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
