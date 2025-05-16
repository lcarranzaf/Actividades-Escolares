const { agregarActividad, obtenerActividades } = require('../models/acti_models');
const { validarActividad } = require('../validations/validations');

function crearActividad(req, res) {
    const datos = req.body;
    
    if (!datos.fecha) {
        datos.fecha = new Date().toISOString().split('T')[0];
    }

    const error = validarActividad(datos);

    if (error) {
        return res.status(400).json({ error });
    }

    const nueva = agregarActividad(datos);

    const actividad = {
        id: nueva.id,
        nombre: nueva.nombre,
        email: nueva.email,
        descripcion: nueva.descripcion,
        fecha: nueva.fecha,
        categoria: nueva.categoria
    };

    res.status(201).json({ mensaje: 'Actividad registrada', actividad: actividad });
}

function listarActividades(req, res) {
  const actividades = obtenerActividades();

  const actividadesOrdenadas = actividades.map(act => ({
    id: act.id,
    nombre: act.nombre,
    email: act.email,
    descripcion: act.descripcion,
    fecha: act.fecha,
    categoria: act.categoria
  }));

  res.json(actividadesOrdenadas);
}

module.exports = {
  crearActividad,
  listarActividades
};