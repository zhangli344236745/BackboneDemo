var express = require('express');
var router = express.Router();
var models=require("../models/model.js");
var User=models.User;
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post("/user",function(req,res){
    var user=new User();
    user.name=req.param.name||"zhangli";
    user.age=parseInt(req.params.age)||0;
    user.save(function(err,user){
        if(err)
            res.send({err:"error"});
        res.send(user);
    });
});

router.get("/users",function(req,res){
    User.find(function(err,users){
       if(err){
           res.send([]);
       }
       res.send(users);
    });
});

module.exports = router;
