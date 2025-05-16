function validarActividad({ nombre, email, descripcion, categoria }) {
  if (!nombre || !email || !descripcion || !categoria) {
    return 'Los campos nombre, email, descripción y categoría son obligatorios';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Email inválido';
  }

  return null; // Todo correcto
}

module.exports = {
  validarActividad
};
