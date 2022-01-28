const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    cors = require('cors'),
    path = require('path');

const rootPath = path.normalize(__dirname + '/../../');

module.exports = function(app) {
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns', 
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
  }))
  
  app.use(express.static(rootPath));
}
