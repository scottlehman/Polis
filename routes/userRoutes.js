const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// User Model
const User = require('../models/user');

// @route   POST api/users
// @desc    Auth user
// @access  Public
router.post('/signup', (req, res) => {
  const { firstName, email, password } = req.body;

    // Simple validation
    if(!firstName || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    if(password.length < 8) {
      return res.status(400).json({ msg: "Password must contain minimum of 8 characters" });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(user) return res.status(400).json({ msg: 'User already exists' });
  
        const newUser = new User({
          firstName,
          email,
          password
        });
  
        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                jwt.sign(
                  { id: user.id },
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if(err) throw err;
                    res.json({
                      token,
                      user: {
                        id: user.id,
                        firstName: user.firstName,
                        email: user.email
                      }
                    });
                  }
                )
              });
          })
        })
      })
  });

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;