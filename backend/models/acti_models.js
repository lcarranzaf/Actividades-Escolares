let actividades = [];

function agregarActividad(actividad) {
  actividad.id = actividades.length + 1;
  actividades.push(actividad);
  return actividad;
}

function obtenerActividades() {
  return actividades;
}

module.exports = {
  agregarActividad,
  obtenerActividades
};
