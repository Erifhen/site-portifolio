const express = require('express');
const Perfil = require('../models/perfil');


const router = express.Router();

router.post('/', async (req, res) =>{
    try{
        const newPerfil = new Perfil(req.body);
        const savedPerfil = await newPerfil.save();
        res.status(201).json(savedPerfil);
    } catch (err){
        res.status(500).json({err: 'Erro ao criar perfil'});
    }
});

router.get('/', async (req, res) =>{
    try{
        const perfil = await Perfil.findOne();
        res.json(perfil);
    } catch (err) {
        res.status(500).json({err: 'Erro ao buscar perfil'});
    }
});

module.exports = router;