// Import dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controller');

const app = express();
const PORT = process.env.PORT || 3001;

// Create handlebars.js engine object
const hbs = exphbs.create({});

// Register the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.use(routes);

// Start server
app.listen(PORT, () => console.log(`Now listening on localhost ${PORT}`));