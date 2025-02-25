const express = require('express');
const Projects = require('../models/projetcs');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const newProject = new Projects(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err){
        res.status(500).json({err: 'Erro ao criar projeto'});
    }
});

router.get('/', async (req, res) => {
    try{
        const projetcs = await Projects.find();
        res.json(projetcs);
    } catch (err){
        res.status(500).json({err: 'Erro ao buscar os projetos'});
    }
});

module.exports = router;