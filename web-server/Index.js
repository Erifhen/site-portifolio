const express = require('express');
const connectDB = require('./database');
const cors = require('cors');

const PerfilRoutes = require('./routes/PerfilRoutes');
const SocialMediasRoutes = require('./routes/SocialMediasRoutes');
const ProjectsRoutes = require('./routes/ProjectsRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/api/perfil', PerfilRoutes);
app.use('/api/socialmedias', SocialMediasRoutes);
app.use('/api/projects', ProjectsRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server está onfire na porta ${PORT}`));
