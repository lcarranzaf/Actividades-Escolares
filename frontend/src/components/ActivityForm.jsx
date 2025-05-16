import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createActivity } from '../services/api'

function ActivityForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    descripcion: '',
    fecha: '',
    categoria: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    
    // Validación del nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres'
    }
    
    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }
    
    // Validación de la descripción
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es obligatoria'
    } else if (formData.descripcion.trim().length < 10) {
      newErrors.descripcion = 'La descripción debe tener al menos 10 caracteres'
    }
    
    // Validación de la fecha
    if (!formData.fecha) {
      newErrors.fecha = 'La fecha es obligatoria'
    } else {
      const selectedDate = new Date(formData.fecha)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.fecha = 'La fecha no puede ser anterior a hoy'
      }
    }
    
    // Validación de la categoría
    if (!formData.categoria) {
      newErrors.categoria = 'La categoría es obligatoria'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Usamos la función createActivity de nuestro API en lugar de fetch directamente
      const result = await createActivity(formData)
      
      // Resetear el formulario
      setFormData({
        nombre: '',
        email: '',
        descripcion: '',
        fecha: '',
        categoria: ''
      })
      
      // Redireccionar a la lista de actividades
      navigate('/lista', { state: { message: 'Actividad registrada con éxito' } })
      
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un problema al registrar la actividad. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center text-primary">Registrar Nueva Actividad Escolar</h2>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="nombre" className="label">Nombre de la Actividad</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className={`input-field ${errors.nombre ? 'border-red-500' : ''}`}
            placeholder="Ej: Feria de Ciencias"
          />
          {errors.nombre && <p className="error-message">{errors.nombre}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="label">Email de Contacto</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`input-field ${errors.email ? 'border-red-500' : ''}`}
            placeholder="profesor@escuela.edu"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="descripcion" className="label">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            className={`input-field min-h-[100px] ${errors.descripcion ? 'border-red-500' : ''}`}
            placeholder="Describe la actividad, objetivos, materiales necesarios, etc."
          />
          {errors.descripcion && <p className="error-message">{errors.descripcion}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="fecha" className="label">Fecha de la Actividad</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            className={`input-field ${errors.fecha ? 'border-red-500' : ''}`}
          />
          {errors.fecha && <p className="error-message">{errors.fecha}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="categoria" className="label">Categoría</label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            className={`input-field ${errors.categoria ? 'border-red-500' : ''}`}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Académica">Académica</option>
            <option value="Deportiva">Deportiva</option>
            <option value="Cultural">Cultural</option>
            <option value="Artística">Artística</option>
            <option value="Tecnológica">Tecnológica</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.categoria && <p className="error-message">{errors.categoria}</p>}
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary w-full md:w-1/2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registrando...' : 'Registrar Actividad'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ActivityForm