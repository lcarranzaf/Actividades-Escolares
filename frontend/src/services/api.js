import axios from 'axios'

// Configuración base para axios
const api = axios.create({
  baseURL: 'http://localhost:3000',  // Cambiado a puerto 3000 según tu backend
  headers: {
    'Content-Type': 'application/json'
  }
})

// Servicio para obtener todas las actividades
export const getActivities = async () => {
  try {
    const response = await api.get('/api/actividades')  // Actualizado según tu ruta del backend
    return response.data
  } catch (error) {
    console.error('Error al obtener actividades:', error)
    throw error
  }
}

// Servicio para crear una nueva actividad
export const createActivity = async (activityData) => {
  try {
    const response = await api.post('/api/actividades', activityData)
    return response.data
  } catch (error) {
    console.error('Error al crear actividad:', error)
    throw error
  }
}

// Servicio para obtener una actividad por ID
export const getActivityById = async (id) => {
  try {
    const response = await api.get(`/api/actividades/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error al obtener actividad con ID ${id}:`, error)
    throw error
  }
}

export default {
  getActivities,
  createActivity,
  getActivityById
}