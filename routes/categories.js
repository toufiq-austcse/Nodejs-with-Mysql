const Category = require('../models/category');
var express = require('express');
const router = express.Router();

router.get('/categories',(req,res)=>{
    Category.forge().fetchAll().then((categories)=>{
        if(!categories){
            return res.status(404).send('No Category found');
        }
        res.status(200).json(categories);
    }).catch((err) =>{
        res.status(500).json(err.message);
    });
});

router.post('/categories',async (req,res)=>{
    try {
        const category =await Category.forge({name: req.body.name}).save();
        if(category){
            res.status(201).json(category);
        }else{
            res.status(404).send('Not Saved');
        }
    }catch (e) {
        res.status(500).send(e.message)
    }

});

router.get('/categories/:id',async (req,res) =>{
    try {
        const category = await Category.forge({id:req.params.id}).fetch();
        if(category){
            res.status(200).json(category);
        }else{
            res.status(404).send("No Category Found");
        }
    }catch (e) {
        res.status(500).send(e.message)
    }
});

router.put('/categories/:id',async (req,res) =>{
    try {
        const category = await Category.forge({id: req.params.id}).fetch({require:true});
        if(category){
            const updatedCategory = await category.save({name: req.body.name || category.name});
            if(updatedCategory){
                res.status(200).json(updatedCategory);
            }else{
                res.status(404).send("No Category Found");
            }
        }else{
            res.status(404).send("No Category Found");
        }
    }catch (e) {
        res.status(500).send(e.message)
    }
});

router.delete('/categories/:id',async (req,res)=>{
    try {
        const category = await Category.forge({id:req.params.id}).fetch();

        if(category){
            await category.destroy();
            res.status(200).send('Category Destroyed');
        }else {
            res.status(404).send("No Category Found");
        }
    }catch (e) {
        res.status(500).send(e.message)
    }
});

module.exports = router;
