const express = require('express');
const router = express.Router();
const { crearActividad, listarActividades } = require('../controllers/acti_controllers');

router.post('/', crearActividad);
router.get('/', listarActividades);

module.exports = router;
