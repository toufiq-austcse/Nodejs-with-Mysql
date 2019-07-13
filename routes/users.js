var express = require('express');
const Users = require('../collection/user');
const User = require('../models/user');

var router = express.Router();


router.get('/users', (req, res) => {
    User.forge().fetchAll().then(collections => {
        res.status(200).json(collections)
    }).catch((error) => {
        res.status(500).json(error);
    })
});

router.post('/users', (req, res) => {
    let user = User.forge({
            name: req.body.name,
            email: req.body.email
        }
    );

    user.save().then((data) => {
        res.status(201).json(data)
    }).catch((err) => {
        res.status(500).json(err);
    });

});

router.get('/users/:id',  (req, res) => {
   User.forge({id:req.params.id}).fetch().then((user)=>{
     if(!user){
         return res.status(404).send('Not Found');
     }
     res.status(200).json(user);
   }).catch((err) =>{
       res.status(500).json(err.message);
   })


});

router.put('/users/:id',(req,res) =>{
    User.forge({id:req.params.id}).fetch({require:true}).then((user)=> {
        console.log(user);
        user.save({
            name: req.body.name || user.name,
            email: req.body.email || user.email
        }).then((data) => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json(err.message);
        })
    }).catch(err =>{
        res.status(500).json(err.message);
    })
});

router.delete('/users/:id',(req,res) =>{
    User.forge({id:req.params.id})
        .fetch({require:true})
        .then((user)=>{
            user.destroy().then((data)=>{
                res.status(200).json(data);
            }).catch((err)=>{
                res.status(500).json(err.message);
            })
        }).catch((err)=>{
        res.status(500).json(err.message);
    })
});
module.exports = router;
