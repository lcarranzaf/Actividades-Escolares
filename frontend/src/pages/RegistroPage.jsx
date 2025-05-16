import ActivityForm from "../components/ActivityForm"

function RegistroPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">Registro de Actividades Escolares</h1>
        <p className="text-gray-600 mt-2">
          Completa el formulario para registrar una nueva actividad escolar
        </p>
      </div>
      
      <ActivityForm />
      
      <div className="mt-8 bg-blue-50 border-l-4 border-primary p-4 rounded-md">
        <h3 className="text-lg font-medium text-primary">Recomendaciones:</h3>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Proporciona un nombre claro y descriptivo para la actividad.</li>
          <li>Añade una descripción detallada que incluya los objetivos y recursos necesarios.</li>
          <li>Verifica la fecha seleccionada antes de enviar el formulario.</li>
          <li>Asegúrate de clasificar correctamente la actividad para facilitar su búsqueda.</li>
        </ul>
      </div>
    </div>
  )
}

export default RegistroPage