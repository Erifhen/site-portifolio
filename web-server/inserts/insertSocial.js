const axios = require('axios');
const connectDB = require('../database');


connectDB();

async function createSocialMedia( ) {
    try{
        const response = await axios.post('http://localhost:5000/api/socialmedias', {
            link: 'https://www.instagram.com/felipe.vismara?igsh=MW5kdDAwZXV4Y29qYw==',
            icon: 'https://drive.google.com/file/d/1bvfd-tRDN4w7rN2IZnXVRW6jMUB3-sl7/view?usp=sharing',
            redenome: 'Instagram',
            handle: '@felipe.vismara'
        });
        console.log("Social medias criadas:", response.data)
    } catch (err){
        console.error('Erro ao criar social medias', err);
    }
    
};

createSocialMedia();