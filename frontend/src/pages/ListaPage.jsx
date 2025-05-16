import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ActivityList from '../components/ActivityList'

function ListaPage() {
  const location = useLocation()
  const [notification, setNotification] = useState(location.state?.message || '')
  
  // Limpiar la notificación después de 5 segundos
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('')
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [notification])
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">Listado de Actividades Escolares</h1>
        <p className="text-gray-600 mt-2">
          Consulta todas las actividades registradas y filtra por categorías
        </p>
      </div>
      
      {notification && (
        <div className="mb-6 bg-green-100 border-l-4 border-green-500 p-4 rounded-md">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-700">{notification}</p>
          </div>
        </div>
      )}
      
      <ActivityList />
    </div>
  )
}

export default ListaPage