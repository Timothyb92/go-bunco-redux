const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User.findById(req.params.userName)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const user = {
      userName: req.body.userName,
      password: req.body.password
    };
    db.User.create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  verifyUser: (req, res) => {
    console.log(`running verifyUser in userController`);

    db.User.findOne({
      userName: req.body.userName
    }).then(dbUser => {
      if (dbUser.password === req.body.password) {
        return res.json(dbUser._id);
      } else {
        return null;
      }
    });
  }
};
