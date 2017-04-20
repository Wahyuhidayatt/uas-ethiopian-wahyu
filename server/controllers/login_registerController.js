const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const Model = require('../models/user');

let Users = {}
  Users.register = (req, res, next) => {
    let user = new Model({
      name : req.body.name,
      username : req.body.username,
      email : req.body.email,
      password : passwordHash.generate(req.body.password)
    });
    user.save((err, result) => {
      if(err) {
        res.send(err);
      } else {
        let newToken = jwt.sign({username : result.username}, 'untuktoken' )
        res.send({
          success : true,
          msg : 'success created',
          token : newToken,
          id : result._id,
          username: result.username
        })
      }
    })
  }
  Users.login = (req, res) => {
    Model.findOne ({
      username : req.body.username
    })
    .then((data) => {
      if(!data){
        res.send({
          msg : 'username not found'
        })
      }else {
        var pass = passwordHash.verify(req.body.password, data.password)

        if(pass){
          var token = jwt.sign({
            username : data.username,
            email : data.email
          }, 'shhhhhhh');
          res.send({
            token : token,
            msg : 'Succes Login'
          })
        }else{
          res.send({
            msg: 'password wrong'
          })
        }
      }
    })
  }
  module.exports = Users
