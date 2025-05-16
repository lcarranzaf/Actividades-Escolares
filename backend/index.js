const express = require('express');
const cors = require('cors');
const actividadRoutes = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/actividades', actividadRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
