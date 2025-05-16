function ActivityCard({ activity }) {
  // Función para formatear fechas correctamente evitando problemas de zona horaria
  const formatDate = (dateString) => {
    if (!dateString) return 'Fecha no disponible';
    try {
      // Método 1: Conservar exactamente la fecha sin conversiones
      const [year, month, day] = dateString.split('-');
      // Crear objeto de fecha usando UTC para evitar ajustes de zona horaria
      const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
      // Formatear usando opciones locales pero manteniendo UTC como zona horaria
      return date.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric', 
        timeZone: 'UTC' // Esto es crucial para mantener la fecha exacta
      });
    } catch (e) {
      console.error('Error formateando fecha:', e);
      return dateString; // Si hay error, mostramos el string original
    }
  };
  
  // Determinar el color de fondo según la categoría
  const getCategoryColor = (categoria) => {
    const colors = {
      'Académica': 'bg-blue-100 text-blue-800',
      'Deportiva': 'bg-green-100 text-green-800',
      'Cultural': 'bg-purple-100 text-purple-800',
      'Artística': 'bg-pink-100 text-pink-800',
      'Tecnológica': 'bg-indigo-100 text-indigo-800',
      'Otro': 'bg-gray-100 text-gray-800'
    }
    return colors[categoria] || 'bg-gray-100 text-gray-800'
  }
  
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-primary">{activity.nombre}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(activity.categoria)}`}>
          {activity.categoria}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{activity.descripcion}</p>
      
      <div className="flex flex-col space-y-2 text-sm text-gray-500">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(activity.fecha)}</span>
        </div>
        
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${activity.email}`} className="text-primary hover:underline">
            {activity.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard