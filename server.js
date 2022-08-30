// Import dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controller');
const passport = require('passport');
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

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
let myStore = new SequelizeStore({
    db: sequelize,
});
app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: myStore,
}));

app.use(passport.initialize())
app.use(passport.session());

// routing 
app.use(routes);

// Start server
app.listen(PORT, () => console.log(`Now listening on localhost ${PORT}`));