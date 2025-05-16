import { useState, useEffect } from 'react'
import ActivityCard from './ui/ActivityCard'
import LoadingSpinner from './ui/LoadingSpinner'
import { getActivities } from '../services/api'

function ActivityList() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    fetchActivities()
  }, [])
  
  const fetchActivities = async () => {
    try {
      setLoading(true)
      // Usamos la función getActivities de nuestro API en lugar de fetch directamente
      const data = await getActivities()
      setActivities(data)
      setError(null)
    } catch (error) {
      console.error('Error:', error)
      setError('No se pudieron cargar las actividades. Por favor, intenta de nuevo más tarde.')
    } finally {
      setLoading(false)
    }
  }
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  
  // Filtrar actividades por categoría
  const filteredActivities = filter 
    ? activities.filter(activity => activity.categoria === filter)
    : activities
  
  if (loading) {
    return <LoadingSpinner />
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4" role="alert">
        <p>{error}</p>
        <button 
          onClick={fetchActivities}
          className="mt-2 text-sm underline text-red-700 hover:text-red-900"
        >
          Intentar de nuevo
        </button>
      </div>
    )
  }
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-semibold text-primary mb-4 md:mb-0">Actividades Escolares ({filteredActivities.length})</h2>
        
        <div className="w-full md:w-auto">
          <select 
            value={filter} 
            onChange={handleFilterChange}
            className="input-field"
          >
            <option value="">Todas las categorías</option>
            <option value="Académica">Académica</option>
            <option value="Deportiva">Deportiva</option>
            <option value="Cultural">Cultural</option>
            <option value="Artística">Artística</option>
            <option value="Tecnológica">Tecnológica</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      
      {filteredActivities.length === 0 ? (
        <div className="text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="mt-4 text-gray-500">No hay actividades disponibles.</p>
          <p className="text-gray-500">¿Por qué no registras una nueva?</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map(activity => (
            <ActivityCard key={activity.id || activity._id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ActivityList