import FeatureCard from '../components/ui/FeatureCard.jsx'
import InfoCard from '../components/ui/InfoCard.jsx'

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Bienvenido al Sistema de Gestión de Actividades Escolares
        </h1>
        <p className="text-xl text-gray-700">
          Organiza, registra y administra todas las actividades escolares de manera eficiente
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          title="Registrar Actividad"
          description="Añade nuevas actividades escolares con todos los detalles necesarios"
          linkTo="/registro"
          linkText="Crear Actividad"
          colorClass="bg-gradient-to-br from-blue-500 to-blue-700 text-white"
        />
        
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          }
          title="Ver Actividades"
          description="Consulta todas las actividades registradas y filtra por categorías"
          linkTo="/lista"
          linkText="Ver Listado"
          colorClass="bg-gradient-to-br from-purple-500 to-purple-700 text-white"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Qué puedes hacer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            title="Registrar"
            color="text-blue-600"
            description="Crea nuevas actividades escolares con toda la información necesaria."
          />
          <InfoCard
            title="Organizar"
            color="text-purple-600"
            description="Clasifica las actividades por categorías para mantener todo en orden."
          />
          <InfoCard
            title="Consultar"
            color="text-indigo-600"
            description="Visualiza todas las actividades programadas y filtra según tus necesidades."
          />
        </div>
      </div>
    </div>
  );
}