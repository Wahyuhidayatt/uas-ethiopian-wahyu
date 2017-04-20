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
