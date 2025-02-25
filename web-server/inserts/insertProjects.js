const axios = require('axios');
const connectDB = require('../database');


connectDB();

async function createProject( ) {
    try{
        const response = await axios.post('http://localhost:5000/api/projects', {
           title: 'https://i.imgur.com/GanQquZ.png',
           name: 'Obcuro Inc.',
           imgcapa: 'https://i.imgur.com/Z6JI02Z.jpg',
           tag: 'Desing de website',
           gallery: ['https://i.imgur.com/HMQAVRM.jpg',  'https://i.imgur.com/hh7pYSr.jpg', 'https://i.imgur.com/s2uefRc.jpg']
        });
        console.log("projeto criado!:", response.data)
    } catch (err){
        console.error('Erro ao criar projeto', err);
    }
    
};

createProject();