const axios = require('axios');
const connectDB = require('../database');


connectDB();

async function createPerfil( ) {
    try{
        const response = await axios.post('http://localhost:5000/api/perfil', {
            fotoperfil: 'https://drive.google.com/file/d/1lgwQUEHAeoR7xzJYCK2RIEUPG4cg8a1s/view?usp=sharing',
            tags: ["UX/UI Designer", "Graphic Designer", "Branding"],
            descricaoperfil: "After completing Human-Machine Interface (HMI) projects as an electronics technician. I decided to shift my career focus. Creating graphic interfaces became my goal. Now. I'm a Graphic Design graduate. constantly improving in UX/UI.",
            logotipo: "https://drive.google.com/file/d/1sbg2T_rZTayd1iSZgJ4pUgCVwPAO8d2P/view?usp=sharing"
        });
        console.log("Perfil criado:", response.data);
    } catch (err){
        console.error('Erro ao criar perfil:', err);
    }
    
};

createPerfil();