const express = require('express');
const socialMedia = require('../models/socialMedia');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const newSM = new socialMedia(req.body);
        const savedSM = await newSM.save();
        res.status(201).json(savedSM);
    } catch (err){
        res.status(500).json({err: 'Erro ao criar botão de rede'});
    };
})

router.get('/', async (req, res) =>{
    try{
        const webSM = await socialMedia.find();
        res.json(webSM);
    } catch (err){
        res.status(500).json({err: 'Erro ao buscar botão de redes sociais'});
    }
});

module.exports = router;