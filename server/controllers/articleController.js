const Model = require('../models/article');
const ModelUser = require('../models/user')

let Articles = {}
  Articles.create = (req, res) => {
    let article = new Model({
      title : req.body.title,
      content : req.body.content,
      _author : req.body._author,
    })
    article.save((err, result) => {
      if(err){
        res.send(err)
      }else{
        ModelUser.findByIdAndUpdate(result._author ,
          { $push: { "articles": result._id} },
          {safe: true, upsert: true, new: true}, (err, data)=>{
            if(err){
              res.send(err)
            }else{
              res.send(data)
            }
          })
        }
      })
    }
    Articles.getAll = (req, res) => {
      Model.find({}, (err, result) => {
        if(err){
          res.send(err)
        }else{
          res.send(result)
        }
      })
    }
    Articles.getOne = (req, res) => {
      Model.find({_id : req.params.id}, (err, result) => {
        if(err){
          res.send(err)
        }else{
          res.send(result)
        }
      })
    }
    Articles.update = (req, res) => {
      Model.update({_id : req.params.id}, { $set: {
        title : req.body.title,
        content : req.body.content,
        _author : req.body._author

      }}).then((house) => {
        res.send(house)
      }).catch((err) => {
        res.send(err)
      })
    }
    Articles.delete = (req, res) => {
      Model.remove({_id : req.params.id})
      .then((house) => {
        res.send(house)
      }).catch((err) => {
        res.send(err)
      })
    }

module.exports = Articles
